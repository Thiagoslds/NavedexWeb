import React from 'react';
import { Switch } from 'react-router';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
<Switch>
  <Route path="/" exact component={SignIn} />
  <Route path="/dashboard" component={Dashboard} isPrivate />
  <Route path="/user/signup" component={SignUp} />
</Switch>
);

export default Routes;