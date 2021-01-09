import React from "react";

const usePersistedState = (defaultValue, localStorageId) => {
    const [persistedState, setPersistedState] = React.useState( () => {
      const localStorageData = localStorage.getItem(localStorageId);
      return localStorageData ? JSON.parse(localStorageData) : defaultValue;
    })
    React.useEffect(() => {
      localStorage.setItem(localStorageId, JSON.stringify(persistedState))
    }, [persistedState, localStorageId] )
    return [persistedState, setPersistedState]
  }

export default usePersistedState;