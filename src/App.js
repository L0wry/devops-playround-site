import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import FoodSlider from "./FoodSlider";

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <FoodSlider />
    </React.Fragment>
  );
}

export default MyApp;
