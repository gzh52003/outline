(async ()=>{
    const userInfo = document.querySelector('#userInfo');
    let currentUser = localStorage.getItem('currentUser');//{username,age,gender,authorization}
    currentUser = JSON.parse(currentUser);console.log(currentUser)

    if(!currentUser){
        location.href = '../login.html'
    }else{
        // 校验token的有效性

        const result = await fetch(`http://localhost:2003/api/jwtverify?authorization=${currentUser.authorization}`).then(res => res.json());

        if (result.code === 0) {
            localStorage.removeItem('currentUser');
            location.href = '../login.html'
        }else{
            // 显示用户信息
            userInfo.innerText = currentUser.username;
        }
    }


    // 退出
    const btnLogout = document.querySelector('#btnLogout');

    btnLogout.onclick = ()=>{
        localStorage.removeItem('authorization');
        location.href = '../login.html';
    }
})();