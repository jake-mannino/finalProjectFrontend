import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.scss";
import Navi from "./components/Navi";
import Register from "./components/Register";
import Auth from "./components/Auth";
import backgroundH from "../src/RaptorJakeOnTheProwl.gif";

// var Link = React.createClass({
//   getInitialState: function(){
//     return {hover: false}
//   },
//   toggleHover: function(){
//     this.setState({hover: !this.state.hover})
//   },
//   render: function() {
//     var linkStyle;
//     if (this.state.hover) {
//       linkStyle = {animation: 'Tornado-mode', 'infinite' '30s' 'linear'
//       @keyframes Tornado-mode {
//         from {
//           transform: rotate(0deg);
//         }
//         to {
//           transform: rotate(360deg);
//         }
//       }}
//     } else {
//       linkStyle = {}
//     }
//     return(
//       <div>
//         <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
//       </div>
//     )
// }
function App() {
  return (
      <div
        className="App"
        class="bk_Img"
        style={{
          backgroundImage: "url(" + backgroundH + ")",
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Router>
          <Navi
          //token
          // deleteToken={deleteToken}
          />
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route exact={true} path="a">
            <Register saveToken={saveToken} />
            </Route>
            <Route exact={true} path="a">
                <Login saveToken={saveToken} />
            <Route exact={true} path="a"
              <Dash saveToken={saveToken} />
            </Route>
            Redirect react router component, based on auth
            custom hook
              useAuth
          */}
          </Switch>
        </Router>
      </div>
  );
}
export default App;
