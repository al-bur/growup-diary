import { useContext } from 'react';

import { DataContext } from './context.jsx';

function App2() {
  // const { isOpen } = useContext(DataContext);

  console.log('App2 is rendered');

  return (
    <>
      <h2>App2</h2>
      {/* <h3>{isOpen}</h3> */}
    </>
  );
}

export default App2;
