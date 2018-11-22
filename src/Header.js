import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Bug from "./bug.png";
import Menu from "./Menu";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class ButtonAppBar extends React.Component {

 constructor() {
   super()
    const number = getRandomInt(10)
     this._showbug = number % 8 === 0 
 }

  render() {
    return (
      <div className={'root'}>
        <AppBar position="static">
          <Toolbar>
            <IconButton classes={{
              root: 'the-hamburger-button', // class name, e.g. `classes-nesting-root-x`
              }} 
              color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" className={'grow'}>
              Aye Spy Demo Site { this._showbug ? 
                <img src={Bug} width="30" height="30" class="eww-a-bug"/> :
                null 
               }
            </Typography> 
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);

