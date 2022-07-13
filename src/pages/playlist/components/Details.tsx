import { IColor, IPlaylist } from '../../../types/definition/playlist';
import styled from 'styled-components';
import secondsToString from '../../../common/utils/seconds-to-string';
import DetailsButtons from './DetailsButtons';

interface IProps {
  playlist: IPlaylist;
}

interface IStyleProps {
  accent: IColor;
}

const Details = ({ playlist }: IProps) => {
  return (
    <Wrapper accent={playlist.color}>
      <img src={playlist.thumbnails[0].url} alt={playlist.title} />
      <Info>
        <Text>
          <h2 className="privacy">{playlist.privacy}</h2>
          <h1 className="title">{playlist.title}</h1>
          <p className="description">{playlist.description}</p>
          <Group>
            <p className="user">{playlist.author.name}</p>
            <span className="separator">&#8226;</span>
            <p className="songs">{playlist.trackCount} songs</p>
            <span className="separator">&#8226;</span>
            <p className="length">
              {secondsToString(playlist.duration_seconds)}
            </p>
          </Group>
        </Text>
        <DetailsButtons playlist={playlist} />
      </Info>
    </Wrapper>
  );
};

export const Wrapper = styled.div<IStyleProps>`
  padding: 16px;
  display: flex;
  background: linear-gradient(
    180deg,
    rgb(
        ${({ accent }) => accent.r},
        ${({ accent }) => accent.g},
        ${({ accent }) => accent.b}
      )
      0%,
    rgba(
        ${({ accent }) => accent.r},
        ${({ accent }) => accent.g},
        ${({ accent }) => accent.b},
        0.35
      )
      100%
  );

  img {
    height: 192px;
    width: 192px;
    border-radius: 4px;
    box-shadow: 0px 0px 30px -12px rgba(0, 0, 0, 0.9);
  }
`;

export const Info = styled.div`
  display: flex;
  margin-left: 16px;
  flex-direction: column;
  justify-content: end;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: ${({ theme }) => theme.colors.text.secondary};

  .privacy,
  .title,
  .description {
    text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);
  }

  .privacy,
  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
  }

  .privacy {
    font-size: 14px;
    margin-bottom: 4px;
  }

  .title {
    font-size: 48px;
    margin-bottom: 8px;
  }

  .description {
    color: ${({ theme }) => theme.colors.text.secondary};
    height: 32px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Group = styled.div`
  display: flex;
  overflow: hidden;
  padding-top: 6px;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.2);

  p {
    white-space: nowrap;
    line-height: 19px;
  }

  .user {
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
  }

  .songs,
  .length {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .separator {
    padding: 0 7px;
  }
`;

export default Details;
