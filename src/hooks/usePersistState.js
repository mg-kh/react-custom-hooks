import { useState, useEffect } from "react";

const usePersistState = (key, initValue) => {
  const [localValue, setLocalValue] = useState();

  useEffect(() => {
    try {
      const oldValue = JSON.parse(localStorage.getItem(key));
      if (oldValue) {
        setLocalValue(oldValue);
      } else {
        const stringifiedValue = JSON.stringify(initValue);
        localStorage.setItem(key, stringifiedValue);
        setLocalValue(initValue);
      }
    } catch (error) {
      console.error(error);
      return initValue;
    }
  }, []);

  const handleSetState = (newValue) => {
    try {
      const newIncomingValue =
        typeof newValue === "function" ? newValue(localValue) : newValue;
      setLocalValue(newIncomingValue);
      const stringifiedValue = JSON.stringify(newIncomingValue);
      localStorage.setItem(key, stringifiedValue);
    } catch (error) {
      console.error(error);
    }
  };

  return [localValue, handleSetState];
};

export default usePersistState;
