import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RootProvider } from './store/RootStore';
import LoginPage from './pages/login-page/LoginPage';
import GlobalFonts from './assets/fonts/GlobalFonts';
import NeedUserLogin from './router/NeedUserLogin';

function App(): JSX.Element {
  return (
    <>
      <RootProvider>
        <Router>
          <GlobalFonts />
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/" component={NeedUserLogin} />
          </Switch>
        </Router>
      </RootProvider>
    </>
  );
}

export default App;
