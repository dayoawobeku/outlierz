import React, { FC } from 'react';
import { NamedTupleMember } from 'typescript';

interface SVGProps {
  coordX: number;
  coordY: number;
}

const PitchSVG: FC<SVGProps> = ({ coordX, coordY }) => {
  return (
    <svg
      width={210}
      height={150}
      viewBox='0 0 310 207'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        stroke='#BDC9CF'
        strokeWidth={2}
        d='M155.001 1H309.001V206H155.001z'
      />
      <path stroke='#BDC9CF' d='M262.501 48.4742H309.501V161.1912H262.501z' />
      <path stroke='#BDC9CF' d='M290.501 74.2382H309.501V133.6502H290.501z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M262.613 121.785v1.104a36.966 36.966 0 01-1-.477c-3.396-1.693-11.053-6.367-11.053-16.811 0-10.789 6.75-17.062 11.053-17.948l.084-.017v-.091h1v34.191h-.084v.049zm-1-33.106v32.61c-3.455-1.805-10.053-6.257-10.053-15.688 0-5.6 1.892-9.892 4.242-12.772 1.962-2.403 4.166-3.744 5.811-4.15z'
        fill='#BDC9CF'
      />
      <path
        transform='rotate(180 155 206)'
        stroke='#BDC9CF'
        strokeWidth={2}
        d='M155 206H309V411H155z'
      />
      <path
        transform='rotate(180 47.5 158.526)'
        stroke='#BDC9CF'
        d='M47.5005 158.526H94.5005V271.243H47.5005z'
      />
      <path
        transform='rotate(180 19.5 132.762)'
        stroke='#BDC9CF'
        d='M19.5005 132.762H38.5005V192.174H19.5005z'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M47.388 85.215V84.11c.262.121.602.279 1 .477 3.396 1.693 11.054 6.367 11.054 16.811 0 10.789-6.75 17.062-11.054 17.948l-.084.016v.092h-1V85.264h.084v-.05zm1 33.106v-32.61c3.456 1.805 10.054 6.257 10.054 15.688 0 5.6-1.892 9.892-4.243 12.772-1.962 2.403-4.166 3.744-5.81 4.15z'
        fill='#BDC9CF'
      />
      <circle cx={coordX} cy={coordY} r={8} fill='#A91515' />
    </svg>
  );
};

export default PitchSVG;
