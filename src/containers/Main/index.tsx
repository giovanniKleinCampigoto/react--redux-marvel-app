import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import HeroCard from '../../components/HeroCard';
import api from '../../services/api';
import { HeroCardProps } from '../../components/HeroCard/interfaces';

const Main: React.FC = () => {
  const [heroes, setHeroes] = useState([]);
  const history = useHistory();

  const getHeroes = useCallback(async () => {
    try {
      const {
        data: {
          data: { results },
        },
      } = await api.get('/v1/public/characters');

      setHeroes(results);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getHeroes();
  }, [getHeroes]);

  const handleClick = useCallback(
    id => {
      history.push(`/detail/${id}`);
    },
    [history],
  );

  return (
    <Container>
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
    </Container>
  );
};

export default Main;
