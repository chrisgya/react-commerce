import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { NavComponent } from './components/Nav.component';
import { AuthPage } from './pages/Auth.page';

interface Props {
  onLogout?(): void;
}

export const AppRouter: React.SFC<Props> = ({ onLogout }) => {
  return (
    <Router>
      <NavComponent onLogout={onLogout} />
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => <div>Home Page</div>} />
          <Route
            exact
            path='/login'
            render={() => <AuthPage authType='login' />}
          />
          <Route
            exact
            path='/register'
            render={() => <AuthPage authType='register' />}
          />
          <Route path='*' render={() => <div>App Router Works!</div>} />
        </Switch>
      </div>
    </Router>
  );
};
