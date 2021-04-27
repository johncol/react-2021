import { useDebugValue, useState } from 'react';
import jsonState from './../state.json';

export const useJsonLocalState = () => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(jsonState)));
  useDebugValue(state);

  return [state, setState];
};
