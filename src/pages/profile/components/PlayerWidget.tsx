import React from 'react'
import Pitch from '../../../components/pitch';

const PlayerWidget = () => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-white text-xl'>PlayerWidget</h1>
      <div className='flex'>
        <Pitch coordX={200} coordY={50} />
      </div>
    </div>
  );
}

export default PlayerWidget