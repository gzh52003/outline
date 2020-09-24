import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

// import MyContext from './context'
import {Provider} from './store'

ReactDOM.render(
    <Provider>
        <App/>
    </Provider>
    ,
    document.querySelector('#app')
)