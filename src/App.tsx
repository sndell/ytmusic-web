import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Sidebar from './common/sidebar/components';
import Settings from './pages/settings/components';
import Api from './pages/settings/components/pages/api';
import Home from './pages/home/components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './common/styles/global';
import theme from './common/styles/theme';
import Playlist from './pages/playlist/components';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Wrapper>
            <Main>
              <Sidebar />
              <Routes>
                <Route index element={<Home />} />
                <Route path="/settings" element={<Settings />}>
                  <Route path="api" element={<Api />} />
                </Route>
                <Route path="/playlist/:playlistId" element={<Playlist />} />
              </Routes>
            </Main>
          </Wrapper>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

export default App;
