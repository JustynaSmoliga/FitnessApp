import { createMuiTheme } from "@material-ui/core/styles";

// export default createMuiTheme({
//   palette: {
//     type: 'dark',
//     background: {
//       default: '#292929',
//       paper: '#1C1C1C',
//     },
//     text: {
//       primary: '#fff',
//     },
//   },
// })

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

// export const addBtnTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#2196F3',
//     },
//   },
// })

// export const UButtonTheme = createMuiTheme({
//   palette: {
//     primary: {
//       main: '#1a90ff',
//     },
//     secondary: {
//       main: '#ff384a',
//     },
//   },
// })
