import React, { useState } from "react";

export const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : value;
  });

  return [storedValue];
};
