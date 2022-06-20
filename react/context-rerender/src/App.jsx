import { useContext } from 'react';
import Child from './Child';
import { DataContext } from './context';

function App() {
  const { data, handleData } = useContext(DataContext);
  console.log(data, handleData);

  console.log('App is rendered');

  return (
    <>
      <Child />
      <button
        onClick={() => {
          handleData('good');
          console.log(data);
        }}
      >
        클릭하면 context의 데이터가 변합니다
      </button>
    </>
  );
}

export default App;
