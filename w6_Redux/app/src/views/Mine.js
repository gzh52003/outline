import React from 'react';
import {connect} from 'react-redux';
import {withUser,withAuth, withStorage} from '../utils/hoc';

@connect()
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

        this.props.dispatch({type:'update_user_async',userid:'5f621e5f6b0ad020c4219012'})
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