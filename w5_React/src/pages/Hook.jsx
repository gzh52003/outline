import React,{useState} from 'react';

import UseState from '../components/Hook/UseState';
import UseEffect from '../components/Hook/UseEffect';
import UseMemo from '../components/Hook/UseMemo';
import UseCallback from '../components/Hook/UseCallback';
import UseContext from '../components/Hook/UseContext';
import UseReducer from '../components/Hook/UseReducer';

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

            <UseMemo/>
            <UseCallback/>
            <UseContext/>
            <UseReducer/>
        </div>
    )
}

export default Hook