import { useCallback, useEffect, useState } from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

function Parent() {
  const [valueForFirstChild, setValueForFirstChild] = useState(null);

  const handleClick = useCallback(() => {}, []);

  useEffect(() => {
    setTimeout(() => {
      setValueForFirstChild('changedValue');
    }, 3000);
  }, []);

  return (
    <>
      <FirstChild value={valueForFirstChild} />
      <SecondChild onClick={handleClick} />
    </>
  );
}

export default Parent;
