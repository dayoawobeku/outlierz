import { FC } from "react";
import { ronaldo } from "../images/images";

interface IProfile {
  firstName: string;
  lastName: string;
  club: string;
  country: string;
  position: string;
  age: number;
  height: number;
  goals: number;
  matches: number;
  assists: number;
  profileImage: string;
  clubImage: string;
}

const randomizeColor = () =>{
  let colors = ['#2c7cc3', '#612cc3', '#216bc6', '#199e41', '#f79d30'];
  return colors[Math.floor(Math.random() * 10)]
}

const ProfileCard:FC<IProfile> = ({firstName, lastName, club, country, position, age, height, goals, assists, matches, profileImage, clubImage}) => {
  return (
    <div className='max-w-sm mx-auto transition-shadow shadow-lg hover:shadow-xl '>
      <div className='card  max-w-sm mx-auto    rounded-md'>
        <div className={`w-full card__media items-center justify-center dark:bg-[${randomizeColor()}] rounded-t-2xl h-80`}>
          <h1 className='text-[rgba(255,255,255,0.1)] font-extrabold text-6xl uppercase top-24 text-center relative'>
            {lastName}
          </h1>
          <img src={ronaldo} className=' -top-16 relative ' />
        </div>

        <div className='flex flex-col  px-6 py-4 rounded-t-3xl bg-black -top-5  relative'>
          <div className='badge w-8 h-8 bg-red-600 rounded-2xl absolute right-10 -top-4 items-center justify-center flex text-white'>
            ✓
          </div>
          <div className='relative flex flex-row justify-start '>
            <img
              className=' w-12 h-12 md rounded-full relative border border-2 border-gray-100'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            <div className='flex flex-col'>
              <h1 className='text-md font-semibold text-white pl-2'>
                {firstName} {lastName}
              </h1>
              <p className='text-sm text-gray-200 pl-2'>{country} </p>
            </div>
          </div>

          <div className='relative flex flex-row justify-between pt-4'>
            <div className='flex flex-col'>
              <h3 className='text-sm text-gray-200'>Position</h3>
              <p className='text-sm text-gray-600'>{position}</p>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-sm text-gray-200'>Age</h3>
              <p className='text-sm text-gray-600'>{age}</p>
            </div>

            <div className='flex flex-col'>
              <h3 className='text-sm text-gray-200'>Height</h3>
              <p className='text-sm text-gray-600'>{height}CM</p>
            </div>
          </div>

          <div className=' my-6 border-b border-gray-600 opacity-20'></div>

          <div className='relative flex flex-row justify-between '>
            <div className='flex flex-col border border-gray-800 px-2 py-3 rounded-xl'>
              <h3 className='text-sm text-gray-200 pb-4 w-14'>
                Matches Played
              </h3>
              <p className='text-sm text-gray-600'>{matches}</p>
            </div>

            <div className='flex flex-col border border-gray-800 px-2 py-3 rounded-xl'>
              <h3 className='text-sm text-gray-200 pb-4 w-14'>Goals Scored</h3>
              <p className='text-sm text-gray-600'>{goals}</p>
            </div>

            <div className='flex flex-col border border-gray-800 px-2 py-3 rounded-xl'>
              <h3 className='text-sm text-gray-200 pb-4 w-14'>Assists Made</h3>
              <p className='text-sm text-gray-600'>{assists}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard