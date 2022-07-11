import React from 'react';
import styled from 'styled-components';
import { useActive } from '../../../hooks/useActive';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

type Props = {
  Icon: IconType;
  text: string;
  path: string;
};

const Row: React.FC<Props> = ({ Icon, text, path }) => {
  const { active } = useActive(path);

  return (
    <Wrapper $active={active} to={path}>
      <Container>
        <Icon />
      </Container>
      <h1>{text}</h1>
    </Wrapper>
  );
};

const Wrapper = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  text-decoration: none;
  user-select: none;

  svg,
  h1 {
    color: ${({ $active, theme }) =>
      $active ? theme.colors.text.primary : theme.colors.text.secondary};
  }

  svg {
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 400;
  }

  :hover {
    h1,
    svg {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

const Container = styled.div`
  height: 24px;
  width: 24px;
  margin: 0 16px;
`;

export default Row;
