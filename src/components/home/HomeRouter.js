import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import Employees from './employees';
import NotFound from 'components/NotFound';

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path={routes.HOME} component={() => <Redirect to={routes.EMPLOYEES} />} />

      <Route path={routes.EMPLOYEES} component={Employees} />

      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default HomeRouter;
