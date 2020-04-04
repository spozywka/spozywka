import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { paths, loggedInUserId } from './constants';
import { Checkout } from './features/checkout/Checkout';
import { Homepage } from './features/homepage/Homepage';
import { OfferDetails } from './features/offerDetails/OfferDetails';
import { OfferList } from './features/offerList/OfferList';
import { CurrentUserProvider } from './common/contexts/CurrentUser';

function App() {
  return (
    <CurrentUserProvider userId={loggedInUserId}>
      <Router>
        <Switch>
          <Route exact={true} path={paths.homepage}>
            <Homepage />
          </Route>

          <Route exact={true} path={paths.offerList}>
            <OfferList />
          </Route>

          <Route path={paths.checkout}>
            <Checkout />
          </Route>

          <Route path={paths.offerDetails}>
            <OfferDetails />
          </Route>

          <Redirect to={paths.homepage} />
        </Switch>
      </Router>
    </CurrentUserProvider>
  );
}

export default App;
