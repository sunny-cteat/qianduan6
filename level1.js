//方法一
let [a,b,c,d,e]= [-4, -1, 0, 3, 10];
let arr_1=[a*a, b*b, c*c, d*d, e*e];//解构赋值并平方
arr_1.sort((a,b) => {
    return a-b
})//排序
console.log(arr_1);


//方法二
let arr_2=[-4, -1, 0, 3, 10];
// 把数组平方
function squireArr(arr_2){
    return arr_2.map(function(a){return a*a});
}
var arr2 = squireArr(arr_2);
// 数组排序
 var result=arr2.sort((a,b) => {
     return a-b
 });
 console.log(result);