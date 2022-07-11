import React from 'react';
import { IconType } from 'react-icons';
import styled from 'styled-components';
import { useLink } from '../hooks/useLink';

type Props = {
  Icon: IconType;
  text: string;
  path: string;
};

const Row: React.FC<Props> = ({ Icon, text, path }) => {
  const link = useLink(path);

  return (
    <Wrapper active={link.active} onClick={() => link.to(path)}>
      <Container>
        <Icon />
      </Container>
      <h1>{text}</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  padding: 8px 0;
  cursor: pointer;
  user-select: none;

  svg,
  h1 {
    color: ${({ active, theme }) =>
      active ? theme.colors.text.primary : theme.colors.text.secondary};
  }

  svg {
    font-size: 24px;
  }

  h1 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const Container = styled.div`
  height: 24px;
  width: 24px;
  margin: 0 16px;
`;

export default Row;
