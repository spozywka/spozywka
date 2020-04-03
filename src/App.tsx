import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import { Homepage } from './features/homepage/Homepage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={paths.homepage}>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
