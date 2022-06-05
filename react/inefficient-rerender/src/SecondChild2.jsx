// import { memo } from 'react';

import React from 'react';
import GrandChild from './GrandChild';

function SecondChild({ item }) {
  return (
    <div>
      {item.name}
      {item.price}
      {Array.from({ length: 1000 }).map((_, idx) => (
        <GrandChild key={idx + 1} order={idx} />
      ))}
    </div>
  );
}

export default React.memo(SecondChild);
