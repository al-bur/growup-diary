## forwardRef

There is one caveat to the above example: refs will not get passed through. That’s because ref is not a prop. Like key, it’s handled differently by React. If you add a ref to a HOC, the ref will refer to the outermost container component, not the wrapped component.

React에서 특수한 목적으로 사용되기 때문에 일반적인 용도로 사용할 수 없는 prop이 몇 가지 있습니다. 대표적인 예로 루프를 돌면서 동일한 컴포넌트 여러 번 랜더링할 때 사용하는 key prop을 들 수 있는데요. ref prop도 마찬가지로 HTML 엘리먼트 접근이라는 특수한 용도로 사용되기 때문에 일반적인 prop으로 사용을 할 수 없습니다.

### forwardRef를 적용한 component 예시 코드 (https://www.daleseo.com/react-forward-ref/)

```javascript
import React, { forwardRef, useRef } from 'react';

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

function Field() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <Input ref={inputRef} />
      <button onClick={handleFocus}>입력란 포커스</button>
    </>
  );
}
```

### 의문

- 일반적으로 forwardRef() 함수는 HTML 엘리먼트 대신에 사용되는 최말단 컴포넌트(ex. <Input/>, <Button/>)를 대상으로 주로 사용되며, 그 보다 상위 컴포넌트에서는 forwardRef() 함수를 사용하는 것이 권장되지 않습니다. 왜냐하면 어떤 컴포넌트의 내부에 있는 HTML 엘리먼트의 레퍼런스를 외부에 있는 다른 컴포넌트에서 접근하도록 하는 것은 컴포넌트 간의 결합도(coupling)을 증가시켜 애플리케이션의 유지보수를 어렵게 만들기 때문입니다.
