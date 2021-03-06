import React,{Suspense, lazy } from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import './App.scss';

// 引入页面组件
import Home from './views/Home'
// import Reg from './views/Reg'
// import Login from './views/Login'
// import Mine from './views/Mine'
// import Category from './views/Category'
// import IQ from '~/IQ'

const Reg = lazy(() => import("./views/Reg"));
const Login = lazy(() => import("./views/Login"));
const Mine = lazy(() => import("./views/Mine"));
const Category = lazy(() => import("./views/Category"));
const IQ = lazy(() => import("./views/IQ"));


import { Menu,Row,Col,Button } from 'antd';
import { HomeOutlined, ContactsOutlined, TeamOutlined,UserOutlined } from '@ant-design/icons';
import {connect} from 'react-redux'
import {logout} from './store/actions/user'

// import store from '@/store'

// console.log('App.store=',store)
const mapStateToProps = function(state){
    return {
       currentUser:state.user
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        logout(){
            dispatch(logout())
        }
    }
}
@connect(mapStateToProps,mapDispatchToProps)
@withRouter
class App extends React.PureComponent {
    state = {
        // currentUser:{},
        menu: [{
            text: '首页',
            name: 'home',
            icon:<HomeOutlined />,
            path: '/home'
        }, 
        // {
        //     text: '注册',
        //     name: 'reg',
        //     icon:<ContactsOutlined />,
        //     path: '/reg'
        // }, {
        //     text: '登录',
        //     name: 'login',
        //     icon:<TeamOutlined />,
        //     path: '/login'
        // }, 
        {
            text: '我的',
            name: 'mine',
            icon:<UserOutlined />,
            path: '/mine'
        }],
        current: '/home'
    }
    gotoPage = ({ key }) => {
        this.setState({
            current:key
        })
        this.goto(key);
        // this.props.history.replace(path);
    }
    goto = (path)=>{
        this.props.history.push(path);
    }
    componentWillMount(){
        const {pathname} = this.props.location;
        this.setState({
            current:pathname
        })

        
    }
    // componentDidMount(){
    //     console.log('App.componentDidMount')
    //     store.subscribe(()=>{
    //         console.log('App.subscribe')
    //         const {currentUser} = store.getState();
    //         this.setState({
    //             currentUser:currentUser
    //         })
    //     })
    // }
    render() {
        const { menu, current } = this.state;
        const {currentUser,logout} = this.props;
        console.log('App.props=',this.props)
        return (
            <div>
                <Row style={{backgroundColor:'#001529'}}>
                    <Col span={12}>
                        <Menu onClick={this.gotoPage} selectedKeys={[current]} mode="horizontal" theme="dark">
                            {
                                menu.map(item => <Menu.Item key={item.path}>
                                    {item.icon}
                                    {item.text}
                                </Menu.Item>)
                            }
                        </Menu>
                    </Col>
                    <Col span={12} style={{textAlign:'right',lineHeight:'46px'}}>
                        {
                            currentUser._id ? <Button type="link" onClick={logout}>退出</Button> :
                            <>
                            <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                            <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                            </>
                        }
                    </Col>
                </Row>
                <Suspense fallback={<div>loading...</div>}>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/login" component={Login} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/category" component={Category} />
                        <Route path="/iq/:id" component={IQ} />
                        <Route path="/notfound" render={() => <div>404</div>} />
                        <Redirect from="/" to="/home" exact />

                        {/* 404 */}
                        {/* <Redirect to="/notfound" /> */}
                    </Switch>

                </Suspense>
            </div>
        )
    }
}

// 高阶组件（包装函数）
// App = withRouter(App);

// const mapStateToProps = function(state){
//     console.log('state=',state)
//     // state: redux的状态
//     return {
//        currentUser:state.user
//     }
// }
// App = connect(mapStateToProps)(App)

export default App;
