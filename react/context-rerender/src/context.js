import { createContext } from 'react';

export const DataContext = createContext();

export const data = {
  name: 'existing',
};

export const handleData = (newValue) => {
  data.name = newValue;
};
