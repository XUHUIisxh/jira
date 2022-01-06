import { useEffect, useRef, useState } from "react";
export const isFalsy = (value: unknown) => {
  return value === 0 ? false : !value;
};

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // TODO
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

export const useDebounce = <V>(value: V, delay?: number): V => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debounceValue;
};

export const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current;

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
      }
    };
  }, [title, keepOnUnmount]);
};
