import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularIndeterminate() {
  return (
    <div>
      <CircularProgress className={'Spinner'} style={{ color: green[500] }} thickness={7} />
    </div>
  );
}

export default withStyles(styles)(CircularIndeterminate);