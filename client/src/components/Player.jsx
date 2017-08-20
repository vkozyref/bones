import React from 'react';

export default class Player extends React.Component {
    render() {
        return (
            <div className="player-item">
                <div className="player-name">{props.info.name}</div>
                <div className="player-score">{props.info.score}</div>
            </div>
        )
    }
}