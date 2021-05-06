import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './App.css'
import Navi from './components/Navi'
import Register from './components/Register'
import Auth from './components/Auth'


function App() {
  return (
    <div className="App">
      <Router>
        <Navi 
        //token
        // deleteToken={deleteToken}
        />
        <Switch>
          <Route path='/register'>
            <Register/>

          </Route>
          {/* <Route exact={true} path="a">
            <Register saveToken={saveToken} />
            </Route>
            <Route exact={true} path="a">
                <Login saveToken={saveToken} />
            <Route exact={true} path="a"
              <Dash saveToken={saveToken} />
            </Route>
          */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
