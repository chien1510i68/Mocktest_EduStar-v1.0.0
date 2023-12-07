import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  isOpenModalNextSection: false,
  isOpenModalSubmit: false,
  isModalWarning: false,
  typeSection: "listening",
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
    case "openModalSubmit":
      return {
        ...state,
        isOpenModalSubmit: true,
      };
    case "closeModalSubmit":
      return {
        ...state,
        isOpenModalSubmit: false,
      };
    case "openModalWarning":
      return {
        ...state,
        isModalWarning: true,
      };
    case "closeModalWarning":
      return {
        ...state,
        isModalWarning: false,
      };
    case "changeType":
      return {
        ...state,
        type: action.payload,
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
