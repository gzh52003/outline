import React from 'react';

import TodoItem from './TodoItem';

// 类型校验模块
import PropTypes from 'prop-types';

function TodoContent({datalist,removeItem,completeItem}) {
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
                {/* {
                    datalist.map((item,idx)=><TodoItem key={item.id} index={idx} data={item} removeItem={removeItem} completeItem={completeItem}/>)
                } */}
                {
                    datalist.map((item,idx)=>(
                        <TodoItem 
                            key={item.id} 
                            index={idx} 
                            data={item} 
                            removeItem={removeItem} 
                            completeItem={completeItem}
                        >
                            {
                                (data)=>{
                                    return <button>{data.title}</button>
                                }
                            }
                        </TodoItem>
                    ))
                }
            </tbody>
        </table>
    )
}

// 组件props类型校验
TodoContent.propTypes = {
    datalist:PropTypes.array.isRequired,
    removeItem:PropTypes.func,
    index:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}

// 组件props默认值
TodoContent.defaultProps = {
    index: 0,
    // datalist:[]
}

export default TodoContent