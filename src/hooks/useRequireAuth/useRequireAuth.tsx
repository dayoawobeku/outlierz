// import { useEffect } from 'react';
// import { useAuth } from './use-auth-from-context-or-state-management.js';
// import { useHistory } from 'react-router-dom';

// export const useRequireAuth = (redirectUrl = '/signup') => {
//   const auth = true;
//   const history = useHistory();

  // If auth.user is false that means we're not
  // logged in and should redirect.
//   useEffect(() => {
//     if (auth) {
//       history.push(redirectUrl);
//     }
//   }, [auth, history]);
//   return auth;
// };
import React, { FC, ReactNode } from 'react';

type props = {
  image?: string;
  size?: number;
  style?: string;
  onPress?: () => void;
  alt: string;
};

const Avatar: FC<props> = ({ image, size = 32, style, alt, onPress }) => {
  const renderImage = () => {
    return <img src={image} alt={alt} className={style} />;
  };

  return renderImage();
};

export default Avatar;
