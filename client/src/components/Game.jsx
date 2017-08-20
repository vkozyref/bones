import React from 'react';
import PlayerList from './PlayerList';
import Playground from './Playground';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <PlayerList />
                <Playground />
            </div>
        )
    }
}