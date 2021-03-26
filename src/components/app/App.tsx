import React, { Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import theme from "../../common/theme/theme";
import {routes} from "../../routes";

function App() {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            {routes.map(({ path, component: MyComponent }) => (
              <Route
                key={path}
                exact
                path={path}
                render={() => <MyComponent />}
              />
            ))}
            <Redirect to={"/story-book"} />
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
