/**
 * useReducer()
    * 作用：实现简单版redux的功能，在组件间实现数据共享
    * 用法：const [state,dispatch] = useReducer(reducer,initState)
    * 
 */
import React, { useState, useEffect,useCallback,useReducer, useMemo } from 'react';

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

function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initState);
    const clearCart = useCallback(function(){
        const action = {type:'clear'}
        dispatch(action)
    },[]);

    const add2cart = useCallback(function(){
        // 判断是否存在
        // 存在：修改数量
        // 否则：添加商品
        const action = {type:'add',goods:{ name: "goods"+(state.length+1), price: 98, qty: 1 }}
        dispatch(action)
    },[state]);

    // 计算总价
    const total = useMemo(()=>{
        return state.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[state]);


    // 删除商品
    const removeItem = useCallback(function(name){
        const action = {type:'remove',name}
        dispatch(action)
    },[])

    return (
        <div>
            <h1>useReducer()</h1>
            <ul>
                {
                    state.map(item=><li key={item.name}>
                        <h4>{item.name}</h4>
                        <p className="price">{item.price} &times; {item.qty}</p>
                        <button onClick={removeItem.bind(null,item.name)}>删除</button>
                    </li>)
                }
            </ul>
            <div style={{textAlign:'right'}}>总价：{total}</div>
            <button onClick={clearCart}>清空购物车</button>
            <button onClick={add2cart}>添加</button>

        </div>
    )
}

export default UseReducer;