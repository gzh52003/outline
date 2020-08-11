(async ()=>{
    const authorization = localStorage.getItem('authorization');
    console.log('auth=',authorization)
    if(!authorization){
        location.href = '../login.html'
    }else{
        // 校验token的有效性

        const result = await fetch(`http://localhost:2003/api/jwtverify?authorization=${authorization}`).then(res => res.json());

        if (result.code === 0) {
            localStorage.removeItem('authorization');
            location.href = '../login.html'
        } 
    }

})();