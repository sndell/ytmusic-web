import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';
import { IoShuffle } from 'react-icons/io5';
import { GoKebabVertical } from 'react-icons/go';
import { IPlaylist } from '../../../types/definition/playlist';

interface IProps {
  playlist: IPlaylist;
}

const DetailsButtons = ({ playlist }: IProps) => {
  return (
    <Wrapper>
      <PlayButton>
        <FaPlay />
      </PlayButton>
      <ShuffleButton>
        <IoShuffle />
        <h1>SHUFFLE</h1>
      </ShuffleButton>
      <MoreButton>
        <GoKebabVertical className="kebab-button" />
      </MoreButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 8px;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const PlayButton = styled.div`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.text.primary};
  height: 32px;
  width: 32px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ShuffleButton = styled.div`
  cursor: pointer;
  height: 32px;
  box-sizing: border-box;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text.primary};
  border-radius: 4px;

  svg {
    margin: 0 8px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 14px;
    font-weight: 600;
    margin-right: 16px;
  }
`;

export const MoreButton = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
`;

export default DetailsButtons;
