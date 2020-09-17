const initState = {
    showMenu:true
}

function reducer(state=initState,action){
    switch(action.type){
        case 'show_menu':
            return {
                ...state,
                showMenu:action.show
            };
        default:
            return state;
    }
}

export default reducer;