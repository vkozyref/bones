import React from 'react';
import PropTypes from 'prop-types';

const Player = ({ info }) => (
  <div className="player-item">
    <div className="player-name">{info.name}</div>
    <div className="player-score">{info.score}</div>
  </div>
);

Player.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string,
    info: PropTypes.number,
  }).isRequired,
};

export default Player;
