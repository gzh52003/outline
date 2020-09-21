/**
 * useState()
    * 作用：在函数组件中使用state
    * 使用：const res = useState(initState)
    * 返回值Array：[state,changeState]
 */
import React,{useState} from 'react';

console.log('useState=',useState);

// class Test extends React.Component{
//     state = {
//         qty:0
//     }
//     changeQty = ()=>{
//         this.setState({
//             qty:this.state.qty+1
//         })
//     }
//     render(){
//         const {qty} = this.state;
//         return (
//             <div>
//                 {qty}
//             </div>
//         )
//     }
// }


function UseState(){
    const [qty,changeQty] = useState(0);
    const [username,changeUser] = useState('laoxie');

    return (
        <div>
            <h1>useState()</h1>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>qty: {qty}</button>
        </div>
    )
}

export default UseState;