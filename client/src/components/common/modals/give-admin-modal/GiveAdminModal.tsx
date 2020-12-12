import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ModalBackground from '../modal-background/ModalBackground';
import color from '../../../../constants/color';
import useStore from '../../../../hook/use-store/useStore';
import { observer } from 'mobx-react';
import GrayButton from '../../buttons/GrayButton';
import RedButton from '../../buttons/RedButton';
import UserItemWithRadio from './UserItemWithRadio';
import { MODAL_WHITE } from '../../../../constants/color';
import socialService from '../../../../services/social';
import { UserAccountbook } from '../../../../types/social';

const FormModalWrapper = styled.div`
  background-color: ${MODAL_WHITE};
  width: 40%;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 360px;
  transform: translate(-50%, -50%);
`;

const Description = styled.div`
  color: ${color.ORANGE};
  font-size: 16px;
  font-weight: 550;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
  .btn {
    width: 35%;
  }
`;

const UserItemWrapper = styled.div`
  max-height: 200px;
  min-height: 200px;
  overflow-y: scroll;
`;

const NoMember = styled.div`
  margin: 0 auto;
  color: gray;
  margin-top: 10px;
`;

const FormModalFilter = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const { giveAdminStore } = useStore().rootStore.modalStore;
  const [userAccountbooks, setUserAccountbook] = useState<UserAccountbook[]>([]);
  const [checkedUserAccountbookId, setCheckedUserAccountbookId] = useState(0);

  const setUserAccountbooks = async () => {
    const userAccountbooks = await socialService.findUsers(giveAdminStore.selectedAccountbookId);
    setUserAccountbook(userAccountbooks.filter((userAccountbook) => userAccountbook.authority === false));
    setIsLoading(false);
  };

  useEffect(() => {
    setUserAccountbooks();
  }, []);

  const closeModal = () => {
    giveAdminStore.setShow(false);
  };

  const onClickDelete = async () => {
    if (userAccountbooks.length == 0) {
      giveAdminStore.deleteAccountbook();
      closeModal();
      return;
    }

    if (checkedUserAccountbookId === 0) {
      alert('관리자를 지정한 이후에 삭제할 수 있습니다.');
      return;
    }

    await socialService.giveAdmin(checkedUserAccountbookId, 1);
    giveAdminStore.deleteAccountbook();
    closeModal();
  };

  return (
    <>
      <ModalBackground show={true} closeModal={closeModal}>
        <FormModalWrapper>
          <h3>가계부 구성원 목록</h3>
          <Description>관리자로 지정할 구성원을 체크해주세요.</Description>
          <UserItemWrapper>
            {userAccountbooks.length === 0 && !isLoading ? (
              <NoMember>지정할 구성원이 없습니다. 삭제 버튼을 눌러 바로 삭제하실 수 있습니다.</NoMember>
            ) : null}
            {userAccountbooks.map((userAccountbook) => (
              <UserItemWithRadio
                key={`item${userAccountbook.id}`}
                onChange={() => setCheckedUserAccountbookId(userAccountbook.id)}
                provider={userAccountbook.user.provider}
                userAccountbookId={userAccountbook.id}
                userId={userAccountbook.user.id}
                email={userAccountbook.user.email}
                profileUrl={userAccountbook.user.profileUrl}
              />
            ))}
          </UserItemWrapper>
          <ButtonWrapper>
            <div className="btn">
              <GrayButton onClick={closeModal}>취소</GrayButton>
            </div>
            <div className="btn">
              <RedButton onClick={onClickDelete}>삭제</RedButton>
            </div>
          </ButtonWrapper>
        </FormModalWrapper>
      </ModalBackground>
    </>
  );
};

export default observer(FormModalFilter);
