import React from 'react';
import styled from 'styled-components';
import GrayButton from './GrayButton';
import RedButton from './RedButton';

export default {
  title: 'ModalButtons',
};

export const GrayButtonDefault: React.FC = () => {
  return <GrayButton>취소</GrayButton>;
};

export const RedButtonDefault: React.FC = () => {
  return <RedButton>삭제</RedButton>;
};
