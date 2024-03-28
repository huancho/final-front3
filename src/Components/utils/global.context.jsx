import { createContext, useContext, useEffect, useReducer } from 'react';

export const initialState = { darkMode: false, data: [] };

const ContextGlobal = createContext();

const clinicReducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, data: action.payload };
    case 'CHANGE_COLOR':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(clinicReducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'GET_DATA', payload: data }))
      .catch((e) => console.error('Error fetching data: ', e));
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextProvider = () => useContext(ContextGlobal);
