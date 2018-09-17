import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function init () {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
}


export default init