import { Dispatch, SetStateAction, useState } from 'react';
import heroesStore from '../store/heroesStore';

interface HeroComics {
  name: string;
  resourceURI: string;
}

export interface HeroProps {
  name: string;
  id: number;
  description?: string;
  comics: {
    items: HeroComics[];
  };
  urls: [{ type: string; url: string }];
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const useHeroes: any = () => {
  const [heroesState, setHeroesState] = useState<HeroProps[]>([]);

  if (heroesState.length) {
    console.log(heroesState);
    return [heroesState, setHeroesState];
  }

  heroesStore.subscribe(() => {
    const { heroes: storeHeroes } = heroesStore.getState();

    if (storeHeroes.length) return;

    setHeroesState(storeHeroes);
  });

  return [heroesState, setHeroesState];
};

export const useFindHeroById = (id: number): HeroProps => {
  const { heroes: storeHeroes } = heroesStore.getState();

  const [hero] = storeHeroes.filter((x: HeroProps) => x.id === id);

  return hero;
};
