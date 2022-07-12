import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <h1>Homepage</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    color: red;
  }
`;

export default Home;
