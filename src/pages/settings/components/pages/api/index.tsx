import React, { useState } from 'react';
import styled from 'styled-components';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../../../../store/auth';

const Api = () => {
  const dispatch = useDispatch();
  const [headers, setHeaders] = useState('');

  const handleAuth = async () => {
    // const clipboard = (await navigator.clipboard.readText()).replace(
    //   /(\r)/g,
    //   ''
    // );

    console.log(headers);

    axios
      .get('http://localhost:8000/auth', {
        params: {
          headers: headers,
        },
      })
      .then(({ data }) => dispatch(authenticate(data)))
      .catch((e: AxiosError) => console.log(e.message));
  };

  const handleChange = (value: string) => {
    setHeaders(value);
  };

  return (
    <Wrapper>
      <button type="button" onClick={handleAuth}>
        Authenticate
      </button>
      <textarea
        value={headers}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  button {
    padding: 2px 4px;
  }
`;

export default Api;
