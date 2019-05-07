import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar, Button, Alignment, Intent } from '@blueprintjs/core';

export const AppRouter: React.FC<{}> = () => {
  return (
    <Router>
      <Navbar className="bp3-dark">
        <Navbar.Group align={Alignment.LEFT}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Navbar.Heading>React Commerce</Navbar.Heading>
          </Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Link to="/cart">
            <Button text="Cart" icon="shopping-cart" intent={Intent.WARNING} />
          </Link>
          <Navbar.Divider />
          <Button text="Login" icon="user" intent={Intent.PRIMARY} />
        </Navbar.Group>
      </Navbar>

      <Switch>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="*" render={() => <div>App Router Works!</div>} />
      </Switch>
    </Router>
  );
};
