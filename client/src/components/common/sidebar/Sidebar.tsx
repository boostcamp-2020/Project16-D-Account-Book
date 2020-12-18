import React, { useState, memo, useEffect } from 'react';
import styled from 'styled-components';
import HomeButton from '../home-button/HomeButton';
import HamburgerButton from '../hamburger-button/HamburgerButton';
import SmallAccountbookItem from '../small-accountbook-item/SmallAccountbookItem';
import { GRAY } from '../../../constants/color';
import { useHistory } from 'react-router-dom';
import useStore from '../../../hook/use-store/useStore';
import { Link } from 'react-router-dom';

interface SidebarWrapperProps {
  show: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  background-color: ${GRAY};
  width: ${({ show }) => (show ? '5%' : '0')};
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  display: 'block';
  z-index: 0;
  transition: all ease 0.3s 0s;
  padding-top: 40px;
  font-family: 'Spoqa Han Sans';
`;

const ChildrenWrapper = styled.div`
  margin-top: 55px;
`;

const HamburgerButtonWrapper = styled.div`
  position: fixed;
  left: 0%;
  width: 5%;
  top: 2%;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:visited {
    text-decoration: none;
  }
`;

const Sidebar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleButton = (): void => {
    setIsOpen(!isOpen);
  };
  const history = useHistory();

  const { rootStore } = useStore();
  const { accountbookStore } = rootStore;

  useEffect(() => {
    accountbookStore.updateAccountbooks();
  }, []);

  const SmallAccountbooks = accountbookStore.accountbooks.map((item) => (
    <StyledLink to={`/accountbooks/${item.accountbookId}`} key={item.id}>
      <SmallAccountbookItem
        key={item.id}
        title={item.title}
        bgColor={item.color}
        description={item.description}
        show={isOpen}
      />
    </StyledLink>
  ));
  return (
    <div>
      <HamburgerButtonWrapper>
        <HamburgerButton onClick={toggleButton} />
      </HamburgerButtonWrapper>
      <SidebarWrapper show={isOpen}>
        <ChildrenWrapper>
          <HomeButton show={isOpen} onClick={() => history.push(`/`)} />
          {SmallAccountbooks}
        </ChildrenWrapper>
      </SidebarWrapper>
    </div>
  );
};

export default memo(Sidebar);
