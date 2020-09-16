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
        case 'showmenu':
            return {
                ...state,
                showMenu:action.show
            }
        

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;