import React from 'react';
import Player from './Player';

const players = [{
  id: 'qed32dd-df34f-deew',
  name: 'player1',
  score: 123,
}, {
  id: '43rfsf-4rfdsf-ew4',
  name: 'player2',
  score: 435,
}];

export default () => (
  <div className="players">
    {players.map(player => <Player key={players.id} info={player} />)}
  </div>
);
