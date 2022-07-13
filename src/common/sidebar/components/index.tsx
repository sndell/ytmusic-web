import React, { useState, useEffect } from 'react';

import { IoSearchSharp, IoHome } from 'react-icons/io5';
import { BiLibrary } from 'react-icons/bi';
import { MdSettings } from 'react-icons/md';
import { BsPlusSquareFill } from 'react-icons/bs';
import { SquareThumbUp } from '../../../assets/icons/SquareThumbUp';
import styled from 'styled-components';
import Row from './Row';
import { usePlaylists } from '../hooks/usePlaylists';
import PlaylistRow from './PlaylistRow';

type Playlist = {
  title: string;
  playlistId: string;
};

const Sidebar = () => {
  const playlists: Playlist[] = usePlaylists();

  return (
    <Wrapper>
      {/* <Header /> */}
      <Rows>
        <Row Icon={IoHome} text="Home" path="/" />
        <Row Icon={BiLibrary} text="Library" path="/library" />
        <Row Icon={IoSearchSharp} text="Search" path="/search" />
        <Row Icon={MdSettings} text="Settings" path="/settings/api" />
        <hr />
        <Row Icon={BsPlusSquareFill} text="Create Playlist" path="/" />
        <Row Icon={SquareThumbUp} text="Liked Songs" path="/likes" />
        <hr />
      </Rows>
      <Playlists>
        {playlists.map(({ playlistId, title }, index) => (
          <PlaylistRow title={title} id={playlistId} key={index} />
        ))}
      </Playlists>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  min-width: 240px;
  width: 240px;
  padding-top: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
`;

const Rows = styled.div`
  hr {
    border: none;
    background-color: #fff;

    :first-of-type {
      margin: 4px 0;
      height: 0;
      opacity: 0;
    }

    :last-of-type {
      margin: 8px 16px 0 16px;
      opacity: 10%;
      height: 1px;
    }
  }
`;

const Playlists = styled.div`
  overflow-y: overlay;
  padding: 8px 0 4px 0;
`;
