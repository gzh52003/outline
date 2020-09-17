import React from 'react';
import { Rate,Avatar,Input,Button } from 'antd'
import {UserOutlined,HeartOutlined} from '@ant-design/icons'
import request from '@/utils/request';
import {connect} from 'react-redux';

@connect(state=>({
    currentUser:state.user
}),(dispatch)=>({
    updateUser(user){
        dispatch({type:'update_user',user})
    }
}))
class IQ extends React.PureComponent {
    state = {
        data: {}
    }
    follow = async ()=>{
        const {data} = this.state;
        const {currentUser,updateUser} = this.props;
        // 判断是否有收藏
        const issc = currentUser.focus.some(item=>item===data._id);
        const result = await request.put(`iq/${data._id}/follow`,{
            userid:currentUser._id,
            action:issc ? 'del' : 'add',//del
        });

        if(result.status === 200){
            if(issc){
                // 取消收藏
                updateUser({
                    focus:currentUser.focus.filter(id=>id!==data._id)
                })
            }else{
                // 添加收藏
                updateUser({
                    focus:[data._id,...currentUser.focus]
                })
            }
        }
    }
    async componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params;

        const data = await request.get('/iq/' + id)
        this.setState({
            data: data.data
        });

        // 更新用户浏览记录
        const {status} = await request.get(`/iq/${id}/hot`);
        if(status === 200){
            this.setState({
                data:{
                    ...this.state.data,
                    hot:this.state.data.hot+1
                }
            })
        }
    }
    render() {
        const { data } = this.state;
        const {currentUser} = this.props;
        return <div style={{padding:15}}>
            <h1>{data.question}</h1>
    <div>
        {data.user ? <span><Avatar size="small" style={{marginRight:5}} icon={<UserOutlined />} />{data.user.username}</span>:''} 
        <span style={{margin:'0 10px'}}>难度：<Rate value={data.difficulty} disabled /></span> 
    <span>浏览：{data.hot}</span> <Button type="link" size="small" icon={<HeartOutlined />} onClick={this.follow}>{currentUser.focus.some(item=>item===data._id) ? '取消' : '收藏'}</Button></div>
        <Input.TextArea style={{height:100,marginBottom:10}}></Input.TextArea>
        <Button type="primary" size="large">添加答案</Button>
        </div>
    }
}

export default IQ;