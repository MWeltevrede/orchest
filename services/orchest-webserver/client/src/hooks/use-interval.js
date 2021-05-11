// @ts-check
import React from "react";

/**
 * @param {() => void} callback
 * @param {number | null} delay
 */
export const useInterval = (callback, delay) => {
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
