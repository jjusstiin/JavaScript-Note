//map處理成新陣列
const arr = [1,5,10];
const newArr = arr.map(item => item*item);
console.log(newArr);

const data = [1,8,13,20];
const newData = data.map(function(item){
    let obj ={};
    obj.checkNum = item >10
    return obj})
console.log(newData);

// 宣告
const words = ['a', 'b', 'c'];

// 設定值
words[0] = 'd';

// 取值
console.log(words[0]);

// 轉換
 // a->b->c->
console.log(words.map(word => words + '->'));