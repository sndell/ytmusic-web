import React from 'react';
import Sidebar from './common/sidebar/components';
import styled from 'styled-components';
import {
  BrowserRouter,
  // Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/settings/:category" element={<Settings />} /> */}
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
`;

export default App;
