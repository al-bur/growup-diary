import { useRef } from 'react';

function Form() {
  const name = useRef();
  const age = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name.current.value, age.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={name} placeholder="name" />
      <input ref={age} placeholder="age" />
      <button type="submit">제출</button>
    </form>
  );
}

export default Form;
