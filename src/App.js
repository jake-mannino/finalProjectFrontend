import React, { useState, useEffect, Component } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.scss";
import Navi from "./components/Navi";
import Register from "./components/Register";
import Auth from "./components/Auth";
import backgroundH from "../src/RaptorJakeOnTheProwl.gif";
import { AuthProvider } from "./utilities/AuthContext";
import TrackPlayer from "./components/TrackPlayer";
import Home from "./components/Home";
import TrackUploader from "./components/TrackUploader";
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
// handleLogin = () => {
//   const { state = {} } = this.props.location;
//   const { prevLocation } = state;

//   this.setState(
//     {
//       loggedIn: true,
//     },
//     () => {
//       this.props.history.push(prevLocation || "/home");
//     }
//   );
// };

// const ProtectedRoute = () => ({ component: Home, loggedIn, path, ...rest }) => {
//   return (
//     <Route
//       path={path}
//       {...rest}
//       render={(props) => {
//         return loggedIn ? (
//           <Home {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/",
//               state: {
//                 prevLocation: path,
//                 error: "login or register first!",
//               },
//             }}
//           />
//         );
//       }}
//     />
//   );
// };

function App() {
  return (
    <AuthProvider>
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
            <Route path="/home">
              <TrackPlayer url="https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route>
              <TrackUploader path="/upload"/>
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
    </AuthProvider>
  );
}
export default App;