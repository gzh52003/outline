import React from 'react';
import myContext from './myContext';

function TodoItem({ data, index,removeItem,completeItem }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.title}</td>
            <td>{data.done ? '是' : '否'}</td>
            <td>
                {/* <button onClick={completeItem.bind(null,data.id)}>完成</button>
                <button onClick={removeItem.bind(null,data.id)}>删除</button> */}
                <myContext.Consumer>
                    {
                        ({remove,complete})=>{
                            // 函数的第一个参数就是共享的数据
                            return (
                                <React.Fragment>
                                    <button onClick={complete.bind(null,data.id)}>完成</button>
                                    <button onClick={remove.bind(null,data.id)}>删除</button>
                                </React.Fragment>
                            )
                        }
                    }
                    
                </myContext.Consumer>
            </td>
        </tr>
    )
}

export default TodoItem