import { createContext, useContext, useReducer, useEffect } from 'react';

const AppContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem('agriconnect_user')) || null,
  theme: localStorage.getItem('agriconnect_theme') || 'light',
  resources: [],
  experts: [],
  programs: [],
  loading: false,
  error: null
};

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_RESOURCES':
      return { ...state, resources: action.payload };
    case 'SET_EXPERTS':
      return { ...state, experts: action.payload };
    case 'SET_PROGRAMS':
      return { ...state, programs: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem('agriconnect_user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('agriconnect_user');
    }
  }, [state.user]);

  useEffect(() => {
    localStorage.setItem('agriconnect_theme', state.theme);
  }, [state.theme]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};