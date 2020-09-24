/**
 * useMemo()
    * 作用：用来执行一些需要进行大量运算或花费大量时间的操作
    * 用法：useMemo(callback,[])
    * 
 */
import React, { useState, useEffect,useMemo, useCallback, useContext } from 'react';
import {useStorage} from '../../utils/hooks';

import {MyContext} from '../../store';


function UseStorage() {
    const {state,dispatch} = useContext(MyContext);
    const [currentUser,setCurrentUser] = useStorage('currentUser');

    const changeUser = useCallback(()=>{
        const newUser = {...currentUser,username:'jingjing'}
        setCurrentUser(newUser)
    },[])

    return (
        <div>
            <h1>自定义Hook之useStorage()，购物车：{state.length}</h1>
            <img src={currentUser.avatarUrl} />
            {currentUser.username}
            <button onClick={changeUser}>修改</button>
        </div>
    )
}

export default UseStorage;