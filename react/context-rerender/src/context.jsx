import { createContext, useReducer } from 'react';

const DataContext = createContext();

function DataContextProvider({ children }) {
  const [isOpen, setIsOpen] = useReducer((previous) => !previous, false);

  console.log('contextProvider is rendered');

  return (
    <DataContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
