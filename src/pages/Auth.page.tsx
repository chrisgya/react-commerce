import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';

import { login, register } from '../services/auth.service';
import { AuthComponent } from '../components/Auth.component';
import { RegisterDTO } from '../models/auth.models';

export enum AuthType {
  login = 'login',
  register = 'register',
}

interface Props {
  authType: AuthType; 
}

export const AuthPage: React.FC<Props> = ({ authType }) => {
  const handleSubmit = (e: RegisterDTO) => {
    authType === AuthType.login && login(e);
    authType === AuthType.register && register(e);
  };

  const oppositeType = authType === AuthType.register ? 'login' : 'register';

  return (
    <>
      <Link to={`/${oppositeType}`}>
        <Button
          style={{ width: '100%', marginBottom: '1em' }}
          intent={Intent.WARNING}
          text={`${oppositeType} instead?`.toUpperCase()}
        />
      </Link>
      <AuthComponent
        headerText={authType === AuthType.register ? 'Registration' : 'Login'}
        onSubmit={handleSubmit}
        showSellerBox={authType === AuthType.register}
      />
    </>
  );
};
