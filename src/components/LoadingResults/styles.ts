import styled, { css } from 'styled-components';
import { colors } from '../../assets/styles/global';

interface HeroCardSkeletonProps {
  size: 'big' | 'small';
}

export const HeroCardSkeleton = styled.div<HeroCardSkeletonProps>`
  margin: 16px 8px;
  padding: 16px;
  ${props =>
    props.size === 'big' &&
    css`
      width: 216px;
      height: 430px;
    `}

  ${props =>
    props.size === 'small' &&
    css`
      width: 150px;
      height: 283px;
    `}
  background: ${colors.primary};
  border-radius: 4px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  transition: box-shadow 200ms;
`;

export const LoadingWrapper = styled.div`
  display: flex;
`;
