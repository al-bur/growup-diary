import { memo } from 'react';

function Child({ product }) {
  console.log(product);
  return <div>2</div>;
}

export default memo(Child);
