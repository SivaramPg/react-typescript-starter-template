import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyles } from 'components/common/styles/GlobalStyles';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <h1>React Typescript Starter Template</h1>}
            />
          </Switch>
        </Router>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
