/**
 * useCallback()
    * 作用：
    * 用法：useCallback(callback,[])
    * 
 */
import React, { useState, useEffect,useMemo,useCallback } from 'react';

const callbackList = []

function UseCallback() {
    const [num,changeNum] = useState(1);
    const [qty,changeQty] = useState(1);
    
    // const handleNum = function(){
    //     changeNum(num+1)
    // }

    // 不加依赖：等效于传统写法（以上代码）
    // const handleNum = useCallback(function(){
    //     changeNum(num+1)
    // })

    // 空依赖：
    // const handleNum = useCallback(function(){
    //     
    // },[])

    const handleNum = useCallback(function(){
        changeNum(num+1)
    },[num])

    // 每次更新组件，会创建一个函数
    const handleQty = function(){
        changeQty(qty+1)
    }

    callbackList.push(handleNum);
    console.log(callbackList, callbackList[0] === callbackList[1])


    // 使用useMemo实现useCallback的功能
    // const handleNum = useMemo(function(){
    //     return function(){
    //         changeNum(num+1)
    //     }
    // },[num])
    return (
        <div>
            <h1>useCallback()</h1>
            
            <button onClick={handleNum}>num:{num}</button>
            <button onClick={handleQty}>qty:{qty}</button>
        </div>
    )
}

export default UseCallback;