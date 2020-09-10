import React from 'react'

// PureComponent做了性能优化的组件

// class Lifecycle extends React.Component{
class Lifecycle extends React.PureComponent{
    constructor(){
        super();
        this.state = {
            qty:1
        }
        console.log('constructor')
    }
    // 不推荐 17.x改名为：UNSAFE_componentWillMount
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
        // ajax
    }

    // 不推荐
    componentWillUpdate(nextProps, nextState){
        // this.props, this.state.qty:1/nextState.qty:2
        console.log('componentWillUpdate')
    }
    componentDidUpdate(prevProps, prevState){
        // this.props, this.state.qty:2/prevState.qty:1
        console.log('componentDidUpdate')

        // 在这里setState时要特别注意，一定要加上条件，否则会进入死循环
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
     // 不推荐
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
    }

    // shouldComponentUpdate一般用于性能优化
    // shouldComponentUpdate(nextProps, nextState){
    //     // this.state.qty: 当前值
    //     // nextState.qty: 将要改变的值
    //     console.log('shouldComponentUpdate')
    //     // this.forceUpdate(); //强制刷新（不推荐）

    //     // qty为5的倍数才渲染页面、
    //     // if(nextState.qty%5===0){
    //     //     return true;
    //     // }else{
    //     //     return false
    //     // }

    //     if(nextProps.username === this.props.username){
    //         return false;
    //     }
    //     return true;
    // }
    render(){
        console.log('render')
        return (
            <div>
                <h1>生命周期测试</h1>
                <button onClick={()=>{
                    this.setState({
                        qty:this.state.qty+1
                    })
                }}>qty:{this.state.qty}</button>
            </div>
        )
    }
}

export default Lifecycle;