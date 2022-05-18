import React from 'react';

function App() {
  return <WordAdder />;
}

export default App;

// PureComponent를 확장하면, props가 같으면 리렌더링을 해주지 않는다.
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>;
  }
}

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
    // The problem is that PureComponent will do a simple comparison between the old and new values of this.props.words. Since this code mutates the words array in the handleClick method of WordAdder, the old and new values of this.props.words will compare as equal, even though the actual words in the array have changed.
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
