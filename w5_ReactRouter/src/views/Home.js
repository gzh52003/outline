import React from 'react';

import {withUser,withAuth} from '../utils/hoc'


function Home(props){
    console.log('home.props=',props)
    // 获取用户信息
    // let currentUser = localStorage.getItem('currentUser');
    // try{
    //     currentUser = JSON.parse(currentUser)
    // }catch(err){
    //     currentUser = currentUser;
    // }

    // if(!currentUser){
    //     currentUser = {}
    // }

    return (
        <div>
            Home
        </div>
    )
}

Home = withUser(Home)

export default Home;