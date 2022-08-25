import React from 'react';
import Item from './ListItem';
import styled from 'styled-components';
import { IColor, IPlaylist } from '../../../../../types/definition/playlist';

interface IProps {
  playlist: IPlaylist;
}

interface IStyleProps {
  accent: IColor;
}

const List = ({ playlist }: IProps) => {
  return (
    <Wrapper>
      <Gradient accent={playlist.color} />
      <Headers>
        <h2>song</h2>
        <h2>album</h2>
        <h2>date added</h2>
        <h2>time</h2>
      </Headers>
      <Items>
        {playlist.tracks.map((track, index) => (
          <Item track={track} key={index} />
        ))}
      </Items>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 8px;
`;

const Gradient = styled.div<IStyleProps>`
  z-index: -1;
  position: absolute;
  height: 320px;
  filter: saturate(125%);
  width: 100%;
  background: linear-gradient(
    180deg,
    rgb(
        ${({ accent }) => accent.r},
        ${({ accent }) => accent.g},
        ${({ accent }) => accent.b},
        0.25
      )
      0%,
    rgba(
        ${({ accent }) => accent.r},
        ${({ accent }) => accent.g},
        ${({ accent }) => accent.b},
        0
      )
      100%
  );
`;

const Headers = styled.div`
  margin-left: 16px;
  border-bottom: 1px solid #ffffff1a;
  margin-right: 16px;
  margin-top: 16px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 6fr 4fr 2fr 2fr;
  column-gap: 16px;

  h2 {
    color: ${({ theme }) => theme.colors.text.secondary};
    text-transform: uppercase;
    font-size: 14px;
    /* font-weight: 500; */
  }

  h2:last-child {
    justify-self: end;
  }

  @media screen and (max-width: 1040px) {
    grid-template-columns: 6fr 4fr 2fr;

    h2:nth-child(3) {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 6fr 32px;

    h2:nth-child(2) {
      display: none;
    }
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 14px;
  gap: 8px;
`;

export default List;
