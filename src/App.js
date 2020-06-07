import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home';
import Soda from './Soda';
import Chips from './Chips';
import Candies from './Candies';
import Food from './Food';
import NotFound from './NotFound';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Soda" render={() => <Soda/>}/>
          <Route exact path="/Chips" render={() => <Chips/>}/>
          <Route exact path="/Candies" render={() => <Candies/>}/>
          <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps}/>}/>
          <Route exact path="/notfound" component={NotFound}/>
          <Route render={() => <Redirect to="/notfound"/>}/>
      </Switch>
    </div>
  );
}

export default App;
