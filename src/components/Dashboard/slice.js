import { createSlice } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from '../../api/json-placeholder-api';
import { TechItemsApi } from '../../api/tech-items-api';

const excludeItem = (item) => (i) => i.id !== item.id;

export const slice = createSlice({
  name: 'dashboard',

  initialState: {
    toTry: [],
    tried: [],
    loading: false,
    error: false,
  },

  reducers: {
    saveTechItems: (state, { payload: { toTry, tried } }) => {
      return {
        ...state,
        toTry,
        tried,
      };
    },

    markAsTried: (state, { payload: item }) => {
      return {
        ...state,
        toTry: state.toTry.filter(excludeItem(item)),
        tried: state.tried.concat(item),
      };
    },

    markAsToTry: (state, { payload: item }) => {
      return {
        ...state,
        toTry: state.toTry.concat(item),
        tried: state.tried.filter(excludeItem(item)),
      };
    },

    loading: (state, { payload: loading }) => {
      state.loading = loading;
    },

    error: (state, { payload: error }) => {
      state.error = error;
    },
  },
});

const asyncActions = {
  addRandomItemToTry: () => async (dispatch) => {
    dispatch(slice.actions.loading(true));
    const randomId = Date.now() % 200;
    const { title } = await jsonPlaceholderApi.fetchTodo(randomId);
    const item = {
      id: Date.now() % randomId,
      priority: Date.now() % randomId,
      description: title,
    };
    dispatch(slice.actions.markAsToTry(item));
    dispatch(slice.actions.loading(false));
  },

  loadTechItems: () => async (dispatch) => {
    dispatch(slice.actions.loading(true));

    try {
      const items = await TechItemsApi.listAll();
      const toTry = items.filter((item) => !item.tried);
      const tried = items.filter((item) => item.tried);
      dispatch(slice.actions.saveTechItems({ toTry, tried }));
    } catch (error) {
      dispatch(slice.actions.error(error.message));
    }

    dispatch(slice.actions.loading(false));
  },

  toggleItemTriedStatus: (item) => async (dispatch) => {
    const toggledItem = { ...item, tried: !item.tried };
    dispatch(slice.actions.loading(true));
    try {
      await TechItemsApi.toggleTriedStatus(toggledItem);
      if (toggledItem.tried) {
        dispatch(slice.actions.markAsTried(toggledItem));
      } else {
        dispatch(slice.actions.markAsToTry(toggledItem));
      }
    } catch (error) {
      dispatch(slice.actions.error(error.message));
    }
    dispatch(slice.actions.loading(false));
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
