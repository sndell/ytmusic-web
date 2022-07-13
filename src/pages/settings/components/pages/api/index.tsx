import React from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../../../../store/auth';

const Api = () => {
  const dispatch = useDispatch();

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
      .then(({ data }) => dispatch(authenticate(data)))
      .catch((e: AxiosError) => console.log(e.message));
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
