import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import Cooking from "./Cooking";
import FoodSlider from "./FoodSlider";

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header classes={{menuButton: 'menuButton'}} />
      <FoodSlider />
    </React.Fragment>
  );
}

export default MyApp;
