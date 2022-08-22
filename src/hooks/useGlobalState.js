import React, { createContext, useContext, useState } from "react";

const globalContext = createContext(null);

export default function useGlobalState() {
  return useContext(globalContext);
}

export function GlobalStateProvider(props) {
  const [state, setState] = useState(0);

  const value = {
    state,
    setState,
  }

  return (<globalContext.Provider value={value} {...props}>
    {props.children}
  </globalContext.Provider>);
}