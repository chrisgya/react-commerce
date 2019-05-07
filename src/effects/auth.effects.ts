import axios from 'axios';
import { swap } from '@dbeining/react-atom';

import { State } from '../State';

export const logout = () => {
  localStorage.clear();

  swap(State, state => ({
    ...state,
    currentUser: null,
  }));
};

export const login = async (username: string, password: string) => {
  // try {
  //   const { data } = await axios.post('/login', { username, password });

  //   swap(State, state => ({
  //     ...state,
  //     currentUser: data,
  //   }));
  // } catch {}
  swap(State, state => ({
    ...state,
    currentUser: { username, password },
  }));
};
