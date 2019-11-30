//使用Set数据结构
let set = new Set([2, 3, 7, 5, 2, 6, 9, 7, 0]);
//将set数据元素中去重并转为数组
let arr=([...set]);
//排序并找到最大值
arr.sort((a,b) =>{
    return a-b
});
var max = arr[arr.length-1];
console.log(max);
//将数组转化为set并删除最大值
let set0=new Set(arr);
set0.delete(max);
//利用promise检验是否删除了最大值并体现在控制台上
const promise = new Promise((resolve, reject) =>{
    if('set0.delete(max)'){
        resolve(console.log('9已被成功删除'))
    }else{
        reject(console.log('数据删除时出现错误'))
    }
});

//Map数据结构
const map=new Map();
map.set('张三',13);
map.set('李四',14)
map.forEach(() =>{
    sum = map.get('张三')+map.get('李四');
})
console.log(sum);