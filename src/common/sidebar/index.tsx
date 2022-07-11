import React from 'react';
import styled from 'styled-components';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <h1>Sidebar</h1>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;
