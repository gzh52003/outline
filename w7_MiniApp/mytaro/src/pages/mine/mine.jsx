import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { AtButton,AtTabBar  } from 'taro-ui'
import { observer, inject } from 'mobx-react'
import Tabbar from '../../components/tabbar';

@inject('store')
@observer
class Mine extends Component{
    login = ()=>{
        const {userStore} = this.props.store;
        userStore.login({
            username:'laoxie',
            password:123456
        })
    }
    render(){
        const {userStore} = this.props.store
        return (
            <View>
                {userStore.userInfo.username}
                <AtButton onClick={this.login}>登录</AtButton>
                <Tabbar current={2}/>
            </View>
        )
    }
}

export default Mine;