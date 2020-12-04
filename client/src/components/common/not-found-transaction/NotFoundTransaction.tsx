import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 45%;
  left: calc(50% - 150px);
  width: 300px;
  height: 100%;
  margin: auto;
  text-align: center;
`;

const NotFoundTransaction: React.FC = () => {
  return (
    <Wrapper>
      <svg width="48" height="48" viewBox="0 0 24 24" fill="gray">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
      <h3>거래 내역이 없습니다.</h3>
    </Wrapper>
  );
};

export default NotFoundTransaction;
