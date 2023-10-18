import { FC } from 'react';
import PitchSVG from './svg/pitch';

interface PitchProps {
  coordX: number;
  coordY: number;
}

const Pitch: FC<PitchProps> = ({ coordX = 205, coordY = 90 }) => {
  const renderPosition = () => {};
  return <PitchSVG coordX={coordX} coordY={coordY} />;
};

export default Pitch;
