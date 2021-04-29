import { createSlice } from '@reduxjs/toolkit';
import jsonState from '../../state.json';

const Field = {
  TRIED: 'tried',
  TO_TRY: 'toTry',
};

const excludeItem = (item) => (i) => i.id !== item.id;

export const slice = createSlice({
  name: 'dashboard',

  initialState: {
    [Field.TO_TRY]: jsonState.to_try,
    [Field.TRIED]: jsonState.tried,
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
  tried: (state) => state[slice.name][Field.TRIED],
  toTry: (state) => state[slice.name][Field.TO_TRY],
};
