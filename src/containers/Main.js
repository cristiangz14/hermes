import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Ticket from '../features/ticket/containers/Ticket';

const Main = () => (
  <main>
    <Switch>
        <Route exact path="/tickets/new" component={Ticket}></Route>
    </Switch>
  </main>
)

export default Main;
