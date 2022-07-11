import React from 'react';

import { IoSearchSharp, IoHome } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';
import { BsPlusSquareFill } from 'react-icons/bs';
import { SquareThumbUp } from '../../../assets/icons/SquareThumbUp';

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
        <Row Icon={MdSettings} text="Settings" path="/settings/api" />
        <hr />
        <Row Icon={BsPlusSquareFill} text="Create Playlist" path="/" />
        <Row Icon={SquareThumbUp} text="Liked Songs" path="/likes" />
        <hr />
      </Rows>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100%;
  min-width: 240px;
  width: 240px;
  padding-top: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Rows = styled.div`
  hr {
    opacity: 10%;
    height: 1px;
    border: none;
    background-color: #fff;

    :first-of-type {
      margin: 8px 16px;
    }

    :last-of-type {
      margin: 8px 16px 0 16px;
    }
  }
`;
