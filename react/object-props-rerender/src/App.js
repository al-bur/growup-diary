import { useMemo } from 'react';
import Child from './Child';
import useForceRender from './useForceRender';

function App() {
  useForceRender(2000);

  const product = {
    name: 'apple',
    price: '12dollars',
  };

  const memoizedProduct = useMemo(() => product, []);

  return <Child product={memoizedProduct} />;
}

export default App;

// 결론: 객체를 props로 넘겨주면 다른 객체가 생성되기 때문에 참조값이 바뀐다. 그래서, useMemo를 통해서 props의 참조 동일성을 지켜주면 된다.
