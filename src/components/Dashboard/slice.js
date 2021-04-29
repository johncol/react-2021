import { createSlice } from '@reduxjs/toolkit';
import jsonState from '../../state.json';

const excludeItem = (item) => (i) => i.id !== item.id;

export const slice = createSlice({
  name: 'dashboard',

  initialState: {
    toTry: jsonState.to_try,
    tried: jsonState.tried,
  },

  reducers: {
    markAsTried: (state, { payload: item }) => {
      return {
        toTry: state.toTry.filter(excludeItem(item)),
        tried: state.tried.concat(item),
      };
    },

    markAsToTry: (state, { payload: item }) => {
      return {
        toTry: state.toTry.concat(item),
        tried: state.tried.filter(excludeItem(item)),
      };
    },
  },
});

export const { actions } = slice;

export const selectors = {
  tried: ({ [slice.name]: items }) => items.tried,
  toTry: ({ [slice.name]: items }) => items.toTry,
};
