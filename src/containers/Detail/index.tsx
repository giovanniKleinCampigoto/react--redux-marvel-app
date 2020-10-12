import React, { useState, useEffect, useCallback } from 'react';

import { useHistory } from 'react-router-dom';

import { FiHeart } from 'react-icons/fi';
import {
  Container,
  HeroImg,
  MainContent,
  HeroName,
  HeroInfo,
  HeroDescription,
  ButtonContainer,
} from './styles';

import { useFindHeroById } from '../../hooks/useHeroes';

import favoriteStore from '../../store/favoritesStore';

import HeroComics from '../HeroComics';

const Detail: React.FC = () => {
  const history = useHistory();
  const id = Number(history.location.pathname.replace('/detail/', ''));
  const hero = useFindHeroById(id);

  const [favorite, setFavorite] = useState(() => {
    const { favorites } = favoriteStore.getState();

    const favoriteFilter = favorites.filter((x: any) => x.id === hero.id);

    return !!favoriteFilter.length;
  });

  const saveFavorite = useCallback(() => {
    if (!favorite) {
      favoriteStore.dispatch({
        type: 'SAVE_FAVORITE',
        payload: {
          favorite: hero,
        },
      });
      setFavorite(true);
      return;
    }

    favoriteStore.dispatch({
      type: 'DELETE_FAVORITE',
      payload: {
        id: hero.id,
      },
    });
    setFavorite(false);
  }, [hero, favorite]);

  return (
    <Container>
      <MainContent>
        <HeroImg
          src={`${hero?.thumbnail.path}/detail.${hero?.thumbnail.extension}`}
        />
        <HeroInfo>
          <HeroName>{hero.name}</HeroName>
          <HeroDescription>
            {hero.description || 'No description avalible :('}
          </HeroDescription>

          <ButtonContainer favorite={favorite}>
            <a href={hero.urls[0].url} target="_blank" rel="noreferrer">
              More details
            </a>
            <button onClick={saveFavorite} type="button">
              <FiHeart />
              {favorite ? 'Unfavorite' : 'Favorite'}
            </button>
          </ButtonContainer>
        </HeroInfo>
      </MainContent>

      {hero.comics.items.length && <HeroComics comics={hero.comics.items} />}
    </Container>
  );
};

export default Detail;
