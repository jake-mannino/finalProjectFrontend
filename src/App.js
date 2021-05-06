import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Register from './Register';
import './App.css';
import Auth from './Auth';
import Nav from './Nav';


import bootstrap from 'bootstrap';


function App() {
  return (
    <div className="App">
      <Router>
        <Nav 
        //token
        // deleteToken={deleteToken}
        />
        <Switch>
          <Route path='/register'>
            <Auth 
              register
            />

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
