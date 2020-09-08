import React from 'react';


function TodoItem({ data, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.title}</td>
            <td>{data.done ? '是' : '否'}</td>
            <td>
                <button>完成</button>
                <button>删除</button>
            </td>
        </tr>
    )
}

export default TodoItem