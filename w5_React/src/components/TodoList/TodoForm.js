import React, { Component } from 'react';
import myContext from './myContext'


class TodoForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         keyword:'',
    //     }

    //     console.log('this.props=',this.props)
    //     console.log('this=',this)
    //     console.log('props=',props)
        
    //     // this.changeKeyword = this.changeKeyword.bind(this);
    //     // this.add = this.add.bind(this);
    // }

    // 添加静态属性:等效于TodoForm.xxx = xxx
    // PS：ES6支持静态方法，但不支持静态属性
    static contextType = myContext;
    // static getData(){}

    // 添加实例属性：等效于this.state = {}
    state = {
        keyword:''
    }

    // 添加实例方法
    changeKeyword = (e)=>{
        this.setState({
            keyword:e.target.value
        })
    }
    add = ()=>{

        this.props.addItem(this.state.keyword);

        // 清空并获得焦点
        this.setState({
            keyword:''
        })
        this.keyword.focus();
    }
    render(){
        console.log('todoform=',this)
        return (
            <div>
                <input type="text" value={this.state.keyword} onChange={this.changeKeyword} ref={el=>this.keyword=el} />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

// 添加静态属性
// TodoForm.contextType = myContext;

export default TodoForm;