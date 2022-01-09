import SideMenus from "../components/SideMenus";
import Header from "../components/Header";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Employee from "../pages/Employee/Employee";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});

const useStyles = makeStyles({
  appMenu: {
    paddingLeft: "320px",
    width: "100%",
    transform: "translateZ(0)",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenus />
        <div className={classes.appMenu}>
          <Header />
          <Employee />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
