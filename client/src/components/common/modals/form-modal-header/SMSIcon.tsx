import React, { useState } from 'react';
import styled from 'styled-components';
import { GRAY } from '../../../../constants/color';
import { SMS_DESCRIPTION } from '../../../../constants/formModal';

const SMSWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 1em;
  cursor: pointer;
`;

const QuestionWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  right: 3px;
  bottom: 5px;
  &:hover {
    border: 1px solid ${GRAY};
  }
`;

const Description = styled.div`
  background-color: white;
  border: 1px solid black;
  max-width: 260px;
  font-size: 14px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 5px;
`;

const SMSIcon = (): JSX.Element => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      {showDescription && <Description>{SMS_DESCRIPTION}</Description>}
      <QuestionWrapper onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
        <svg viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
        </svg>
      </QuestionWrapper>
      <SMSWrapper>
        <svg viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />
        </svg>
      </SMSWrapper>
    </>
  );
};

export default SMSIcon;
