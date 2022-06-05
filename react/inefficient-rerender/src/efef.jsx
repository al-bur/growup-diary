function Parent() {
  const [valueForFirstChild, setValueForFirstChild] = useState(null);
  const handleClick = useCallback(() => {}, []);
  setTimeout(() => {
    setValueForFirstChild('changedValue');
  }, 3000);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(FirstChild, {
      value: valueForFirstChild,
    }),
    React.createElement(SecondChild, {
      onClick: handleClick,
    })
  );
}
