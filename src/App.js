import React from 'react';
import './css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'components/home';
import About from 'components/about-us';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
