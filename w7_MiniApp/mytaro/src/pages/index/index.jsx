import React, { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { AtButton,AtList, AtListItem  } from 'taro-ui'
import { observer, inject } from 'mobx-react'
import Tabbar from '../../components/tabbar';

import './index.scss'

console.log('taro',Taro);

@inject('store')  // 把store数据通过props传入组件
@observer   // 监听数据修改，如依赖的数据有修改，则自动刷新组件
class Index extends Component {
  state = {
    userList:[]
  }
  componentWillMount () { }

  async componentDidMount () {
    const {data} = await Taro.request({
      url:'https://api.qfh5.cn/api/user'
    });
    console.log(data.data);

    this.setState({
      userList:data.data.result
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props.store
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props.store
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props.store
    counterStore.incrementAsync()
  }

  goto = ()=>{

  }
  
  onReachBottom(){
    console.log('onReachBottom()')
  }

  render () {console.log('index.props',this.props);
    const { userList} = this.state;
    return (
      <View className='index'>
        <AtList>
          {
            userList.map(item=>{
              return <AtListItem arrow='right' title={item.username} onClick={this.goto} />
            })
          }
          
        </AtList>
        <Tabbar></Tabbar>
      </View>
    )
  }
}

export default Index
