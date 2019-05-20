import React from 'react';
import axios from 'axios';
import { useAtom } from '@dbeining/react-atom';

import { logout } from './effects/auth.effects';
import { AppRouter } from './AppRouter';
import { AppState } from './AppState';

const App: React.FC = () => {
  const { currentUser } = useAtom(AppState);

  React.useEffect(() => {
    axios.get('http://localhost:8080').then(res => console.log(res));
  }, []);

  return <AppRouter onLogout={logout} />;
};

export default App;
