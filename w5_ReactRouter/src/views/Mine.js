import React from 'react';

import {withUser,withAuth, withStorage} from '../utils/hoc';

@withStorage('logined')
@withStorage('username')
@withUser
@withAuth
class Mine extends React.PureComponent{
    componentDidMount(){

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

        console.log('Mine.props',this.props)
    }
    render(){
        return (
            <div>
                Mine
            </div>
        )
    }
}

// Mine = withAuth(Mine)
// Mine = withUser(Mine)
// Mine = withStorage('authorization')(Mine)
export default Mine;