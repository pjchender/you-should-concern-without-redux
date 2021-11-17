import { createContext, useContext, useReducer } from 'react';

const initialState = {
  red: 0,
  blue: 0,
  green: 0,
};

export const CountContext = createContext(initialState);

export const countReducer = (state, action) => {
  const { color, value } = action.payload;
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        [color]: state[color] + 1,
      };
    }
    case 'decrement': {
      return {
        ...state,
        [color]: state[color] - 1,
      };
    }
    case 'update': {
      return {
        ...state,
        [color]: value,
      };
    }
    default:
      return state;
  }
};

const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const value = { state, dispatch };
  return (
    <CountContext.Provider value={value}>{children}</CountContext.Provider>
  );
};

const useCount = () => {
  const ctx = useContext(CountContext);
  if (ctx === undefined) {
    throw new Error('useCount must be used with a CountProvider');
  }

  return ctx;
};

export { CountProvider, useCount };
