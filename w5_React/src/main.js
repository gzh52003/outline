import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'

import MyContext from './context'

ReactDOM.render(
    <MyContext.Provider value={{username:'laoxie',password:123456}}>
        <App/>
    </MyContext.Provider>
    ,
    document.querySelector('#app')
)