//&&(and) ||(or)
//&&練習 是vip 並且消費滿500，並有買到指定商品"蛋糕"
let isVip = true;
let cost = 400;
let buyCake = true;
console.log(isVip == true && cost >= 500 && buyCake == true);
//||練習 冰箱有米或蘋果，小朋友就願意進食
let haveRice = false;
let haveApple = false;
let haveMilk = true;
console.log(haveRice == true || haveApple == true || haveMilk == haveMilk);

let a = 2;
let b = 3;
console.log(a>b);
console.log((a+b)>1);
console.log(a=b);//答案為3

let c = 4;
let d = 3;
console.log(c==d);

let e = 8;
let f = 5;
console.log(f>=e);
console.log(f!=e);

let k = 2>1;
console.log(k==true);
let isWakeUp = false;
console.log(isWakeUp==false);

//一個 = 賦予值的意思 
//兩個 ==  !=比較運算子 字串布林值適用，但是會協助轉型
//三個 === !==會比較也會看型別
let l = 1;
let m = "1";
console.log(l=m);//答案為"1"，讓l重新賦予值了，string型別
console.log(l==m);//答案為true，==會協助轉型
console.log(l===m);//答案為false，會比較型別
