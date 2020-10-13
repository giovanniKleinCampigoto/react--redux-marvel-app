import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/global';

export const Container = styled.section`
  max-width: 1024px;
  margin: 0 auto;
`;

export const HeroImg = styled.img`
  width: 450px;
  border-radius: 4px;
`;

export const Description = styled.p``;

export const MainContent = styled.div`
  display: flex;
  margin: 60px 0;
`;

export const SectionTitle = styled.h1`
  color: white;
  font-size: 34px;
`;

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
`;

export const HeroName = styled.h1`
  margin-top: 0;
  color: #fff;
  font-size: 34px;
`;

export const HeroDescription = styled.p`
  color: #fff;
`;

interface ButtonProps {
  favorite: boolean;
}

export const ButtonContainer = styled.div<ButtonProps>`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  a {
    color: #fff;
    margin-right: 8px;
    margin-bottom: 32px;
  }

  button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    color: ${colors.marvel};
    padding: 16px;
    border: 2px solid ${colors.marvel};
    border-radius: 4px;
    background: transparent;
    cursor: pointer;
    font-size: 18px;
    outline: 0;
    transition: all 300ms;

    ${props =>
      props.favorite &&
      css`
        background: ${colors.oxfordBlue};
        border: none;
        color: white;
        :before {
          position: absolute;
          right: 141px;
          top: 28px;
          content: '';
          width: 20px;
          height: 2px;
          background: #fff;
          border-radius: 8px;
          transform: rotate(45deg);
        }
      `}

    svg {
      position: relative;
      margin-right: 8px;
    }
  }
`;
