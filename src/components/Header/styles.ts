import styled from 'styled-components';
import { colors } from '../../assets/styles/global';

export const Container = styled.header`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 16px;
  background: ${colors.primary};
`;

export const Logo = styled.img`
  width: 48px;
  margin-left: 16px;
`;
