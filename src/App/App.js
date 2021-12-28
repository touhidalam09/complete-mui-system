import SideMenus from '../components/SideMenus';
import Header from '../components/Header';
import { makeStyles } from '@mui/styles';
import { CssBaseline } from '@mui/material';

const useStyles = makeStyles({
  appMenu :{
    paddingLeft: '320px',
    width: '100%',
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenus />
      <div className={classes.appMenu}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
