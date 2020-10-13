import { createStore, Reducer } from 'redux';

interface HeroesPayload {
  name: string;
  id: number;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface StoreState {
  heroes: HeroesPayload[] | [];
}

interface HeroesStoreActions {
  type: 'SAVE_HEROES' | 'SEARCH_HEROES' | 'RESET_STORE';
  payload: {
    heroes: HeroesPayload[];
  };
}

const initialStoreState: StoreState = {
  heroes: [],
};

const heroesReducer: Reducer<any, HeroesStoreActions> = (
  state = initialStoreState,
  action: HeroesStoreActions,
) => {
  switch (action.type) {
    case 'RESET_STORE':
      return {
        heroes: [],
      };
    case 'SAVE_HEROES':
      return {
        heroes: [...state.heroes, ...action.payload.heroes],
      };
    case 'SEARCH_HEROES':
      return {
        heroes: action.payload.heroes,
      };
    default:
      return state;
  }
};

const heroesStore = createStore(heroesReducer);

export default heroesStore;
