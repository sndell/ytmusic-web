import React from 'react';
import styled from 'styled-components';
import { usePlaylist } from '../hooks/usePlaylist';
import Details from './Details';
import List from './List';

const Playlist = () => {
  const playlist = usePlaylist();

  if (playlist) {
    return (
      <Wrapper>
        <Details playlist={playlist} />
        <List playlist={playlist} />
      </Wrapper>
    );
  }
  return <></>;
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: overlay;
`;

export default Playlist;
