import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav 
        //token
        // deleteToken={deleteToken}
        />
        <Switch>
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
