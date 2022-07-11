import React from 'react';

import { IoSearchSharp, IoHome } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';

import styled from 'styled-components';
// import Header from './Header';
import Row from './Row';

const Sidebar = () => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Rows>
        <Row Icon={IoHome} text="Home" path="/home" />
        <Row Icon={BiLibrary} text="Library" path="/library" />
        <Row Icon={IoSearchSharp} text="Search" path="/search" />
        <Row Icon={MdSettings} text="Settings" path="/settings" />
      </Rows>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100%;
  width: 240px;
  padding-top: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Rows = styled.div``;
