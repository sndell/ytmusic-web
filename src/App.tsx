import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './common/sidebar/components';
import Settings from './pages/settings/components';
import Api from './pages/settings/components/api';
import Home from './pages/home/components';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './common/styles/global';
import theme from './common/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />}>
              <Route path="api" element={<Api />} />
            </Route>
            {/* <Route path="/playlist/:playlistId" element={<Playlist />} /> */}
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
`;

export default App;
