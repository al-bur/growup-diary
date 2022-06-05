// import { memo } from 'react';

import React from 'react';
import GrandChild from './GrandChild';

function SecondChild({ onClick }) {
  console.log('secondChild 컴포넌트가 렌더링되었습니다');

  return (
    <div onClick={onClick}>
      {Array.from({ length: 1000 }).map((_, idx) => (
        <GrandChild key={idx + 1} order={idx} />
      ))}
    </div>
  );
}

export default React.memo(SecondChild);
