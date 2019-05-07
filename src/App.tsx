import React from 'react';
import axios from 'axios';
import { Spinner, Intent, Card, Elevation } from '@blueprintjs/core';
import { AppRouter } from './AppRouter';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:8080').then(res => console.log(res));
  }, []);

  return (
    <>
      <AppRouter />
      <Spinner intent={Intent.PRIMARY} />
      <Card interactive={true} elevation={Elevation.TWO}>
        App works
      </Card>
    </>
  );
};

export default App;
