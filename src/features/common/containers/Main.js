import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Ticket from '../../ticket/containers/Ticket';

const Main = () => (
  <main>
    <Switch>
        <Route path="/" component={Ticket}></Route>
    </Switch>
  </main>
)

export default Main;
