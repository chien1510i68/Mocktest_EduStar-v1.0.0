import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  isOpenModalNextSection: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openModalNextSection":
      return {
        ...state,
        isOpenModalNextSection: true,
      };
    case "closeModalNextSection":
      return {
        ...state,
        isOpenModalNextSection: false,
      };
    default:
      return state;
  }
};

function AppProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, initialData);
  return (
    <AppContext.Provider value={{ data, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
