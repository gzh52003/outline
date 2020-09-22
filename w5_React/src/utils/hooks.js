import {useState} from 'react';
export function useStorage(key){
    let initData = localStorage.getItem(key);

    try{
        initData = JSON.parse(initData) || {}
    }catch(err){
        initData = {}
    }

    const [value,setValue] = useState(initData)

    function set(newValue){
        localStorage.setItem(key,JSON.stringify(newValue))
        setValue(newValue)
    }

    return [value,set];
}

