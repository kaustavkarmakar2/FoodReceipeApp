import React from "react";
import "./App.css";

import UserReceipeAdd from "./components/UserReceipeAdd";
import Home from "./components/Home"
import {
  BrowserRouter, Switch, Route,
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

function App() {
  
  const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const classes = useStyles();

  return (
    
    <BrowserRouter>
    
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <div className="backgroundColor">
                <Link to='/'>Food</Link>
              </div>
              <div>
                <Link to='/user'>User</Link>
              </div>
            </Typography>
          </Toolbar>
        </AppBar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/user" component={UserReceipeAdd} />
          </Switch> 
        
      </div>
    
  </BrowserRouter>
  
    
  );
}


export default App;
