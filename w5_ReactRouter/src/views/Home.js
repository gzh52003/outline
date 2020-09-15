import React from 'react';
import {List} from 'antd'
import {withUser,withAuth} from '@/utils/hoc'
import {request} from '@/utils'

// function Home(props){
//     // 获取用户信息
//     // let currentUser = localStorage.getItem('currentUser');
//     // try{
//     //     currentUser = JSON.parse(currentUser)
//     // }catch(err){
//     //     currentUser = currentUser;
//     // }

//     // if(!currentUser){
//     //     currentUser = {}
//     // }

//     return (
//         <div>
//             Home
//         </div>
//     )
// }
class Home extends React.Component{
    state = {
        iqlist:[],
        hotlist:[]
    }
    async componentDidMount(){
        const newData = await request.get('/iq',{
            size:10
        })

        const hotData = await request.get('/iq',{
            size:10,
            sort:'hot'
        })
        
        this.setState({
            iqlist:newData.data.result,
            hotlist:hotData.data.result
        })
    }
    render(){
        const {iqlist,hotlist} = this.state;
        return (
            <div>
                <h1>最近面试题</h1>
                <List 
                dataSource={iqlist} 
                renderItem={item => (
                    <List.Item>
                        {item.question}
                    </List.Item>
                    )} 
                />
                <h1>热门面试题</h1>
                <List 
                dataSource={hotlist} 
                renderItem={item => (
                    <List.Item>
                        {item.question} - {item.hot}
                    </List.Item>
                    )} 
                />
            </div>
        )
    }
}

// Home = withUser(Home)

export default Home;