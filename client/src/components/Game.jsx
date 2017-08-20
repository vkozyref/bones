import { Component } from 'react';
import PlayerList from './PlayerList';
import Playground from './Playground';

export default class Game extends Component {
    render() {
        return (
            <div>
                <PlayerList />
                <Playground />
            </div>
        )
    }
}