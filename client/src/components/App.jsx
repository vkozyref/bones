import { Component } from 'react';
import Main from './Main';
import Header from './Header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}