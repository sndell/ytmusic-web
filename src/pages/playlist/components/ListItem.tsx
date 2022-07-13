import React from 'react';
import { MdExplicit, MdError } from 'react-icons/md';
import styled, { css } from 'styled-components';
import { ITrack } from '../../../types/definition/playlist';
import getArtistsString from '../../../common/utils/artists-to-string';

interface IProps {
  track: ITrack;
}

interface IStyleProps {
  hide: boolean;
}

const ListItem = ({ track }: IProps) => {
  return (
    <Wrapper hide={!track.isAvailable ? true : false}>
      <Track>
        <Image>
          {track.isAvailable ? (
            <>
              <img src={track.thumbnails[0].url} alt={track.title} />
              <img src={track.thumbnails[0].url} alt={track.title} />
            </>
          ) : (
            <MdError />
          )}
        </Image>
        <Info>
          <h1>{track.title}</h1>
          <Artists>
            {track.isExplicit && <MdExplicit />}
            <h1>{getArtistsString(track.artists)}</h1>
          </Artists>
        </Info>
      </Track>
      <Album>
        <h1>{track.album ? track.album.name : track.title}</h1>
      </Album>
      <Date>
        <h1>
          {track.dateAdded
            ? track.dateAdded.slice(0, track.dateAdded.indexOf('T'))
            : 'unavailable'}
        </h1>
      </Date>
      <Duration>{track.duration && <h2>{track.duration}</h2>}</Duration>
    </Wrapper>
  );
};

export const Wrapper = styled.div<IStyleProps>`
  display: grid;
  grid-template-columns: 6fr 4fr 2fr 2fr;
  column-gap: 16px;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 16px;
  border-radius: 4px;

  &:hover {
    background-color: #ffffff18;
    cursor: pointer;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 6fr 4fr 2fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 6fr 32px;

    &:hover {
      grid-template-columns: 6fr 3fr;
    }
  }

  ${({ hide }) =>
    hide &&
    css`
      h1,
      svg {
        color: ${({ theme }) => theme.colors.text.tertiary} !important;
      }

      svg {
        font-size: 24px;
      }
    `}
`;

export const Track = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const Image = styled.div`
  --img-size: 40px;
  height: var(--img-size);
  min-width: var(--img-size);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img:first-child {
    height: var(--img-size);
    width: var(--img-size);
    position: absolute;
    filter: blur(1px) brightness(50%) opacity(100%);
  }

  img:last-child {
    width: var(--img-size);
    z-index: 1;
  }
  /* 
  @media screen and (max-width: 992px) {
    --img-size: 40px;
  } */
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 8px;
  min-width: 0;

  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const Artists = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  h1 {
    height: 18px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Album = styled.div`
  min-width: 0;
  h1,
  h2 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Date = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Duration = styled.div`
  justify-self: end;
`;

export default ListItem;
