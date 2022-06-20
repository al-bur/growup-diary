function App() {
  setTimeout(() => {
    console.log('setTimeout is not caught by error boundary');
    throw Error();
  }, 1000);

  return [
    <h1>this is App</h1>,
    <button
      onClick={() => {
        console.log('event handler is not caught error boundary');
        throw Error();
      }}
    ></button>,
  ];
}

export default App;
