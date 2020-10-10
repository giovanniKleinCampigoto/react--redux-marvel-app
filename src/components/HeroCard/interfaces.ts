import { MouseEventHandler } from 'react';

export interface HeroCardProps {
  name: string;
  id: number;
  description?: string;
  onClick: MouseEventHandler<HTMLDivElement>;
  thumbnail: {
    path: string;
    extension: string;
  };
}
