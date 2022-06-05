import { useCallback, useEffect, useMemo, useState } from 'react';
import FirstChild from './FirstChild';
import SecondChild2 from './SecondChild2';

function Parent() {
  const [valueForFirstChild, setValueForFirstChild] = useState(null);

  const item = {
    name: 'Thinkpad',
    prcie: '1,000,000',
  };

  const memoizedItem = useMemo(() => item, []);

  useEffect(() => {
    setTimeout(() => {
      setValueForFirstChild('changedValue');
    }, 3000);
  }, []);

  return (
    <>
      <FirstChild value={valueForFirstChild} />
      <SecondChild2 item={memoizedItem} />
    </>
  );
}

export default Parent;
