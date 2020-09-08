import React from 'react';

import TodoItem from './TodoItem';

function TodoContent({datalist}) {
    console.log('TodoContent=',datalist)
    return (
        <table style={{ width: '100%' }} className="todo-content">
            <thead>
                <tr>
                    <th>#</th>
                    <th>待办事项</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    datalist.map((item,idx)=><TodoItem index={idx} data={item} key={item.id}/>)
                }
            </tbody>
        </table>
    )
}

export default TodoContent