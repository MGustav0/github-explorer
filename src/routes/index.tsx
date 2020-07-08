import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dasboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

/** O Switch garante que apenas uma rota seja exibida fazendo uma verificação de
 * exclusividade.
 */

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Dasboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
