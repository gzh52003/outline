import React from 'react';
import {Menu,Layout} from 'antd'
import { withUser, withAuth, withStorage } from '../utils/hoc';
import {Route} from 'react-router-dom'

import IQJquery from './IQJquery'
import IQReact from './IQReact'
import IQNode from './IQNode'
import IQVue from './IQVue'

const { Header, Content, Footer, Sider } = Layout;

class Category extends React.PureComponent {
    state = {
        current:'/react',
        menu: [{
            name: 'React',
            path: '/react',
            component:IQReact
        }, {
            name: 'Vue',
            path: '/vue',
            component:IQVue
        }, {
            name: 'NodeJS',
            path: '/node',
            component:IQNode
        }, {
            name: 'jQuery',
            path: '/jquery',
            component:IQJquery
        }]
    }
    goto = ({key})=>{
        this.setState({
            current:key
        })
        this.props.history.push('/category'+key);
    }
    componentWillMount(){
        const {pathname} = this.props.location;
        console.log('pathname=',pathname.replace(this.props.match.url,''));
        this.setState({
            current:pathname.replace(this.props.match.url,'')
        })
    }
    render() {
        const {menu,current} = this.state;
        const {match} = this.props;
        console.log('props=',this.props)
        return (
            <div>
                <Layout>

                <Sider>
                    <Menu
                        onClick={this.goto}
                        defaultSelectedKeys={[current]}
                        mode="inline"
                    >
                        {
                            menu.map(item=><Menu.Item key={item.path}>{item.name}</Menu.Item>)
                        }
                        
                    </Menu>

                </Sider>
                <Content>
                    {/* <Route path={match.path + "/react"} component={IQReact} />
                    <Route path={match.path + "/vue"} component={IQVue} />
                    <Route path={match.path + "/node"} component={IQNode} />
                    <Route path={match.path + "/jquery"} component={IQJquery} /> */}
                    {
                        menu.map(item=><Route key={item.name} path={match.path + item.path} component={item.component} />)
                    }
                </Content>
                </Layout>
            </div>
        )
    }
}

export default Category;