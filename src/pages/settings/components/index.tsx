import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Row from './Row';

const Settings = () => {
  return (
    <Wrapper>
      <Rows>
        <Row text="Api" path="api" />
        <Row text="Theme" path="theme" />
        <Row text="Cache" path="cache" />
      </Rows>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Rows = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  min-width: 240px;
  width: 240px;
`;

export default Settings;
