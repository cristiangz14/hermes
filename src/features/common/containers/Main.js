import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Ticket from '../../ticket/containers/Ticket';

const Main = props => (
  <main className="container-fluid">
    <div className="row">
      <div className="col-xs-3">
      </div>
      <div className="col-xs-7">
        <Ticket {...props}/>
      </div>
    </div>
  </main>
);

export default Main;
