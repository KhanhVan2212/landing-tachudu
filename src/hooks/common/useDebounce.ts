import { useCallback, useEffect, useRef } from "react";

const useDebounce = (callback: any, delay: number) => {
  const handlerRef = useRef<any>();

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
      handlerRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  // Cleanup
  useEffect(() => {
    return () => {
      if (handlerRef.current) {
        clearTimeout(handlerRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

export default useDebounce;
