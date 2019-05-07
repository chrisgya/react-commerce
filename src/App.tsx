import React from 'react';
import axios from 'axios';
import { Spinner, Intent, Card, Elevation } from '@blueprintjs/core';

import { logout } from './effects/auth.effects';
import { AppRouter } from './AppRouter';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:8080').then(res => console.log(res));
  }, []);

  return (
    <>
      <AppRouter onLogout={logout} />
      <Spinner intent={Intent.PRIMARY} />
      <Card interactive={true} elevation={Elevation.TWO}>
        App works
      </Card>
    </>
  );
};

export default App;
