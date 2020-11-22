import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import store from './store'
import Login from "./pages/Login";
import Properties from "./pages/Properties";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <React.Suspense fallback={() => null}>
        <Switch>
          <Route
            exact
            path="/propriedades"
            name="Propriedades"
            render={(props: any) => <Properties {...props} />}
          />
          <Route
            exact
            path="/"
            name="login"
            render={(props: any) => <Login {...props} />}
          />
          <Route
            exact
            path="/login"
            name="login"
            render={(props: any) => <Login {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  </Provider>
);

export default App;
