import { useDebugValue } from 'react';
import state from './../state.json';

export const useJsonLocalState = (key) => {
  useDebugValue(state);

  return [
    key ? state[key] : state,
    () => {
      throw new Error('Unsupported setter in useJsonFileState hook');
    },
  ];
};
