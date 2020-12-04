import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
`;

interface ProfileImageProps {
  src: string;
}

const ProfileImage = ({ src }: ProfileImageProps): JSX.Element => {
  return <Image src={src} />;
};

export default ProfileImage;
