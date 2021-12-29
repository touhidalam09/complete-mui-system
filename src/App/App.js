import SideMenus from '../components/SideMenus';
import Header from '../components/Header';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import PageHeader from '../components/PageHeader';
import GroupIcon from '@mui/icons-material/Group';

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe"
    }
  }
})

const useStyles = makeStyles({
  appMenu: {
    paddingLeft: '320px',
    width: '100%',
    transform:'translateZ(0)'
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <SideMenus />
        <div className={classes.appMenu}>
          <Header />
          <PageHeader 
            title = "Page Title"
            subTitle = "Page Description ..."
            icon = {<GroupIcon fontSize='large'/>}
          />
        </div>
        <CssBaseline />
      </ThemeProvider>
    </>
  );
}

export default App;
