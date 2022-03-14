// 用這個做註解給開發人願使用
let a=0;
let b=0;
a = a+1; //a+=1相同意思加減乘除都可以
a+=2;//等於a+2
b= a+1;
a--;//等於a-1

alert(a);
console.log(a,b); //console上方顯示變數數值
console.log(b); //彈跳題性視窗顯示變數數值
typeof (a); //告知變數的型態為何

//想知道自己還剩下幾根薯條
let friesNum=0;
//紀錄數薯條的數量
friesNum+=1;
friesNum+=1;
friesNum+=2;
friesNum+=2;
//顯示最後薯條的數量
console.log(friesNum);

