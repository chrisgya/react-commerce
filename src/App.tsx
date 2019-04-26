import React from 'react';
import axios from 'axios';
import { Card } from '@material-ui/core';

const App: React.FC = () => {
  React.useEffect(() => {
    axios.get('http://localhost:8080').then(res => console.log(res));
  }, []);

  return (
    <Card
      style={{
        margin: 'auto',
        marginTop: '5rem',
        padding: '2rem',
        width: '80%'
      }}
    >
      App works
    </Card>
  );
};

export default App;
