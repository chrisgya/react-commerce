import React from 'react';
import axios from 'axios';
import { Spinner, Intent, Card, Elevation } from '@blueprintjs/core';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:8080').then(res => console.log(res));
  }, []);

  return (
    <>
      <Spinner intent={Intent.PRIMARY} />
      <Card interactive={true} elevation={Elevation.TWO}>
        App works
      </Card>
    </>
  );
};

export default App;
