import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Game from '../page/Game';
import Rules from '../page/Rules';
import GameList from '../page/GameList';
import Login from '../page/Login';
import NotFound from '../page/NotFound';
import ENUM from './ENUM';

// todo create public private routes and permission handle

export default () => (
  <Switch>
    <Route exact path={ENUM.PATH.ROOT} component={GameList} />
    <Route path={`${ENUM.PATH.GAME}${ENUM.PATH.ID}`} component={Game} />
    <Route path={ENUM.PATH.RULES} component={Rules} />
    <Route path={ENUM.PATH.LOGIN} component={Login} />
    <Route component={NotFound} />
  </Switch>
);
