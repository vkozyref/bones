import React from 'react';

export default () => (
  <div>
    <form method="post">
      <p>Username: <input type="text" name="userName" /></p>
      <p>Password: <input type="text" name="password" /></p>
      <input type="submit" value="Login" />
    </form>
  </div>
);
