import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
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
    align: 'right',
    marginLeft: -12,
    marginRight: 20,
    flex: 'right'
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
          <Grid container spacing={50}>
            <Toolbar>
              <Grid item xs>
                <Menu styles={styles.menuButton} />
              </Grid>
              <Grid item xs>
              <Typography variant="title" color="inherit" className={'grow'}>
                Aye Spy Demo Site { this._showbug ? 
                  <img src={Bug} width="30" height="30" class="eww-a-bug"/> :
                  null 
                }
              </Typography> 
              </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonAppBar);

