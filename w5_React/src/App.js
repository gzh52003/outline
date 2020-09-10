import React from 'react';

import Home from './pages/Home.jsx'
import TodoList from './components/TodoList/'
import Lifecycle from './components/Lifecycle'

// function App(){
//     return <div>
//         {/* <TodoList /> */}

//         <Lifecycle/>
        
//     </div>
// }

class App extends React.Component{
    state = {
        show:true,
        username:'laoxie',
        age:18
    }
    render(){
        return (
            <div>
                {
                    this.state.show ? 
                    <Lifecycle username={this.state.username}/>
                    :
                    <div>div</div>
                }
                <button onClick={()=>{
                    this.setState({
                        show:!this.state.show
                    })
                }}>App按钮：切换组件</button>
                <button onClick={()=>{
                    this.setState({
                        username:this.state.username+'-plus'
                    })
                }}>修改username:{this.state.username}</button>
                <button onClick={()=>{
                    this.setState({
                        age:this.state.age+1
                    })
                }}>修改age:{this.state.age}</button>
            </div>
        )
    }
}

export default App;