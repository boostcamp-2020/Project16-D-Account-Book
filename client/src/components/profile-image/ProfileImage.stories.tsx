import React from 'react';
import ProfileImage from './ProfileImage';

export default {
  title: 'profile-image/ProfileImage',
  component: ProfileImage,
};

export const Default = (): JSX.Element => {
  const src =
    'https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=6&m=1033334196&s=170667a&w=0&h=wijawNlDG-1XWl-uXkYPKfJCv4mlNHb_QkqgtMwNSHY=';
  return <ProfileImage src={src} />;
};
