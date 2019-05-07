import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { NavComponent } from './components/Nav.component';

interface Props {
  onLogout?(): void;
}

export const AppRouter: React.SFC<Props> = ({ onLogout }) => {
  return (
    <Router>
      <NavComponent onLogout={onLogout} />
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <div>Home Page</div>} />
          <Route path="*" render={() => <div>App Router Works!</div>} />
        </Switch>
      </div>
    </Router>
  );
};
