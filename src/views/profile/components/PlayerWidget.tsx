import React from 'react';
import Avatar from 'components/Avatar';
import Pitch from 'components/Pitch';
import { ronaldo } from 'utils/images';

const PlayerWidget = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex h-50'>
        <Avatar
          image={ronaldo}
          alt='player'
          style='rounded-lg w-80 h-100 border border-1 h'
        />
        <div className='text-white pl-6'>
          <ul>
            <li className='text-lg pb-3'>
              Full Name: <span className='font-bold p-3'>Johnson Hugh </span>
            </li>
            <li className='text-lg pb-3'>
              Date of Birth: <span className='font-bold p-3'> 12/05/85</span>
            </li>
            <li className='text-lg pb-3'>
              Birth Country: <span className='font-bold p-3'> Nigeria</span>
            </li>
            <li className='text-lg pb-3'>
              Passport Country: <span className='font-bold p-3'> Nigeria</span>
            </li>
            <li className='text-lg pb-3'>
              Current Team:{' '}
              <span className='font-bold p-3'>Altantic Business FC</span>
            </li>
            <li className='text-lg pb-3'>
              Height/Weight: <span className='font-bold p-3'>85kg/1.2m</span>
            </li>
            <li className='text-lg'>
              Agent: <span className='font-bold p-3'> None</span>
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col text-white'>
        <Pitch coordX={200} coordY={50} />
        <p className='text-lg pb-3'>
          Position: <span className='font-bold p-3'>Forward</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerWidget;
