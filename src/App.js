import logo from './logo.svg';
import './App.css';

import React, { Suspense, useState } from 'react';


import Pages from './pages/pages.json';
import {
  Route,
  Switch,
  Redirect,
  HashRouter as Router,
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Hijo from './pages/Hijo/Hijo';
import Page from './pages/Page';

import { sdk } from '../src/looker/looker-connection';
import Drawernavbar from './components/drawernavbar/Drawernavbar'

export const AppContext = React.createContext();

function App() {
  const [qApp, setQApp] = useState(null);

  console.log("v17.10.2023")

  window.app = sdk

  return (
    <Router basename={process.env.PUBLIC_URL || '/Looker_Prueba_01'}>
      <AppContext.Provider value={qApp}>
          <Drawernavbar content={Pages} />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Page setQAppContext={setQApp}>
                <Home />
              </Page>
            </Route>
            <Route exact path="/padre/hijo">
            <Page setQAppContext={setQApp}>
                <Hijo />
              </Page>
            </Route>
          </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
