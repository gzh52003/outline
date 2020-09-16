[TOC]

## MobX

Mobx与Redux都为Flux架构的实现，Mobx是后起之秀. 以更简单的api和更少的概念, 让 flux 使用起来变得更简单.
Mobx与redux一样, 均可以在任何框架中使用, 相比 Redux, Mobx则更加简洁, 语法上更像Vuex，更符合对store 增删改查的操作概念

> 如使用装饰品模式，需配置babel插件：`["@babel/plugin-proposal-decorators", { "legacy": true }]`

### 安装
```bash
    npm install --save-dev mobx
    # or
    yarn add --save-dev mobx
```

### 核心概念

* Observable
创建一个被监听的对象, 被`@observable`监听的对象，可检测到对象属性的改变
```js
    import {observable} from 'mobx';

    let appState = observable({
        qty: 0
    });
```

* Reactions

* Actions
定义更改状态的函数, 我们将它称为 action
```js
    import { observable, action } from "mobx";
    action(()=>{
        appState.qty +=1  
    }
```


## Mobx-React

### 安装
```bash
    npm install --save-dev mobx-react
    # or
    yarn add --save-dev mobx-react
```

### 使用
* Observer
创建一个react组件, 它能够响应 observable 的变化, 我们将它称为 observer
```js
    import { observer } from "mobx-react";
    let App = ({ appState }) => {
        return (
            <div className="App">
                <h1>Time passed: {appState.timer}</h1>
            </div>
        );
    };
    App = observer(App);
```


## ES6 Proxy
> 格式：new Proxy(target,interceptor) [浏览器支持情况](https://caniuse.com/#search=proxy)

proxy在目标对象的外层搭建了一层拦截，外界对目标对象的某些操作，必须通过这层拦截

```js
    const laoxie = {
        username: 'laoxie',
        password: 123
    };
    const interceptor = {
        get: function(target, key) {
            console.log(`${key} 被读取`);
            return target[key];
        },
        set: function(target, key, value) {
            console.log(`${key} 被设置为 ${value}`);
            target[key] = value;
        }
    }
    const test = new Proxy(laoxie, interceptor);
    
    test.name; // name 被读取
    test.password = 123456; // name 被设置为 123456
    
    console.log(laoxie.name); // 不进入拦截

```

* 可拦截新增属性
```js
    // 添加gender属性
    test.gender = 'male'; // gender 被设置为 male
```

* 设置私有属性
```js
    const laoxie = {
        username: 'laoxie',
        password: 123,
        _age:18
    };
    const interceptor = {
        get: function(target, key) {
            if(key.startsWith('_')){
                console.log(`不能读取私有属性${key}`)
                return false
            }
        },
        set: function(target, key, value) {
            if(key.startsWith('_')){
                console.log(`不能修改私有属性${key}`)
                return false
            }
        }
    }
    const test = new Proxy(laoxie, interceptor);
    
    test._age; // 不能读取私有属性_age
    test._age = 30; // 不能修改私有属性_age
```