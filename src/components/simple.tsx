import Carousel from 'react-multi-carousel';
import ProfileCard from './profile-card';
import React from 'react';

type IDevice = {
    deviceType: string;
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    paritialVisibilityGutter: 50,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const playersData = [
  {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    country: 'Portugal 🇹🇩',
    position: 'Forward',
    club: 'Juventus',
    height: 178,
    age: 34,
    assists: 80,
    matches: 380,
    goals: 600,
    profileImage: '',
    clubImage: '',
  },
  {
    firstName: 'Kylan',
    lastName: 'Mbappe',
    country: 'France 🇫🇷',
    position: 'Forward',
    club: 'PSG',
    height: 176,
    age: 30,
    assists: 64,
    matches: 200,
    goals: 400,
    profileImage: '',
    clubImage: '',
  },
  {
    firstName: 'Davide',
    lastName: 'De Gea',
    country: 'France 🇹🇩',
    position: 'Forward',
    club: 'Manchester',
    height: 178,
    age: 34,
    assists: 80,
    matches: 380,
    goals: 600,
    profileImage: '',
    clubImage: '',
  },
  {
    firstName: 'Kylan',
    lastName: 'Mbappe',
    country: 'France 🇫🇷',
    position: 'Forward',
    club: 'PSG',
    height: 176,
    age: 30,
    assists: 64,
    matches: 200,
    goals: 400,
    profileImage: '',
    clubImage: '',
  },
  {
    firstName: 'Cristiano',
    lastName: 'Ronaldo',
    country: 'Portugal 🇹🇩',
    position: 'Forward',
    club: 'Juventus',
    height: 178,
    age: 34,
    assists: 80,
    matches: 380,
    goals: 600,
    profileImage: '',
    clubImage: '',
  },
  {
    firstName: 'Kylan',
    lastName: 'Mbappe',
    country: 'France 🇫🇷',
    position: 'Forward',
    club: 'PSG',
    height: 176,
    age: 30,
    assists: 64,
    matches: 200,
    goals: 400,
    profileImage: '',
    clubImage: '',
  },
];

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple: React.FC<IDevice> = ({ deviceType }) => {
  return (
    <Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass='image-item'
      
      responsive={responsive} autoPlay={false}>
      {playersData.map((player, key) => {
        return (
         <ProfileCard key={key} {...player} />
        );
      })}
    </Carousel>
  );
};

export default Simple;
