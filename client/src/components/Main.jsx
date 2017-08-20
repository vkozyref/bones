import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';
import Rules from './Rules';
import GameList from './GameList';
import Login from './Login';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/game/:id' component={Game} />
                <Route exact path='/rules' component={Rules} />
                <Route exact path='/login' component={Login} />
                <Route path='/' component={GameList} />
            </Switch>
        )
    }
}