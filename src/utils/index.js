import { useEffect, useState } from "react";
export const isFalsy = (value) => {
  return value === 0 ? false : !value;
};

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};

// const debounce = (func, delay) => {
//     let timeout
//     return () => {
//         if (timeout) {
//             clearTimeout(timeout)
//         }
//         timeout = setTimeout(() => {
//             func()
//         }, delay);
//     }
// }

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};
