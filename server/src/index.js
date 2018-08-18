import React from 'react';
import App from './App';
import './css/index.css';
// import registerServiceWorker from './registerServiceWorker';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(
        <App/>
    )
});


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
