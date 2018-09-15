import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import Cooking from "./Cooking";
// import FoodSlider from "./FoodSlider";

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header classes={{menuButton: 'menuButton'}} />
    </React.Fragment>
  );
}

export default MyApp;


// var httpDetails = {
//   query: req.params.query,
//   host: 'food2fork.com',
//   path: '/api/search?key=c0172c962f73f5feeaddc283613ce9ef&q='
// }

// apiActions.makeHttpRequest(httpDetails, res, function(returnValue){
//   res.json(returnValue);
// });
// });