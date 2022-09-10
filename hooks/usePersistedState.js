import { useState, useEffect, useCallback } from "react";
import { set, keys } from "idb-keyval";

export function usePersistedState(defaultState = []) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    keys().then((retrievedState) =>
      // If a value is retrieved then use it; otherwise default to defaultValue
      setState(retrievedState ?? defaultState)
    );
  }, [setState, defaultState]);

  const setPersistedValue = useCallback(
    (newKey) => {
      set(newKey, "seen");
      setState((v) => [...v, newKey]);
    },
    [setState]
  );

  return [state, setPersistedValue];
}
