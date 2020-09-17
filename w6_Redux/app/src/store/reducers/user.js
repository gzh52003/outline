const initState = {
    username:'xx',
    role:'admin'
}

function reducer(state=initState,action){
    switch(action.type){
        case 'login':
            return action.user;
        case 'logout':
            return {}
        default:
            return state;
    }
}

export default reducer;