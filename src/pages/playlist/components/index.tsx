import React from 'react';
import styled from 'styled-components';
import { usePlaylist } from '../hooks/usePlaylist';
import Details from './Details';

const Playlist = () => {
  const playlist = usePlaylist();

  if (playlist) {
    return (
      <Wrapper>
        <Details playlist={playlist} />
      </Wrapper>
    );
  }
  return <></>;
};

const Wrapper = styled.div`
  color: red;
`;

export default Playlist;
