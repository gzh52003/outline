import React, { Component } from 'react';

// function TodoList(){
//     const title = 'todolist待办事项';
//     const datalist = [
//         {
//             id: 1,
//             title: '实现个小目标，月薪过万',
//             done: false, // 是否完成
//             addtime: Date.now()
//         },
//         {
//             id: 2,
//             title: '实现第二个小目标，赚他一个亿',
//             done: false,
//             addtime: Date.now() + 100
//     }];

//     const add = ()=>{
//         const newData = {
//             id:datalist.length+1,
//             title:'xxx',
//             done:false,
//             addtime:Date.now()
//         }

//         datalist.unshift(newData);

//         console.log('datalist=',datalist);
//     }

//     return (
//         <div>
//             <h1>{title}</h1>
//             <div className="todo-form">
//                 <input type="text" />
//                 <button onClick={add}>添加</button>
//             </div>
//             <table style={{width:'100%'}} className="todo-content">
//                 <thead>
//                     <tr>
//                         <th>#</th>
//                         <th>待办事项</th>
//                         <th>是否完成</th>
//                         <th>操作</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         // [{},{}] -> [<tr></tr>,<tr></tr>]
//                         datalist.map((item,idx)=>{
//                             return (
//                                 <tr key={item.id}>
//                                     <td>{idx+1}</td>
//                                     <td>{item.title}</td>
//                                     <td>{item.done ? '是':'否'}</td>
//                                     <td>
//                                         <button>完成</button>
//                                         <button>删除</button>
//                                     </td>
//                                 </tr>
//                             )
//                         })

//                     }
//                 </tbody>
//             </table>
//             <div className="todo-status">
//                     总数：{datalist.length}, 完成：{datalist.filter(item=>item.done).length}，未完成：{datalist.filter(item=>!item.done).length}
//             </div>
//         </div>
//     )
// }

// 类组件（状态组件）
class TodoList extends Component {
    constructor() {
        super(); // 执行父类后才能继承父类属性，之后才能使用this

        // 给当前组件添加状态
        this.state = {
            keyword:'laoxie',
            title: 'todolist待办事项',
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

        // 改变自定义函数this指向（推荐）
        this.add = this.add.bind(this)
        this.changeKeyword = this.changeKeyword.bind(this)
    }
    // 添加自定义方法：默认没有this指向
    // 这里添加的方法会自动成为原型的方法
    add(){
        const {datalist,keyword} = this.state;
        const newData = {
            id:datalist.length+1,
            title:keyword,
            done:false,
            addtime:Date.now()
        }
        console.log(this)
        // this.state.datalist.unshift(newData) // 不同于Vue的getter&setter，直接修改state数据无法刷新页面
        this.setState({
            datalist:[newData,...datalist]
        })
    }

    changeKeyword(e){
        this.setState({
            keyword:e.target.value
        })
    }

    render() {
        console.log('App=',this)
        const { datalist, title,keyword } = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <div className="todo-form">
                    <input type="text" value={keyword} onChange={this.changeKeyword} />
                    <button onClick={this.add}>添加</button>
                </div>
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
                            // [{},{}] -> [<tr></tr>,<tr></tr>]
                            datalist.map((item, idx) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{idx + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.done ? '是' : '否'}</td>
                                        <td>
                                            <button>完成</button>
                                            <button>删除</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                <div className="todo-status">
                    总数：{datalist.length}, 完成：{datalist.filter(item => item.done).length}，未完成：{datalist.filter(item => !item.done).length}
                </div>
            </div>
        )
    }
}
export default TodoList;