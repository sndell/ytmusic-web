import React from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';

const Api = () => {
  const handleAuth = async () => {
    const clipboard = (await navigator.clipboard.readText()).replace(
      /(\r)/g,
      ''
    );

    axios
      .get('http://localhost:8000/auth', {
        params: {
          headers: clipboard,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem('headers', JSON.stringify(res.data));
      })
      .catch((e: AxiosError) => {
        console.log(e.message);
      });
  };

  return (
    <Wrapper>
      <button type="button" onClick={handleAuth}>
        Authenticate
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    padding: 2px 4px;
  }
`;

export default Api;
