/**
 * 高阶组件
    * 是一个纯函数
    * 必须返回一个新的组件
 */

import React from 'react';
import { Redirect } from 'react-router-dom'


//  应用一：属性代理
export function withUser(InnerComponent) {

    //  return function OuterComponent(props){
    //      return (
    //         <InnerComponent {...props} currentUser={currentUser} />
    //      )
    //  }
    return class OuterComponent extends React.Component {
        render() {
            let currentUser = localStorage.getItem('currentUser');
            try {
                currentUser = JSON.parse(currentUser)
            } catch (err) {
                currentUser = currentUser;
            }

            if (!currentUser) {
                currentUser = {}
            }
            return (
                <InnerComponent {...this.props} currentUser={currentUser} />
                //  {...this.props} 等效与 history={this.props.history} location={this.props.location}
            )

        }
    }
}

export function withStorage(key) {
    const value = localStorage.getItem(key);
    const data = {
        [key]: value
    }
    return function (InnerComponent) {
        return function OuterComponent(props) {
            return <InnerComponent {...props} {...data} />
        }
    }
}


//  应用二：反向继承
// 可以实现路由拦截

export function withAuth(InnerComponent) {
    return class OuterComponent extends InnerComponent {
        // constructor(props){
        //     super(props);
        // }
        componentDidMount() {
            super.componentDidMount();
        }
        render() {
            // 根据条件选择是否渲染InnerComponent
            if (this.props.currentUser.username) {
                return super.render()
            }
            return <Redirect to="/login" />
            // return <div>未登录无法访问</div>
        }
    }
}

export default {
    withUser,
    withStorage,
    withAuth
}