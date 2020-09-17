// 刷新时，先从locastorage中获取用户信息
let currentUser = localStorage.getItem('currentUser'); // null
try{
    currentUser = JSON.parse(currentUser) || {};
}catch(err){
    currentUser = {}
}

const initState = {
    ...currentUser
}

function reducer(state=initState,action){
    switch(action.type){
        case 'login':
            localStorage.setItem('currentUser',JSON.stringify(action.user))
            return action.user;
        case 'logout':
            localStorage.removeItem('currentUser')
            return {}

        // {type:'update_user',user}
        case 'update_user':
            return {
                ...state,
                ...action.user
            }
        default:
            return state;
    }
}

export default reducer;