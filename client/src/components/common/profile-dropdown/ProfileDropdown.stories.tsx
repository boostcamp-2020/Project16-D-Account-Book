import React from 'react';
import ProfileDropdown from './ProfileDropdown';

export default {
  title: 'profile-dropdown/ProfileDropdown',
  component: ProfileDropdown,
};

const sampleProfileImage =
  'https://media.istockphoto.com/vectors/profile-icon-man-icon-with-circle-shape-on-gray-background-vector-id1033334196?k=6&m=1033334196&s=170667a&w=0&h=wijawNlDG-1XWl-uXkYPKfJCv4mlNHb_QkqgtMwNSHY=';

export const Default = (): JSX.Element => {
  return <ProfileDropdown src={sampleProfileImage} />;
};
