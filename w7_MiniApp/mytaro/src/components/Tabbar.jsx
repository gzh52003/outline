import React, { Component } from 'react';
import { View, Button, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import {  AtTabBar } from 'taro-ui';


class MyTabbar extends Component {
    state = {
        current: this.props.current || 0,
        tabList: [
            { title: '首页', iconType: 'home', path: '/pages/index/index' },
            { title: '拍照', iconType: 'camera', path: '/pages/camera/camera' },
            { title: '我的', iconType: 'user', text: '5', max: 99, path: '/pages/mine/mine' }
        ]
    }

    changeTab = (index) => {
        console.log('index=', index)
        this.setState({
            current: index
        });

        // 跳转
        const path = this.state.tabList[index].path;
        Taro.navigateTo({
            url: path
        })
    }
    render() {
        return (
            
            <AtTabBar
                fixed
                tabList={this.state.tabList}
                onClick={this.changeTab}
                current={this.state.current}
            />
        )
    }
}

export default MyTabbar;