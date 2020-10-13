import React from 'react';

import { Container, CharacterName, HeroImage } from './styles';
import { HeroCardProps } from './interfaces';

const HeroCard: React.FC<HeroCardProps> = ({ name, thumbnail, onClick }) => {
  return (
    <Container
      onClick={onClick}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <HeroImage
        src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
        alt={name}
      />
      <CharacterName>{name}</CharacterName>
    </Container>
  );
};

export default HeroCard;
