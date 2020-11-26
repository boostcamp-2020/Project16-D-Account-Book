import React, { useState } from 'react';
import styled from 'styled-components';
import HomeButton from '../home-button/HomeButton';
import HamburgerButton from '../hamburger-button/HamburgerButton';
import PlusButton from '../plus-button/PlusButton';
import SmallAccountbookItem from '../small-accountbook-item/SmallAccountbookItem';

interface SidebarProps {
  smallAccountbooks: { id: number; color: string }[];
}

interface SidebarWrapperProps {
  show: boolean;
}

const SidebarWrapper = styled.div<SidebarWrapperProps>`
  background-color: rgba(0, 0, 0, 0.1);
  width: 5%;
  height: 100%;
  position: fixed;
  top: 0%;
  left: 0%;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: -1;
  transition: 0.5s;
  padding-top: 40px;
`;

const ChildrenWrapper = styled.div`
  margin-top: 55px;
`;

const Sidebar = ({ smallAccountbooks }: SidebarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleButton = (): void => {
    setIsOpen(!isOpen);
  };

  const SmallAccountbooks = smallAccountbooks.map((item) => (
    <SmallAccountbookItem key={item.id} id={item.id} bgColor={item.color} />
  ));
  return (
    <div>
      <HamburgerButton onClick={toggleButton}></HamburgerButton>
      <SidebarWrapper show={isOpen}>
        <ChildrenWrapper>
          <HomeButton></HomeButton>
          {SmallAccountbooks}
          <PlusButton></PlusButton>
        </ChildrenWrapper>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
