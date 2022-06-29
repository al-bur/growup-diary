import { useRef } from 'react';
import { useEffect, useState } from 'react';

function App() {
  const [inputTarget, setInputTarget] = useState(null);
  const inputRef = useRef();
  // const customInput = <input />;

  const showEvent = (e) => {
    console.dir(inputTarget.focus);
    inputTarget.focus();
  };

  useEffect(() => {
    const $input = document.querySelector('#input');

    console.log($input, 'document로 선택한 DOM');
    console.log(inputRef.current, 'ref로 선택한 DOM');
  });

  return (
    <>
      <input
        id="input"
        onClick={(e) => setInputTarget(e.target)}
        ref={inputRef}
      />
      <label>wow</label>
      <input />
      <button onClick={showEvent}></button>
    </>
  );
}

export default App;
