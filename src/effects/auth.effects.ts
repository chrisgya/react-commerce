import { swap } from '@dbeining/react-atom';

import { State } from '../State';

export const logout = () => {
  localStorage.clear();

  swap(State, state => ({
    ...state,
    currentUser: null,
  }));
};
