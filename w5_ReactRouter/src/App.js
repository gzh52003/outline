import React from 'react';
import { HashRouter, BrowserRouter, Route, Redirect, Switch,Link,NavLink,withRouter } from 'react-router-dom'

import './App.css';

// 引入页面组件
import Home from './views/Home'
import Reg from './views/Reg'
import Login from './views/Login'
import Mine from './views/Mine'

class App extends React.PureComponent{
    state = {
        menu:[{
            text:'首页',
            name:'home',
            path:'/home'
        },{
            text:'注册',
            name:'reg',
            path:'/reg'
        },{
            text:'登录',
            name:'login',
            path:'/login'
        },{
            text:'我的',
            name:'mine',
            path:'/mine'
        }]
    }
    goto = (path)=>{
        // this.props.history.push(path);
        this.props.history.replace(path);
    }
    render() {
        const {menu} = this.state;
        console.log('App.props=',this.props);
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/notfound" render={() => <div>404</div>} />
                    <Redirect from="/" to="/home" exact />
    
                    {/* 404 */}
                    <Redirect to="/notfound" />
                </Switch>
                <nav>
                    {/* <ul>
                        {
                            menu.map(item=><li key={item.name}><NavLink to={item.path} 
                                //activeStyle={{color:'#f00',fontWeight:'bold'}}
                                activeClassName="active"
                            >{item.text}</NavLink></li>)
                        }
                    </ul> */}
                    <ul>
                        {
                            menu.map(item=><li key={item.name} onClick={this.goto.bind(this,item.path)}>{item.text}</li>)
                        }
                    </ul>
                </nav>
            </div>
        )
    }
}

// 高阶组件（包装函数）
App = withRouter(App);

export default App;
