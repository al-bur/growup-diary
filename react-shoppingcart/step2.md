## 220518

- 아래의 코드에서 handle\* 함수가 호출되면, 리렌더링은 되지만, 재조정을 거쳐서 commit 되지는 않는다. `this.state.words`는 해당 배열에 대한 참조값이므로, `words`에 직접 push를 하게되면 기존의 state에 변화가 생기게되고, 이후에 setState를 해서 렌더링은 되지만, commit 되지는 않는 것 같다.

```javascript
class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar'],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({ words: words });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}
```

## 220522

- json()메소드 역시 비동기 함수이기 때문에 또 하나의 Promise를 반환한다.
