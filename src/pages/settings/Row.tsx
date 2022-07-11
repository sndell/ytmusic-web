import React from 'react';
import { IconType } from 'react-icons';
import styled, { css } from 'styled-components';
import { useLink } from '../../hooks/useLink';
import { Link } from 'react-router-dom';

type Props = {
  text: string;
  path: string;
};

const Row: React.FC<Props> = ({ text, path }) => {
  const link = useLink(`/settings/${path}`);

  return (
    <Wrapper $active={link.active} to={path}>
      <h1>{text}</h1>
    </Wrapper>
  );
};

const Wrapper = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 16px;
  cursor: pointer;
  text-decoration: none;
  user-select: none;
  ${({ $active, theme }) =>
    $active
      ? css`
          background-color: ${theme.colors.hover};
        `
      : undefined}

  h1 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ $active, theme }) =>
      $active ? theme.colors.text.primary : theme.colors.text.secondary};
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.hover};

    h1 {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

export default Row;
