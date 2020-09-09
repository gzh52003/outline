import React from 'react';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'
import TodoStatus from './TodoStatus'

import myContext from './myContext';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: [
                {
                    id: 1,
                    title: '实现个小目标，月薪过万',
                    done: false, // 是否完成
                    addtime: Date.now()
                },
                {
                    id: 2,
                    title: '实现第二个小目标，赚他一个亿',
                    done: false,
                    addtime: Date.now() + 100
                }]
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
    }
    addItem(title) {
        const newData = {
            id: parseInt(Math.random() * 10000000),
            title,
            done:false,
            addtime:Date.now()
        }
        this.setState({
            datalist: [newData,...this.state.datalist]
        })
    }
    removeItem(id) {
        this.setState({
            datalist:this.state.datalist.filter(item=>item.id!=id)
        })
    }
    completeItem(id) {
        this.setState({
            datalist:this.state.datalist.map(item=>{
                if(item.id===id){
                    item.done = true
                }
                return item;
            })
        })
    }

    render() {
        const { datalist } = this.state;
        const total = datalist.length;
        const doneLength = datalist.filter(item => item.done).length;
        const undoneLength = datalist.filter(item => !item.done).length;
        return (
            <div>
                <myContext.Provider value={{remove:this.removeItem,complete:this.completeItem}}>
                    <TodoForm addItem={this.addItem} />
                    <TodoContent datalist={datalist} 
                    removeItem={this.removeItem}
                    completeItem={this.completeItem}
                    />
                    <TodoStatus total={total} done={doneLength} undone={undoneLength} />

                </myContext.Provider>
            </div>
        )
    }
}

export default TodoList;