import { swap } from '@dbeining/react-atom';

import * as auth from '../services/auth.service';
import { AppState } from '../AppState';
import { LoginDTO, RegisterDTO } from '../models/auth.models';

export const logout = () => {
  localStorage.clear();

  swap(AppState, state => ({
    ...state,
    currentUser: null,
  }));
};

export const register = async (credentials: RegisterDTO) => {
  const currentUser = await auth.register(credentials);

  swap(AppState, state => ({
    ...state,
    currentUser,
  }));
};

export const login = async (credentials: LoginDTO) => {
  const currentUser = await auth.login(credentials);

  swap(AppState, state => ({
    ...state,
    currentUser,
  }));
};
