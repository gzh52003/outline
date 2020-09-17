import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store';
console.log(store)
import App from './App'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
            {/* <Route component={App} /> */}
        </Router>
    </Provider>
    ,
    document.querySelector('#app')
)