import React from 'react';

import { Route, Switch } from 'react-router-dom';
import Main from '../containers/Main';
import Detail from '../containers/Detail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/detail/:id" component={Detail} />
    </Switch>
  );
};

export default Routes;
