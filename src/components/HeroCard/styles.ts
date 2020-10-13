import { MouseEventHandler } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../../assets/styles/global';

interface ContainerProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const Container = styled(motion.div)<ContainerProps>`
  margin: 16px 8px;
  padding: 16px;
  max-width: 216px;
  background: ${colors.primary};
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 200ms;

  :hover {
    box-shadow: none;
  }
`;

export const CharacterName = styled.h3`
  font-size: 24px;
  color: #fff;
  font-weight: 500;
  margin: 0;
  margin: 16px 0;
`;

export const HeroImage = styled.img`
  border-radius: 4px;
`;
