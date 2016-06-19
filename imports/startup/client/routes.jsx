import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import LoginForm from '../../ui/components/LoginForm.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
        <Route path="tags/:selectedTags" component={AppContainer}></Route>
    </Route>
    <Route path="/login" component={LoginForm}>
    </Route>
  </Router>
);
