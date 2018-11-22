import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Spinner from "./Spinner";

const styles = theme => ({
  card: {
    maxWidth: 2000,
  },
  media: {
    height: 500,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super();
    this.state = {
      expanded: false,
    }
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    return (
      <Card className='card'>
        <CardHeader
          title={this.props.selectedRecipe.title}
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography component="p">
           {this.props.selectedRecipe.description}
          </Typography>
        </CardContent>
        <CardActions className='actions' disableActionSpacing>
          <IconButton
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
        >
            <ExpandMoreIcon classes={{
            root: 'show-me-more', // class name, e.g. `classes-nesting-root-x`
          }}/>
          </IconButton>
        </CardActions>
        <Collapse  in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph variant="body2">
              Method:
            </Typography>
            <Typography paragraph>
            {this.props.selectedRecipe.method}
            </Typography>
            <Spinner />
          </CardContent>
        </Collapse>
     
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
