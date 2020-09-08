import React, { Component } from 'react';



class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            keyword:''
        }
        
        this.changeKeyword = this.changeKeyword.bind(this);
        this.add = this.add.bind(this);
    }
    changeKeyword(e){
        this.setState({
            keyword:e.target.value
        })
    }
    add(){

        // 清空并获得焦点
        this.setState({
            keyword:''
        })
        this.keyword.focus();
    }
    render(){
    
        return (
            <div>
                <input type="text" value={this.state.keyword} onChange={this.changeKeyword} ref={el=>this.keyword=el} />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

export default TodoForm;