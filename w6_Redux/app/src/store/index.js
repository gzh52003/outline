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
import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducers'

import { composeWithDevTools } from 'redux-devtools-extension';

// const initState = {
//     currentUser:{},
//     showMenu:true,
// }

// // reducer必须为纯函数
// // dispatch({type:'changeUser',user})
// // dispatch({type:'changeMenu'})
// const reducer = function(state=initState,action){
//     console.log('reducer=',state,action);
//     switch(action.type){
//         case 'login':
//         return {
//             ...state,
//             currentUser:action.user
//         }
//         case 'logout':
//             return {
//                 ...state,
//                 currentUser:{}
//             }
//         case 'showmenu':
//             return {
//                 ...state,
//                 showMenu:action.show
//             }
        

//         default:
//             return state;
//     }
// }

import mysaga from './saga';

// saga使用步骤1：引入saga
import createSagaMiddleware from 'redux-saga';


// saga使用步骤2: 创建saga中间件
const sagaMiddleware = createSagaMiddleware();


// 2. 创建仓库

// saga使用步骤3：把saga中间件与store进行结合
let enhancer = applyMiddleware(sagaMiddleware);

enhancer = composeWithDevTools(enhancer);

// enhancer = compose(enhancer,composeWithDevTools())
const store = createStore(reducer,enhancer);

// saga使用步骤4：运行 Saga配置
sagaMiddleware.run(mysaga);


export default store;

// 3. 使用
// 获取：store.getState()
// 修改：store.dispatch(action)
// 监听：store.subscribe(fn)