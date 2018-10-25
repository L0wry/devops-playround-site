
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton/';
import StarIcon from '@material-ui/icons/Star';
import foodData from './recipes.json'
import RecipeReviewCard from "./RecipeReviewCard"

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
});

class Foodslider extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedRecipe: foodData.recipes[0]
    }
  }

  handleRecipeClick(recipe) {
    this.setState({ selectedRecipe: recipe });
  }

  render() {
    return (
      <div className={'root'}>
        <GridList cellHeight={200} spacing={1} className={'gridList'}>
          {foodData.recipes.map(tile => (
            <GridListTile key={tile.img} cols={tile.featured ? 1 : 0.5} rows={tile.featured ? 1 : 0.5}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionIcon={
                  <IconButton className={'icon'}>
                    <StarIcon color={tile.title === this.state.selectedRecipe.title ? 'secondary' : 'primary'} onClick={() => this.handleRecipeClick(tile)}/>
                  </IconButton>
                }
                actionPosition="left"
                className={'titleBar'}
              />
            </GridListTile>
          ))}
        </GridList>
        <RecipeReviewCard selectedRecipe={this.state.selectedRecipe} />
      </div>
    );
  }
}


export default withStyles(styles)(Foodslider);