let myEmail = ' Justin ';
myEmail = myEmail.trim();//去除字串前後空白鍵
let updateEmail = myEmail.trim();
let nameLength = updateEmail.length;// .length顯示字串長度
console.log(myEmail);
console.log(updateEmail);
console.log(nameLength);
console.log(myEmail.trim());

let myName = "Justin";
let myAge = 26;
let content = "您好我是"+myName+"，今年"+myAge+"歲。";
let content2 = `您好我是${myName}，今年${myAge-10}歲。`; //可以用 `` 來輸入，並可在裡面做運算 //`裡面可以放文字${裡面可以做運算使用}`
console.log(content);
console.log(content2)