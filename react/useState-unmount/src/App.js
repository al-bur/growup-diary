import React, { useEffect, useState } from 'react';

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div
      onClick={() => {
        setIsShow((prev) => !prev);
      }}
    >
      {isShow ? <Child /> : <div>loading</div>}
    </div>
  );
}

function Child() {
  const [value, setValue] = useState(() => {
    console.log('initial');

    return 1;
  });

  return <div>{value}</div>;
}

export default App;

// 결론: isShow가 true, false로 바뀔때마다 Child가 unmount 또는 mount되니까 useState 값이 매번 초기화가 된다.
