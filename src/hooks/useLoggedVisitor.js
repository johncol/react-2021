import { useState } from 'react';

const STORAGE_KEY = 'visitorName';

export const useLoggedVisitor = () => {
  const [visitor, setVisitor] = useState(
    localStorage.getItem(STORAGE_KEY) || ''
  );

  const updateLoggedVisitor = (newLoggedVisitor) => {
    localStorage.setItem(STORAGE_KEY, newLoggedVisitor);
    setVisitor(newLoggedVisitor);
  };

  return [visitor, updateLoggedVisitor];
};
