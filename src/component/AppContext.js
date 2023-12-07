import React, { createContext, useReducer } from "react";
export const AppContext = createContext();
const initialData = {
  isOpenModalNextSection: false,
  isOpenModalSubmit: false,
  isModalWarning: false,
  typeSection: "listening",
  firstReading: null,
  firstWriting: null,
  firstSpeaking: null,
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

    case "saveFirstReading":
      return { ...state, firstReading: action.payload };
    case "saveFirstWriting":
      return { ...state, firstWriting: action.payload };
    case "saveFirstSpeaking":
      return { ...state, firstSpeaking: action.payload };

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
