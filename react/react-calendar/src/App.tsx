import { useState } from 'react';
import Calendar from 'react-calendar';

const App = () => {
  return (
    <Calendar
      onActiveStartDateChange={(e) => console.log('?', e)}
      onChange={(e: any) => console.log(e)}
      selectRange
      returnValue="range"
    />
  );
};

export default App;
