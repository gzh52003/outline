import React from 'react';

function TodoStatus({total,done,undone}) {
    return (
        <div>
            总数：{total}，
            完成：{done}，
            未完成：{undone}
        </div>
    )
}

export default TodoStatus