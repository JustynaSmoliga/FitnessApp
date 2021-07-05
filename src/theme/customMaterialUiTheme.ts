import { createMuiTheme } from "@material-ui/core/styles";

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      dark:"#f5f5f5"
    },
    secondary: {
      main: "#1976d2",
      light: "#4791db",
      dark: "#115293",
    },
    text: { primary: "#4a484e" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
  },
});
