import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Alignment, Button, Intent } from '@blueprintjs/core';

interface Props {
  onLogout?(): void;
}

export const NavComponent: React.SFC<Props> = ({ onLogout }) => (
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
      <Button
        text="Logout"
        icon="user"
        intent={Intent.PRIMARY}
        onClick={() => onLogout && onLogout()}
      />
    </Navbar.Group>
  </Navbar>
);
