import React from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom'

import './App.scss';

// 引入页面组件
import Home from './views/Home'
import Reg from './views/Reg'
import Login from './views/Login'
import Mine from './views/Mine'
import Category from './views/Category'
import IQ from '~/IQ'

import { Menu,Row,Col,Button } from 'antd';
import { HomeOutlined, ContactsOutlined, TeamOutlined,UserOutlined } from '@ant-design/icons';


class App extends React.PureComponent {
    state = {
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
    render() {
        const { menu, current } = this.state;
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
                        <Button type="link" onClick={this.goto.bind(this,'/reg')}>注册</Button>
                        <Button type="link" onClick={this.goto.bind(this,'/login')}>登录</Button>
                    </Col>
                </Row>
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
            </div>
        )
    }
}

// 高阶组件（包装函数）
App = withRouter(App);

export default App;
