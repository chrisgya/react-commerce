import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, Intent } from '@blueprintjs/core';

import { login, register } from '../services/auth.service';
import { AuthComponent } from '../components/Auth.component';
import { RegisterDTO } from '../models/auth.models';

interface Props {
  authType: 'login' | 'register';
}

export const AuthPage: React.FC<Props> = ({ authType }) => {
  const handleSubmit = (e: RegisterDTO) => {
    authType === 'login' && login(e);
    authType === 'register' && register(e);
  };

  const oppositeType = authType === 'register' ? 'login' : 'register';

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
        headerText={authType === 'register' ? 'Registration' : 'Login'}
        onSubmit={handleSubmit}
        showSellerBox={authType === 'register'}
      />
    </>
  );
};
