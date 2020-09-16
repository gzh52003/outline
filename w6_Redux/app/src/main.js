import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom'

import App from './App'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
    <Router>
        <App/>
        {/* <Route component={App} /> */}
    </Router>
    ,
    document.querySelector('#app')
)