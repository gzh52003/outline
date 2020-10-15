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