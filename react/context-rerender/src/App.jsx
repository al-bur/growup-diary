import { memo, useContext } from 'react';
import Child from './Child';
import { DataContext } from './context';

function App() {
  const { name } = useContext(DataContext);
  console.log('App is rendered');

  return (
    <>
      <h1>App1</h1>
      {name}
      <Child />
    </>
  );
}

export default memo(App);
