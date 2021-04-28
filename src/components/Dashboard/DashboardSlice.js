import { createSlice } from '@reduxjs/toolkit';
import jsonState from './../../state.json';

const Field = {
  TRIED: 'tried',
  TO_TRY: 'toTry',
};

const slice = createSlice({
  name: 'dashboard',

  initialState: {
    [Field.TRIED]: jsonState.tried,
    [Field.TO_TRY]: jsonState.to_try,
  },

  reducers: {
    toggle: (state, action) => {
      const { item, setDone } = action.payload;
      const [source, target] = setDone
        ? [Field.TO_TRY, Field.TRIED]
        : [Field.TRIED, Field.TO_TRY];
      return {
        [source]: state[source].filter((i) => i.id !== item.id),
        [target]: state[target].concat(item),
      };
    },
  },
});

export const { actions, reducer } = slice;

export const selectors = {
  tried: (state) => state[slice.name][Field.TRIED],
  toTry: (state) => state[slice.name][Field.TO_TRY],
};
