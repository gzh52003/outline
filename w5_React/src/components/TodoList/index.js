import React from 'react';

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'
import TodoStatus from './TodoStatus'

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
    }
    render() {
        const {datalist} = this.state;
        const total = datalist.length;
        const doneLength = datalist.filter(item=>item.done).length;
        const undoneLength = datalist.filter(item=>!item.done).length;
        return (
            <div>
                <TodoForm a="10" b={20} />
                <TodoContent datalist={datalist} />
                <TodoStatus total={total} done={doneLength} undone={undoneLength} />
            </div>
        )
    }
}

export default TodoList;