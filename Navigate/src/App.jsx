import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';
import Word from './components/Word';
import Style from './components/Style';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/4">Number 4</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/hello/blue/red">Styled Hello</Link>
          </li>
        </ul>
      </nav>

      <Switch>
      <Route path="/home" component={Home} />
        <Route path="/:number" component={Number} />
        <Route path="/:word" component={Word} />
        <Route path="/:word/:color1/:color2" component={Style} />
      </Switch>
    </Router>
  );
}

export default App;