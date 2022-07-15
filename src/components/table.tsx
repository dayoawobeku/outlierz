import React, { FC } from 'react'

interface IPlayer {
  firstName: string;
  lastName: string;
  club: string;
  country: string;
  position: string;
  age: number;
  height: number;
  weight: number;
  goals: number;
  matches: number;
  marketValue: number;
  minutesPlayed: number;
  foot: string;
  team: string;
}
const Table:FC<IPlayer> = ({firstName, lastName, country, position, age, height, weight,goals, matches, marketValue, minutesPlayed, foot, team}) => {
    
  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#0f0f0f] dark:text-gray-400 '>
        <tr className='text-center'>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Player
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3 '>
            Goals
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Team
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Position
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Age
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
            Market Value
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
            Matches Played
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
            Minutes Played
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3 w-6'>
            Birth Country
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Foot
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Height
          </th>
          <th scope='col' className='font-bold text-sm px-6 py-3'>
            Weight
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-white dark:bg-[#101010] hover:bg-[#0c0f0f] dark:hover:bg-[#121212] text-center'>
          <th
            scope='row'
            className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
            <img
              className='inline-block w-8 rounded-full ring-2 ring-white'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
              {firstName} {lastName}
            </span>
          </th>
          <td className='px-6 py-4 '>{goals}</td>
          <td className='px-6 py-4'>{team}</td>
          <td className='px-6 py-4 '>{position}</td>
          <td className='px-6 py-4 '>{age}</td>
          <td className='px-6 py-4 '>€ {marketValue}M</td>
          <td className='px-6 py-4 '>{matches}</td>
          <td className='px-6 py-4 '>{minutesPlayed}</td>
          <td className='px-6 py-4 '>🇫🇷</td>
          <td className='px-6 py-4 '>{foot}</td>
          <td className='px-6 py-4 '>{height}</td>
          <td className='px-6 py-4 '>{weight}</td>
        </tr>

       
      </tbody>
    </table>
  );
}

export default Table