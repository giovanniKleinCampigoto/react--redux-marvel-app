import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Container, HeroesContainer, SectionTitle, NoResults } from './styles';
import HeroCard from '../../components/HeroCard';
import api from '../../services/api';
import { HeroCardProps } from '../../components/HeroCard/interfaces';
import heroesStore from '../../store/heroesStore';
import { useHeroes } from '../../hooks/useHeroes';
import LoadingResults from '../../components/LoadingResults';

import SearchBar from '../../components/SearchBar';

const Main: React.FC = () => {
  const [heroes, setHeroes] = useHeroes();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [heroName, setHeroName] = useState('');

  const getHeroes = useCallback(async () => {
    const { heroes: storeHeroes } = heroesStore.getState();

    if (storeHeroes.length) {
      setHeroes(storeHeroes);
      return;
    }
    setLoading(true);

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
  }, [setHeroes]);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  useEffect(() => {
    heroesStore.subscribe(() => {
      const { heroes: storeHeroes } = heroesStore.getState();

      setHeroes(storeHeroes);
      setLoading(false);
    });
  }, [setHeroes]);

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

    heroesStore.dispatch({
      type: 'RESET_STORE',
      payload: {
        heroes: [],
      },
    });
    setLoading(true);

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
        placeholder="Please type the hero name"
        label="Search"
        onChange={handleHeroNameChange}
        onBlur={handleHeroSearch}
      />
      <SectionTitle>Search Results</SectionTitle>
      <HeroesContainer>
        {loading && <LoadingResults size="big" itemsNumber={4} />}
        {!loading && !heroes.length && (
          <NoResults>No results were found :(</NoResults>
        )}
        <AnimatePresence>
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
        </AnimatePresence>
      </HeroesContainer>
    </Container>
  );
};

export default Main;
