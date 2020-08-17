var datalist = [{
    name:'goods1',
    price:1998
},{
    name:'good2',
    price:998
}];

console.log(datalist);

// 这里的export就是给模块对象添加属性
// default为默认属性，在导入时可以不写花括号
export default datalist;

export var name="list";
export function getData(){
    return datalist;
}
export function setName(newName){
    name = newName;
}
export {
    datalist as data
}