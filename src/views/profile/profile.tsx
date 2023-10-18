import React from 'react';
import Table from '../../components/Table';
import { IData } from '../../types';
import PlayerWidget from './components/PlayerWidget';

const Profile = () => {
  const playersData: any = [
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
    {
      attributes: {
        fullname: 'Cristiano Ronaldo',
        birth_country: 'Portugal 🇹🇩',
        primary_position: 'Forward',
        current_team: 'Juventus',
        height: 178,
        weight: 76,
        age: 34,
        matches_played: 400,
        assists_made: 80,
        goals: 600,
        minutes_played: 2343,
        market_value: 23,
        foot: 'right',
      },
    },
  ];

  return (
    <div className='bg-white  dark:bg-[#0c0c0c]'>
      <div className='w-full dark:bg-[#101010] py-12 px-12 md:pb-24 md:pt-24 md:px-36'>
        <PlayerWidget />
        <div className='flex flex-col pt-32'>
          <h4 className='text-4xl dark:text-white pt-4 font-bold pb-4'>
            Possession Statistics
          </h4>
          <hr className='my-4' />
          <Table data={playersData} />
        </div>

        <div className='flex flex-col pt-32'>
          <h4 className='text-4xl dark:text-white pt-4 font-bold pb-4'>
            Possession Statistics
          </h4>
          <hr className='my-4' />
          <Table data={playersData} />
        </div>

        <div className='flex flex-col pt-32'>
          <h4 className='text-4xl dark:text-white pt-4 font-bold pb-4'>
            Possession Statistics
          </h4>
          <hr className='my-4' />
          <Table data={playersData} />
        </div>
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
