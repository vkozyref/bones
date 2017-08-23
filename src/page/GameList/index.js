import React from 'react';

const games = [{
  id: '123213-dfdsf-434',
  name: 'game1',
  participants: 3,
  creator: 'player2',
}, {
  id: 'fdsfdsf-23332-fdsf',
  name: 'game2',
  participants: 2,
  creator: 'player5',
}];

export default () => (
  <div>
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Creator</th>
          <th>Participants</th>
          <th />
        </tr>
        {games.map(game => (<tr key={game.id}>
          <td>{game.name}</td>
          <td>{game.creator}</td>
          <td>{game.participants}</td>
          <td><a className="btn">Join</a></td>
        </tr>))}
      </tbody>
    </table>
  </div>
);
