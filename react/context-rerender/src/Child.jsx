import { useContext } from 'react';

import { DataContext } from './context.jsx';

function Child() {
  const { isOpen, setIsOpen } = useContext(DataContext);
  console.log('Child is rendered');

  return (
    <button onClick={() => setIsOpen(true)}>
      클릭하면 context의 데이터가 변합니다
    </button>
  );
}

export default Child;