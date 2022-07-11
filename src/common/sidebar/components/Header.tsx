import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <h1>scuffed-music: v0.1</h1>
      <h1>GitHub</h1>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
