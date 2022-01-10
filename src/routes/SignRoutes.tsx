import { Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import { defaultTheme } from "styles/theme";

import { Home } from "pages/Home";

export function SignRoutes() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Route path="/" exact component={Home} />
      </ThemeProvider>
    </>
  );
}
