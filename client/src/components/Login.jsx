import { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div>
        <form method="post">
            <label>Username: <input type="text" name="userName"/></label>
            <label>Password: <input type="text" name="password"/></label>
            <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}