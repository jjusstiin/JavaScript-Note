//函式陳述式
function numA (x){
    return x * x;
}
console.log(numA(3));//放哪裡都可以找到函式

//函式表達式
const numB = function(x){
    return x * x;
}
console.log(numB(4));//因為適用便是軒高,只能放在宣告後面才讀的到函式

//箭頭函式
const numC = (x,y) => {
    const a =3
    const b = 4
    return a*b*x*y;
}
console.log(numC(4,5));


//縮寫寫法
const num = (x) =>`數字相乘${x*x}`;
console.log(num(3));

const data = [1,8,13,20];
const newData = data.map(item=>item+3)
console.log(newData);