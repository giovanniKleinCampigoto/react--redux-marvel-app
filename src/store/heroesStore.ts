import { createStore } from 'redux';

interface HeroesPayload {
  name: string;
  id: number;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface HeroesStoreActions {
  type: 'SAVE';
  payload: {
    heroes: HeroesPayload[];
  };
}

const heroesReducer = (
  state: HeroesPayload[],
  action: HeroesStoreActions,
): HeroesPayload[] => {
  switch (action.type) {
    case 'SAVE':
      return [...state, ...action.payload.heroes];
    default:
      return state;
  }
};

const heroesStore = createStore(heroesReducer);
