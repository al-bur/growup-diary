import { createContext, useReducer } from 'react';
import App from './App';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [isOpen, setIsOpen] = useReducer((previous) => !previous, false);

  console.log('contextProvider is rendered');

  return (
    <DataContext.Provider value={{ isOpen, setIsOpen, name: 'same' }}>
      <App />
      {/* {children} */}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
