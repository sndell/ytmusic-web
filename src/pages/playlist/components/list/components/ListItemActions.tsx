import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ITrack } from '../../../../../types/definition/playlist';
import {
  MdThumbUp,
  MdThumbDown,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
} from 'react-icons/md';

interface IProps {
  track: ITrack;
}

interface IStyledProps {
  enabled: boolean;
}

const ListItemActions = ({ track }: IProps) => {
  useEffect(() => {
    console.log(track);
  }, []);

  return (
    <Wrapper enabled={track.likeStatus ? true : false}>
      {track.likeStatus === 'DISLIKE' ? (
        <MdThumbDown />
      ) : (
        <MdOutlineThumbDown />
      )}
      {track.likeStatus === 'LIKE' ? <MdThumbUp /> : <MdOutlineThumbUp />}
    </Wrapper>
  );
};

const Wrapper = styled.div<IStyledProps>`
  margin-right: 8px;
  gap: 8px;
  ${({ enabled }) =>
    !enabled
      ? css`
          display: none !important;
        `
      : css`
          display: none;
        `};

  svg {
    font-size: 22px;
    cursor: pointer;
  }
`;

export default ListItemActions;
