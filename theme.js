import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6573c3",
      main: "#3F51B5",
      dark: "#2c387e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#339287",
      main: "#007769",
      dark: "#005349",
      contrastText: "#fff",
    },
  },
});

export default theme;
