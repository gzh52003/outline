import { observable } from 'mobx'

const userStore = observable({
    userInfo:{
        username:'jingjing',
        password:'12345',
    },
    login(user){
        // this.username = user.username;
        // this.password = user.password;
        // Object.assign(this,user);
        this.userInfo = user;
    },
    logout(){
        this.userInfo = {}
    }
})

export default userStore;