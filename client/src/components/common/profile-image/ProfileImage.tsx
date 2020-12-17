import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
`;

interface ProfileImageProps {
  src: string;
}

const ProfileImage = ({ src }: ProfileImageProps): JSX.Element => {
  return <Image src={src} />;
};

export default ProfileImage;
