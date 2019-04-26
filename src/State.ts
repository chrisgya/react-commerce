import { Atom } from '@dbeining/react-atom';

interface State {
  currentUser: any;
}

export const State: Atom<State> = Atom.of(<State>{});
