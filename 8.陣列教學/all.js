//陣列
let colors =  ['red','yellow','black'];
console.log(colors);
let linLikeColor = colors[1];
console.log(linLikeColor);
console.log(colors.length);//陣列長度

let ary = [123,'haha',true];
console.log(ary[0]);
console.log(ary[1]);
console.log(ary[2]);

//寫入資料到陣列，指定覆蓋原值
let color = [];
color[0] = 'blue';
color[1] = 'red';
color[2] = 'yellow';
color[4] = 'black';
//新增 push寫入後面 unshift寫入前面
color[2] = 'pink';//覆蓋原本資料
color.push("green")//寫入資料，資料放到陣列最後面push
color.unshift('white');//寫入資料，資料放到陣列最前面unshift
//刪除 pop刪除最後 shif刪除前面
color.pop();//刪除最後一筆資料
color.shift();//刪除第一筆資料

console.log(color.length);
console.log(color[2]);
console.log(color);

//splice 刪除指定資料
//第一個數字，開始位置，陣列位置從0開始
//第二個數字，要往後刪除幾筆資料
color.splice( 1 , 2 );
console.log(color);