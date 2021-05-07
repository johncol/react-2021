import { createSlice } from '@reduxjs/toolkit';
import { JsonPlaceholderApi } from '../../api/json-placeholder-api';
import { TechItemsApi } from '../../api/tech-items-api';

const getListKeys = (item) => {
  return item.tried ? ['tried', 'toTry'] : ['toTry', 'tried'];
};

export const slice = createSlice({
  name: 'dashboard',

  initialState: {
    toTry: [],
    tried: [],
    loading: false,
    error: false,
  },

  reducers: {
    saveItemsInStore: (state, { payload: { toTry, tried } }) => {
      return {
        ...state,
        toTry,
        tried,
      };
    },

    toggleInStore: (state, { payload: item }) => {
      const [list, other] = getListKeys(item);
      state[list].push(item);
      state[other] = state[other].filter(({ id }) => id !== item.id);
    },

    removeFromStore: (state, { payload: item }) => {
      const [list] = getListKeys(item);
      state[list] = state[list].filter(({ id }) => id !== item.id);
    },

    addToStore: (state, { payload: item }) => {
      const [list] = getListKeys(item);
      state[list].push(item);
    },

    loading: (state, { payload: loading }) => {
      state.loading = loading;
    },

    error: (state, { payload: error }) => {
      state.error = error;
    },
  },
});

const httpRequestWrapper = async (dispatch, callback) => {
  dispatch(slice.actions.loading(true));

  try {
    await callback();
  } catch (error) {
    dispatch(slice.actions.error(error.message));
  }

  dispatch(slice.actions.loading(false));
};

const asyncActions = {
  addRandomItemToTry: () => async (dispatch) => {
    await httpRequestWrapper(dispatch, async () => {
      const randomId = Date.now() % 200;
      const { title } = await JsonPlaceholderApi.fetchTodo(randomId);
      const item = {
        id: Date.now() % randomId,
        priority: Date.now() % randomId,
        description: title,
      };
      dispatch(slice.actions.addToStore(item));
    });
  },

  loadTechItems: () => async (dispatch) => {
    await httpRequestWrapper(dispatch, async () => {
      const { Items: items } = await TechItemsApi.listAll();
      const toTry = items.filter((item) => !item.tried);
      const tried = items.filter((item) => item.tried);
      dispatch(slice.actions.saveItemsInStore({ toTry, tried }));
    });
  },

  toggleItemTriedStatus: (item) => async (dispatch) => {
    const toggledItem = { ...item, tried: !item.tried };
    await httpRequestWrapper(dispatch, async () => {
      await TechItemsApi.toggleTriedStatus(toggledItem);
      dispatch(slice.actions.toggleInStore(toggledItem));
    });
  },

  createNewItem: (description) => async (dispatch) => {
    await httpRequestWrapper(dispatch, async () => {
      const item = await TechItemsApi.createItem(description);
      dispatch(slice.actions.addToStore(item));
    });
  },

  deleteItem: (item) => async (dispatch) => {
    await httpRequestWrapper(dispatch, async () => {
      await TechItemsApi.deleteItem(item);
      dispatch(slice.actions.removeFromStore(item));
    });
  },
};

export const actions = {
  ...slice.actions,
  ...asyncActions,
};

export const selectors = {
  all: ({ [slice.name]: items }) => items,
  error: ({ [slice.name]: items }) => items.error,
  loading: ({ [slice.name]: items }) => items.loading,
  tried: ({ [slice.name]: items }) => items.tried,
  toTry: ({ [slice.name]: items }) => items.toTry,
};
