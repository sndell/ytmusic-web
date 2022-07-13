import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
};

const PlaylistRow: React.FC<Props> = ({ id, title }) => {
  return (
    <Wrapper to={`playlist/${id}`}>
      <h1>{title}</h1>
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  text-decoration: none;
  padding: 0;
  cursor: pointer;

  h1 {
    padding: 0 16px;
    transition: color 0.2s;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.text.secondary};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  :hover {
    h1 {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

export default PlaylistRow;
