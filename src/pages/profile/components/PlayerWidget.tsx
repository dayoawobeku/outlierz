import React from 'react';
import Avatar from '../../../components/avatar';
import Pitch from '../../../components/pitch';
import { ronaldo } from '../../../images/images';

const PlayerWidget = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex h-50'>
        <Avatar
          image={ronaldo}
          alt='player'
          style='rounded-sm w-1/2 h-100 border border-1 h'
        />
        <div className='text-white pl-4'>
          <ul>
            <li>Name: Johnson Hugh</li>
            <li>Name: Johnson Hugh</li>
            <li>Name: Johnson Hugh</li>
            <li>Name: Johnson Hugh</li>
          </ul>
        </div>
      </div>

      <div className='flex'>
        <Pitch coordX={200} coordY={50} />
      </div>
    </div>
  );
};

export default PlayerWidget;
