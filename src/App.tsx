import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyles } from 'components/common/styles/GlobalStyles';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route
            path="/"
            element={<h1>React Typescript Starter Template</h1>}
          />
        </Routes>
      </QueryClientProvider>
    </React.Fragment>
  );
};

export default App;
