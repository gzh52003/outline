/**
 * useMemo()
    * 作用：用来执行一些需要进行大量运算或花费大量时间的操作
    * 用法：useMemo(callback,[])
    * 
 */
import React, { useState, useEffect,useMemo } from 'react';


function UseMemo() {
    const [num,changeNum] = useState(1);
    const [qty,changeQty] = useState(1);
    const total = useMemo(function(){
        console.log('计算总和')
        let total = 0;
        for(let i=1;i<=num*10000;i++){
            // 花费时间10s
            total += i;
        }
        return total
    },[num])

    return (
        <div>
            <h1>useMemo()</h1>
            总和：{total}

            <button onClick={()=>{
                changeNum(num+1)
            }}>num:{num}</button>
            <button onClick={()=>{
                changeQty(qty+1)
            }}>qty:{qty}</button>
        </div>
    )
}

export default UseMemo;