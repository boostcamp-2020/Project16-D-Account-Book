import React, { useState } from 'react';
import styled from 'styled-components';
import HomeButton from '../home-button/HomeButton';
import HamburgerButton from '../hamburger-button/HamburgerButton';
import PlusButton from '../plus-button/PlusButton';
import SmallAccountbookItem from '../small-accountbook-item/SmallAccountbookItem';
import { GRAY } from '../../../constants/color';

interface SidebarProps {
  smallAccountbooks: { id: number; color: string }[];
}

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
  z-index: -1;
  transition: all ease 0.3s 0s;
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
    <SmallAccountbookItem key={item.id} id={item.id} bgColor={item.color} show={isOpen} />
  ));
  return (
    <div>
      <HamburgerButton onClick={toggleButton} />
      <SidebarWrapper show={isOpen}>
        <ChildrenWrapper>
          <HomeButton show={isOpen} />
          {SmallAccountbooks}
          <PlusButton show={isOpen} />
        </ChildrenWrapper>
      </SidebarWrapper>
    </div>
  );
};

export default Sidebar;
