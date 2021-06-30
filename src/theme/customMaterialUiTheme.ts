import { createMuiTheme } from "@material-ui/core/styles";

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ff384a",
    },
    text: { primary: "#4a484e" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
});

