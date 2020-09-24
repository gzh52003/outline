/**
 * 使用Hook实现redux的效果
    * 唯一数据源：useReducer实现redux的功能
    * 数据共享：useContext实现react-redux的功能
    * 注意事项
        * hook必须写在函数组件中
        * 组件内容传递：props.children
 */
import React, { useReducer } from 'react';

const initState = [
    { name: "goods1", price: 98, qty: 2 },
    { name: "goods2", price: 198, qty: 2 },
    { name: "goods3", price: 998, qty: 1 },
];
function reducer(state,action){
    switch (action.type) {
        case 'add':
            return [action.goods, ...state];
        case 'remove':
            return state.filter(item => item.name != action.name);
        case 'changeQty':
            return state.map(item=>{
                if(item.name === action.name){
                    item.qty = action.qty;
                }
                return item;
            })
        case 'clear':
            return [];
        default:
            throw new Error('type error');
    }
}

export const MyContext = React.createContext(null);
// export const store = useReducer(reducer,initState);

export function Provider(props){
    const [state,dispatch] = useReducer(reducer,initState);
    return (
        <MyContext.Provider value={{state,dispatch}}>
            {props.children}
        </MyContext.Provider>
    )
}

// export default MyContext