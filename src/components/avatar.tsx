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
