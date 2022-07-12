import React from 'react';
import Sidebar from './common/sidebar/components';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from './pages/settings/components';
import Api from './pages/settings/components/api';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="/settings" element={<Settings />}>
            <Route path="api" element={<Api />} />
          </Route>
          {/* <Route path="/playlist/:playlistId" element={<Playlist />} /> */}
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

export default App;
