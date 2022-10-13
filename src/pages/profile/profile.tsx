import React from 'react';
import PlayerWidget from './components/PlayerWidget';

const Profile = () => {
  return (
    <div className='bg-white  dark:bg-[#0c0c0c]'>
      <div className='w-full dark:bg-[#101010] py-12 px-12 md:pb-24 md:pt-24 md:px-36'>
       <PlayerWidget />
      </div>
      {/* <div className='py-12 px-12 md:py-16 md:px-24  dark:bg-[#0c0c0c] -top-32 relative max-w-screen-lg mx-auto rounded-t-lg'>
        <h2 className='text-5xl dark:text-white pt-4 font-bold'>
          Featured Players
        </h2>
        <p className='text-lg dark:text-white pt-4 pb-4'>
          Check out the latest featured professionals available for
          collaborating this week
        </p>

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-12'>
          <h2 className='text-5xl dark:text-white pt-12 font-bold'>
            Scout more players
          </h2>
          <p className='text-lg dark:text-white pt-4 pb-12'>
            Check out the latest players available for collaborating this week
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
