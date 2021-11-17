import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import ColorPaletteContext from './pages/colorPaletteContext';
import ColorPaletteReact from './pages/colorPaletteReact';
import UserWithoutDedupe from './pages/userWithoutDedupe';
import UserWithDedupe from './pages/userWithDedupe';
import UserWithRaceCondition from './pages/userWithRaceCondition';
import ColorPaletteRedux from './pages/colorPaletteRedux';
import ColorPaletteRecoil from './pages/colorPaletteRecoil';
import { CountProvider } from './pages/colorPaletteContext/counterContext';
// import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/user-without-dedupe" element={<UserWithoutDedupe />} />

          <Route path="/user-with-dedupe" element={<UserWithDedupe />} />

          <Route
            path="/user-with-race-condition"
            element={<UserWithRaceCondition />}
          />

          <Route path="/react" element={<ColorPaletteReact />} />

          <Route
            path="/redux"
            element={
              <Provider store={store}>
                <ColorPaletteRedux />
              </Provider>
            }
          />

          <Route
            path="/context"
            element={
              <CountProvider>
                <ColorPaletteContext />
              </CountProvider>
            }
          />
          <Route
            path="/recoil"
            element={
              // <RecoilRoot>
              <ColorPaletteRecoil />
              // </RecoilRoot>
            }
          />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
