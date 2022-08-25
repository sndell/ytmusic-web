import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { ITrack } from '../../../../../types/definition/playlist';
import {
  MdThumbUp,
  MdThumbDown,
  MdOutlineThumbUp,
  MdOutlineThumbDown,
  MdMoreVert,
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
      <MdMoreVert />
    </Wrapper>
  );
};

const Wrapper = styled.div<IStyledProps>`
  display: flex;
  position: absolute;
  align-items: center;
  margin-right: 32px;
  ${({ enabled }) =>
    !enabled
      ? css`
          display: none !important;
        `
      : css`
          display: none;
        `};

  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    font-size: 24px;

    :nth-child(1) {
      margin-right: 16px;
    }
    :nth-child(2) {
      margin-right: 8px;
    }
  }
`;

export default ListItemActions;
