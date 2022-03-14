let c='Justin';
let d='你好嗎?'
let e="Let's go"// "" ''都可以用來宣告字串
let  total=c+" (空白鍵) "+d
console.log(total+"   "+e);
console.log(typeof total);

let myName = "大美";
let weight = 45;
let weight2 = parseInt("H") //parseInt 數字字串型態轉為數字型態，注意Int I大寫
let total2 = myName+weight;
console.log(typeof total2);
console.log(total2);
console.log(typeof weight2);
console.log(weight2); //出現NaN not a number
console.log("我體重"+weight+"公斤,我是"+myName);

let myEmail = " mark ";
myEmail = myEmail.trim();//清除前後空白鍵
console.log(myEmail.length);//length計算字元數，空白鍵也會被算入
