import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from "./Home";
import Dog from "./Dog";
import Cat from "./Cat";
import Panda from "./Panda";

function App() {

  // Switch is used to only match one route but the route will be matched based on which route
  // is encountered first in the list of routes.
  
  // exact is used to match the exact path.
  return (
    <div className="App">
      <nav className="App-nav">
        <NavLink exact activeClassName="App-active-nav-link" to="/">Home</NavLink>
        <NavLink exact activeClassName="App-active-nav-link" to="/Dog">Dog</NavLink>
        <NavLink exact activeClassName="App-active-nav-link" to="/Cat">Cat</NavLink>
        <NavLink exact activeClassName="App-active-nav-link" to="/Panda">Panda</NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Dog" render={() => <Dog name="Muffin" />}/>
        <Route exact path="/Cat" render={() => <Cat name="Garfield" />}/>
        <Route exact path="/Panda" render={() => <Panda name="Po" />}/>
      </Switch>
    </div>
  );
}

export default App;
