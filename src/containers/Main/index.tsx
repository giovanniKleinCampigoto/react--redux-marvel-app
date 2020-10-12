import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, HeroesContainer, SectionTitle } from './styles';
import HeroCard from '../../components/HeroCard';
import api from '../../services/api';
import { HeroCardProps } from '../../components/HeroCard/interfaces';
import heroesStore from '../../store/heroesStore';
import { useHeroes } from '../../hooks/useHeroes';

import SearchBar from '../../components/SearchBar';

const Main: React.FC = () => {
  const [heroes, setHeroes] = useHeroes();
  const history = useHistory();
  const [heroName, setHeroName] = useState('');

  const getHeroes = useCallback(async () => {
    const { heroes: storeHeroes } = heroesStore.getState();

    if (storeHeroes.length) {
      setHeroes(storeHeroes);
      return;
    }

    try {
      const {
        data: {
          data: { results },
        },
      } = await api.get('/v1/public/characters');

      heroesStore.dispatch({
        type: 'SAVE_HEROES',
        payload: { heroes: results },
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getHeroes();
  }, []);

  useEffect(() => {
    heroesStore.subscribe(() => {
      const { heroes: storeHeroes } = heroesStore.getState();

      setHeroes(storeHeroes);
    });
  }, []);

  const handleClick = useCallback(
    id => {
      history.push(`/detail/${id}`);
    },
    [history],
  );

  const handleHeroNameChange = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setHeroName(evt.target.value);
    },
    [],
  );

  const handleHeroSearch = useCallback(async () => {
    if (!heroName) return;

    const {
      data: {
        data: { results },
      },
    } = await api.get(`/v1/public/characters?name=${heroName}`);

    heroesStore.dispatch({
      type: 'SEARCH_HEROES',
      payload: { heroes: results },
    });
  }, [heroName]);

  return (
    <Container>
      <SearchBar
        placeholder="Digite o nome do herói"
        label="Search"
        onChange={handleHeroNameChange}
        onBlur={handleHeroSearch}
      />
      <SectionTitle>Search Results</SectionTitle>
      <HeroesContainer>
        {heroes.map((hero: HeroCardProps) => {
          return (
            <HeroCard
              key={hero.id}
              id={hero.id}
              name={hero.name}
              description={hero.description}
              thumbnail={hero.thumbnail}
              onClick={() => handleClick(hero.id)}
            />
          );
        })}
      </HeroesContainer>
    </Container>
  );
};

export default Main;
