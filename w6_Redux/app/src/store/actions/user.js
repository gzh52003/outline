export function login(user){
    return {
        type:'login',
        user
    }
}

export function logout(){
    return {
        type:'logout'
    }
}

export default {
    login,
    logout
}