import { Atom } from '@dbeining/react-atom';

interface State {
  currentUser: any;
}

const initialState: State = {
  currentUser: null,
};

export const AppState: Atom<State> = Atom.of(initialState);
