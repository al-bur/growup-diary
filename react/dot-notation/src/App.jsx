const MyComponents = {
  FirstComponent: function FirstComponent() {
    return <div>first component</div>;
  },
  SecondComponent: function SecondComponent() {
    return <div>second component</div>;
  },
};

function App() {
  return (
    <>
      <MyComponents.FirstComponent />
      <MyComponents.SecondComponent />
    </>
  );
}

export default App;
