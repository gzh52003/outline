/**
 * redux核心概念
    * store
    * reducer   state的修改逻辑
        * 参数
            * state
            * action
    * action
        * 格式：{type:''}
 */
// 1. 引入reduxt
import {createStore} from 'redux';

const initState = {
    currentUser:{},
    showMenu:true,
}

// reducer必须为纯函数
// dispatch({type:'changeUser',user})
// dispatch({type:'changeMenu'})
const reducer = function(state=initState,action){
    console.log('reducer=',state,action);
    switch(action.type){
        case 'login':
        return {
            ...state,
            currentUser:action.user
        }
        case 'logout':
            return {
                ...state,
                currentUser:{}
            }
        case 'showmenu':
            return {
                ...state,
                showMenu:action.show
            }
        

        default:
            return state;
    }
}

// 2. 创建仓库
const store = createStore(reducer);

export default store;

// 3. 使用
// 获取：store.getState()
// 修改：store.dispatch(action)
// 监听：store.subscribe(fn)