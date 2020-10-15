/*
    Typescript
        > 在编译阶段进行类型校验
        * 类型注解和类型检查
            string
            number
            boolean
            null
            undefined
            enum
            symbol
            void
            any 任意类型：变量如果在声明的时候，未指定其类型，那么它会被识别为any类型
*/

// 类型注解和类型检查
var username:string = 'jingjing';

// 类型推论：ts会把赋值给变量的数据类型作为变量的类型
var qty = 100;
var data:any = 10;

username = '100';
// qty = '10086'
data = 'data';


// 联合类型：一个变量可以支持多种类型
var age:number|string = 18
age = '20';

// 类型别名
type ns = number|string;
var page:ns = 1;
var size:ns = 10;
page = '5'

// 注意：声明变量不指定类型也不赋值，变量类型为any
var password;

password = 123456;
password = '123456'


/**
 * 对象类型校验
    * 接口 interface： 一般用于对象类型校验
        * 可选属性：?
        * 只读属性：readonly 
        * 任意属性：允许给对象添加其他属性
 */ 
// 
interface IPerson{
    // 指定对象的属性和类型
    username:string,
    readonly age?:number, 
    gender:string,
    [propName: string]: any;
}
var jj:IPerson = {
    username:'jingjing',
    gender:'女',
    // age:36
}

var lx:IPerson = {
    username:'laoxie',
    age:18,
    gender:'男'
}

lx.role = 'admin';


/**
 * 数组类型校验
    * 类型+[]
    * 泛型: Array<number>
 */
interface IGoods{
    name:string,
    price:number,
    oldPrice?:number,
    imgurl:string,
    id:number|string,
}
const userlist:string[] = ['laoxie','jingjing','xiaoxie','tiantian']
const numberlist:Array<number> = [10,20,30];
const goodslist:Array<IGoods> = [{
    name:'iphone12',
    price:6999,
    imgurl:'../img/iphone12.jpg',
    id:1
},{
    name:'huawei mate40 pro',
    price:5999,
    oldPrice:6999,
    imgurl:'../img/mate40.jpg',
    id:2
}]

/**
 * 元组：元素类型不同的数组
 */
let arr:[number,number,string] = [10,20,'h5']


/**
 * 函数类型校验
    * 声明式函数
        * 参数
        * 返回值
    * 赋值式函数
 */

 interface IData{
     page?:number,
     size?:number,
     category?:string
 }
 interface IReturnData{
     code:number,
     data:Array<IGoods>,
     msg:string,
     get?:()=>IGoods, // 指定get为一个方法
 }

 function getData(url:string,data?:IData):IReturnData{
     // ajax
    return {
        code:1,
        data:[],
        msg:'succes'
    }
}

const result1 = getData('/list')
const result2 = getData('/list',{page:2})

// 无返回值函数
function getData2(url:string):void{
    
}

const getData3:(url:string,page:number,size:number)=>void = function(url:string,page:number=1,size:number=10):void{

}


/**
 * 泛型编程
 * 好处：可扩展行更强
 */
function getUser(arg:string):string{
    return arg
}

// T为类型变量number,string
function getUser2<T>(arg:T):T{
    return arg
}

getUser('laoxie');// laoxie
getUser2(100);
getUser2('laoxie');


/**
 * class类
 */

 class Component{
    // 公有方法：可以在任意位置访问
    public getData(){
        this.changeData();
        this.username;//
    }

    // 私有方法：只能在内部访问
    private  changeData(){

    }

    // 受保护的属性/方法：只能在当前类和子类中访问
    protected name:string = 'component'

    // 实例属性
    username:string = 'laoxie'
    // 静态属性/方法
    static username:string = 'jingjing';
 }
 const com = new Component()
 com.getData()
//  com.changeData();
com.username; // laoxie
Component.username;//jingjing

 class Home extends Component{
    render(){
        this.username;
    }
 }


 const home = new Home();
 home.getData();
 home.changeData()