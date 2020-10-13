import styled from 'styled-components';

interface SkeletonProps {
  height: string;
  width: string;
  radius: string;
  margin: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export default styled.div<SkeletonProps>`
  height: ${({ height }) => height || '50px'};
  width: ${({ width }) => width || '100px'};
  border-radius: ${({ radius }) => radius || '0'};
  margin: ${({ margin }) => margin || '0'};
  background: linear-gradient(
    270deg,
    ${({ primaryColor }) => primaryColor || '#e5e5e5'},
    ${({ primaryColor }) => primaryColor || '#e5e5e5'},
    ${({ primaryColor }) => primaryColor || '#e5e5e5'},
    ${({ secondaryColor }) => secondaryColor || '#e7ff2'},
    ${({ primaryColor }) => primaryColor || '#e5e5e5'},
    ${({ primaryColor }) => primaryColor || '#e5e5e5'},
    ${({ primaryColor }) => primaryColor || '#e5e5e5'}
  );
  background-size: 400% 400%;
  -webkit-animation: skeleton_animation 1s ease-out-in-out infinite;
  -moz-animation: skeleton_animation 1s ease-out infinite;
  animation: skeleton_animation 1s ease-out infinite;
  @keyframes skeleton_animation {
    0% {
      background-position: 100% 0%;
    }
  }
`;
