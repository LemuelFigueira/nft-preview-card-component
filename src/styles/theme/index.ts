import { createTheme } from "@material-ui/core";

import vars from "styles/_variables-mui";

const Default = createTheme({
  palette: {
    primary: {
      main: vars.indigo,
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.secondary,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
      containedSizeSmall: {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
      root: {
        textTransform: "none",
        fontWeight: "normal",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: vars.second,
        padding: "8px 16px",
        fontSize: "13px",
      },
      arrow: {
        color: vars.second,
      },
    },
  },
});

const GenericUser = createTheme({
  palette: {
    primary: {
      main: vars.purple,
    },
    grey: {
      300: vars.inheritDefault1,
      A100: vars.inheritDefault2,
    },
    secondary: {
      main: vars.second,
    },
    error: {
      main: vars.red,
    },
    success: {
      main: vars.green,
    },
    warning: {
      main: vars.orange,
    },
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shape: {
    borderRadius: 8,
  },
  overrides: {
    MuiButton: {
      text: {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
      containedSizeSmall: {
        paddingLeft: "14px",
        paddingRight: "14px",
      },
      root: {
        textTransform: "none",
        fontWeight: "normal",
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: vars.second,
        padding: "8px 16px",
        fontSize: "13px",
      },
      arrow: {
        color: vars.second,
      },
    },
  },
});

export const defaultTheme = Default;

export const userTheme = GenericUser;
