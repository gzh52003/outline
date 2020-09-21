/**
 * useContext()
    * 作用：简化Consumer传统写法
    * 用法：useContext()
    * 
 */
import React, { useState, useEffect,useMemo,useContext } from 'react';
import MyContext from '../../context'

const callbackList = []

function UseContext() {
    const user = useContext(MyContext);
    
    console.log('user=',user)
    return (
        <div>
            <h1>useContext()</h1>

            {/* 传统写法 */}
            {/* <MyContext.Consumer>
                {
                    value=>{
                    return <div>{value.username}</div>
                    }
                }
            </MyContext.Consumer> */}
           {user.username} - {user.password}
        </div>
    )
}

export default UseContext;