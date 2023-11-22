import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  isOpenModalConfirm: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "openModalConfirm":
      return {
        ...state,
        isOpenModalConfirm: true,
      };
    case "closeModalConfirm":
      return {
        ...state,
        isOpenModalConfirm: false,
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
