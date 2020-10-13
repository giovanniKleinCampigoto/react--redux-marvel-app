import React from 'react';

import { colors } from '../../assets/styles/global';
import Skeleton from '../Skeleton';
import { HeroCardSkeleton, LoadingWrapper } from './styles';

interface LoadingResultsProps {
  itemsNumber: number;
  size: 'big' | 'small';
}

interface CardItemProps {
  size: 'big' | 'small';
}

const CardItem: React.FC<CardItemProps> = ({ size }) => {
  const isBig = size === 'big';
  return (
    <HeroCardSkeleton size={size}>
      <Skeleton
        primaryColor={colors.skeletonPrimary}
        secondaryColor={colors.skeletonSecondary}
        height={isBig ? '324px' : '225px'}
        width={isBig ? '216px' : '150px'}
        radius="4px"
        margin="0"
      />
      <Skeleton
        primaryColor={colors.skeletonPrimary}
        secondaryColor={colors.skeletonSecondary}
        height={isBig ? '35px' : '25px'}
        width={isBig ? '216px' : '150px'}
        radius="4"
        margin="16px 0 0 0"
      />
    </HeroCardSkeleton>
  );
};

const LoadingResults: React.FC<LoadingResultsProps> = ({
  itemsNumber,
  size,
}) => {
  const items: any = new Array(itemsNumber).fill(<CardItem size={size} />);

  return <LoadingWrapper>{items}</LoadingWrapper>;
};

export default LoadingResults;
