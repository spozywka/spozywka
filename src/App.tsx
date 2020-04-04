import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { paths } from './constants';
import { Homepage } from './features/homepage/Homepage';
import { OfferList } from './features/offerList/OfferList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path={paths.homepage}>
          <Homepage />
        </Route>

        <Route path={paths.offerList}>
          <OfferList />
        </Route>

        <Redirect to={paths.homepage} />
      </Switch>
    </Router>
  );
}

export default App;
