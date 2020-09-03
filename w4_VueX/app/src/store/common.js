const common = {
    state:{
        showTabbar:true
    },
    getters:{
        test(){
            return 'common';
        }
    },
    mutations:{
        displayTabbar(state,payload){
            state.showTabbar = payload;
        }
    },
    actions:{

    }
}

export default common;
