import { createSlice } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from '../../api/json-placeholder-api';
import jsonState from '../../state.json';

const excludeItem = (item) => (i) => i.id !== item.id;

export const slice = createSlice({
  name: 'dashboard',

  initialState: {
    toTry: [],
    tried: [],
    loading: false,
  },

  reducers: {
    loadTechItems: (state) => {
      return {
        ...state,
        toTry: jsonState.items.filter((item) => !item.tried),
        tried: jsonState.items.filter((item) => item.tried),
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
};

export const actions = {
  ...slice.actions,
  ...asyncActions,
};

export const selectors = {
  loading: ({ [slice.name]: items }) => items.loading,
  tried: ({ [slice.name]: items }) => items.tried,
  toTry: ({ [slice.name]: items }) => items.toTry,
};
