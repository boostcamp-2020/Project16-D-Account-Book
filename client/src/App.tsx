import React from 'react';
import LoginPage from './pages/login-page/LoginPage';
import GlobalFonts from './assets/fonts/GlobalFonts';

function App(): JSX.Element {
  return (
    <>
      <GlobalFonts />
      <LoginPage />
    </>
  );
}

export default App;
