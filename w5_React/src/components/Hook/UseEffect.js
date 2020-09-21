/**
 * useEffect()
    * 作用：能实现类组件中生命周期函数的功能
    * 用法：useEffect(callback,依赖)
    * 
 */
import React, { useState, useEffect } from 'react';


function UseEffect() {
    const [num, changeNum] = useState(1);
    const [qty, changeQty] = useState(5);

    // 没有指定依赖：实现componentDidMount+componentDidUpdate的效果
    useEffect(function () {
        // 这里的代码在数据挂载后执行，在此可执行ajax请求，dom操作等
        console.log('useEffect');

        // console.log(document.querySelector('h1'))
    });

    // 指定空依赖：实现componentDidMount的效果
    useEffect(function () {
        // 这里的代码在数据挂载后执行，在此可执行ajax请求，dom操作等
        console.log('空依赖');

        // console.log(document.querySelector('h1'))
    },[]);

    // 自定义依赖：实现shouldComponentUpdate的效果
    // 有qty有更新时，才执行这里的代码
    useEffect(function () {
        // 这里的代码在数据挂载后执行，在此可执行ajax请求，dom操作等
        console.log('useEffect.qtyChange');

        // console.log(document.querySelector('h1'))
    },[qty]);

    // 指定返回值：实现componentWillUnmount的效果
    useEffect(function () {
        // 这里的代码在数据挂载后执行，在此可执行ajax请求，dom操作等
        console.log('useEffect');

        // console.log(document.querySelector('h1'))
        return function(){
            // 这里的代码在组件被销毁后执行
            console.log('指定返回值，实现componentWillUnmount的效果')
        }
    });

    return (
        <div>
            <h1>useEffect()</h1>
            <button onClick={() => {
                changeNum(num + 1)
            }}>num:{num}</button>
            <button onClick={() => {
                changeQty(qty + 1)
            }}>qty:{qty}</button>
        </div>
    )
}

export default UseEffect;