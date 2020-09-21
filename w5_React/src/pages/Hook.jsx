import React,{useState} from 'react';

import UseState from '../components/Hook/UseState';
import UseEffect from '../components/Hook/UseEffect';

function Hook(){
    const [show,changeShow] = useState(true)
    return (
        <div>
            <h1>Hook测试</h1>
            <UseState />
            {
                show ? 
                <UseEffect/>
                :
                <div>UseEffect被干掉</div>
            }

            <button onClick={()=>{
                changeShow(!show)
            }}>显示隐藏UseEffect组件</button>
        </div>
    )
}

export default Hook