import { FC } from 'react';
import { IData } from '../types';

interface IPlayer {
  data: Array<IData>;
}
const Table: FC<IPlayer> = ({ data }) => {
  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#111111] dark:text-gray-400 '>
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
          <th scope='col' className='font-bold text-sm px-8 py-3 w-12'>
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
        {data &&
          data.map((item, key) => {
            return (
              <tr
                key={key}
                className='bg-white dark:bg-[#101010] hover:bg-[#1c1d1d] dark:hover:bg-[#1f1f1f] '>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                  <img
                    className='inline-block w-8 rounded-full ring-2 ring-white'
                    src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                  />
                  <span className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'>
                    {item.attributes.fullname}
                  </span>
                </th>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.goals}
                </td>
                <td className='px-6 py-4text-center'>
                  {item.attributes.current_team}
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.primary_position}
                </td>
                <td className='px-6 py-4 text-center'>{item.attributes.age}</td>
                <td className='px-6 py-4 text-center'>
                  € {item.attributes.market_value}M
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.matches_played}
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.minutes_played}
                </td>
                <td className='px-6 py-4 text-center'>
                  {' '}
                  {item.attributes.birth_country}🇫🇷
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.primary_position}
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.height}
                </td>
                <td className='px-6 py-4 text-center'>
                  {item.attributes.weight}
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
