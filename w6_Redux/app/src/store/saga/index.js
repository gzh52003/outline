/**
 * Saga配置
 * 使用ES6新特性：Generator
 */

import {takeEvery,takeLatest,put,apply,call} from 'redux-saga/effects';
import request from '@/utils/request'

// 单元测试
 function* getUser(action){
     console.log('getUser=',action);// {type:'update_user_async'}
    // const {data} = yield request.get('/user/'+action.userid);
    const {data} = yield call(request.get,'/user/'+action.userid)
    console.log('user=',data);

    // put就是dispatch
    yield put({type:action.type.replace('_async',''),user:data})
 }

 function * getNewIQ(){

 }

 function* init(){
   // 监听用户dispatch操作
   console.log('init');
   yield takeLatest('update_user_async',getUser)
   yield takeLatest('get_newiq_async',getNewIQ)
 }

 export default init;