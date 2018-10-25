
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
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
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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
    //this.handleRecipeClick = this.handleRecipeClick.bind(this)
    this.state = {
      selectedRecipe: foodData.recipes[0]
    }
  }

  handleRecipeClick(recipe) {
    console.log(recipe)
    this.setState(() => ({ selectedRecipe: recipe }));
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
                      <InfoIcon onClick={() => this.handleRecipeClick(tile)}/>
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