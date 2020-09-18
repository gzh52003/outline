import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';

@withRouter
class App extends React.Component {
  state = {
    num: 10
  }
  changeNumber = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    console.log('App.props',this.props)
    return (
      <div className="App">
        Hello Test {this.state.num}

        <button onClick={this.changeNumber}>change Number</button>
      </div>
    );
  }

}

export default App;
