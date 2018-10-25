import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import SnakesAndLadders from './components/snakes_&_ladders/SnakesAndLadders';
import Weather from './components/weather/Weather';
import Bookmark from './components/bookmark/Bookmark';
import RandomQuote from './components/RandomQuote';


const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/snakesandladders" component={SnakesAndLadders} />
      <Route path="/weather" component={Weather} />
      <Route path="/randomquote" component={RandomQuote} />
      <Route path="/bookmark" component={Bookmark} />
    </Switch>
  </Router>
);
export default App;
