import Carousel from '../components/carousel';
import Table from '../components/table';
import { IData } from '../types';

function Search() {
  const playersData = [
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Portugal 🇹🇩',
      position: 'Forward',
      club: 'Juventus',
      height: 178,
      weight: 76,
      age: 34,
      assists: 80,
      matches: 380,
      goals: 600,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
    {
      firstName: 'Kylan',
      lastName: 'Mbappe',
      country: 'France 🇫🇷',
      position: 'Forward',
      club: 'PSG',
      height: 176,
      weight: 76,
      age: 30,
      assists: 64,
      matches: 200,
      goals: 400,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
    {
      firstName: 'Davide',
      lastName: 'De Gea',
      country: 'France 🇹🇩',
      position: 'Forward',
      club: 'Manchester',
      height: 178,
      weight: 78,
      age: 34,
      assists: 80,
      matches: 380,
      goals: 600,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
    {
      firstName: 'Kylan',
      lastName: 'Mbappe',
      country: 'France 🇫🇷',
      position: 'Forward',
      club: 'PSG',
      height: 176,
      weight: 76,
      age: 30,
      assists: 64,
      matches: 200,
      goals: 400,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
    {
      firstName: 'Cristiano',
      lastName: 'Ronaldo',
      country: 'Portugal 🇹🇩',
      position: 'Forward',
      club: 'Juventus',
      height: 178,
      weight: 78,
      age: 34,
      assists: 80,
      matches: 380,
      goals: 600,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
    {
      firstName: 'Kylan',
      lastName: 'Mbappe',
      country: 'France 🇫🇷',
      position: 'Forward',
      club: 'PSG',
      height: 176,
      weight: 76,
      age: 30,
      assists: 64,
      matches: 200,
      goals: 400,
      minutesPlayed: 2343,
      marketValue: 23,
      foot: 'right'
    },
  ];
  return (
    <div className='bg-white  dark:bg-[#0c0c0c]'>
      <div className='w-full dark:bg-[#101010] py-12 px-12 md:pb-24 md:pt-48 md:px-24'>
        <div className=' h-80 max-w-screen-md mx-auto'>
          <div className='flex flex-row w-full justify-center items-center'>
            <input
              type='text'
              id='large-input'
              placeholder='Search players'
              className='flex w-3/4 p-4  h-20 text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 sm:text-md  dark:bg-gray-800 dark:border-slate-600 dark:placeholder-gray-400 dark:text-white '
            />
            <button
              type='button'
              className='text-white text-base justify-center w-1/4 h-20 bg-[#050708] hover:bg-[#050708]/90  font-medium rounded-r-lg px-5 py-2.5 text-center flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 '>
              Search
            </button>
          </div>
        </div>
      </div>
      <div className='py-12 px-12 md:py-16 md:px-24  dark:bg-[#0c0c0c] -top-32 relative max-w-screen-lg mx-auto rounded-t-lg'>
        <h2 className='text-5xl dark:text-white pt-4 font-bold'>
          Featured Players
        </h2>
        <p className='text-lg dark:text-white pt-4 pb-4'>
          Check out the latest featured professionals available for
          collaborating this week
        </p>
        <Carousel />
        <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-12'>
          <h2 className='text-5xl dark:text-white pt-12 font-bold'>
            Scout more players
          </h2>
          <p className='text-lg dark:text-white pt-4 pb-12'>
            Check out the latest players available for collaborating this week
          </p>

          <Table data={playersData} />
        </div>
      </div>
    </div>
  );
}

export default Search;
