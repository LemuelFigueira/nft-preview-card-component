import { Route } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import { userTheme } from "styles/theme";

import { UserHome } from "pages/UserHome";

export function UserRoutes() {
  return (
    <>
      <ThemeProvider theme={userTheme}>
        <Route path="/" exact component={UserHome} />
      </ThemeProvider>
    </>
  );
}
