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
  favorites: HeroesPayload[] | [];
}

interface HeroesStoreActions {
  type: 'SAVE_FAVORITE' | 'DELETE_FAVORITE';
  payload: {
    favorite?: HeroesPayload;
    id?: number;
  };
}

const initialStoreState: StoreState = {
  favorites: [],
};

const favoritesReducer: Reducer<any, HeroesStoreActions> = (
  state = initialStoreState,
  action: HeroesStoreActions,
) => {
  switch (action.type) {
    case 'SAVE_FAVORITE':
      return {
        favorites: [...state.favorites, action.payload.favorite],
      };
    case 'DELETE_FAVORITE':
      return {
        favorites: state.favorites.filter(
          (x: HeroesPayload) => x.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};

const favoriteStore = createStore(favoritesReducer);

export default favoriteStore;
