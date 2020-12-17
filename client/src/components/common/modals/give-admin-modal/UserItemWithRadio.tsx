import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../profile-image/ProfileImage';
import { DEEP_GRAY, LIGHT_GREEN } from '../../../../constants/color';
import { observer } from 'mobx-react';

const UserItemWrapper = styled.div<{ type: string | undefined }>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 0.8rem;
  border-bottom: 1px solid ${DEEP_GRAY};
  color: ${({ type }) => (type === 'admin' ? LIGHT_GREEN : 'black')};
`;

const Cell = styled.div`
  width: 15%;
  justify-content: center;
  &:nth-child(1) {
    width: 6%;
    margin-right: 1rem;
  }
  &:nth-child(2) {
    width: 45%;
    padding-top: 0.6rem;
  }
  &:nth-child(3) {
    width: 27%;
    text-align: center;
    padding-top: 0.6rem;
  }
  &:nth-child(4) {
    width: 10%;
    padding-top: 0.6rem;
  }
  &:nth-child(5) {
    width: 6%;
    padding-top: 0.6rem;
  }
  &:nth-child(6) {
    width: 6%;
    padding-top: 0.6rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 auto;
  svg {
    cursor: pointer;
  }
`;

interface Props {
  provider: string;
  email: string;
  profileUrl: string;
  type?: string;
  onChange: () => void;
}

const UserItemWithRadio = ({ email, profileUrl, type, provider, onChange }: Props): JSX.Element => {
  return (
    <UserItemWrapper type={type}>
      <Cell>
        <ProfileImage src={profileUrl} />
      </Cell>
      <Cell>{email}</Cell>
      <Cell>{provider}</Cell>
      <Cell />
      <Cell>
        <ButtonWrapper></ButtonWrapper>
      </Cell>
      <Cell>
        <ButtonWrapper>
          <input type="radio" name="user" onChange={onChange} />
        </ButtonWrapper>
      </Cell>
    </UserItemWrapper>
  );
};

export default observer(UserItemWithRadio);
