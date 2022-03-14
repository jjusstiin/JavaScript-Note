let a = 1 +"2"+ 3 ;//123 'string'
let b = "1" * "1";//1 'number'
let c = 2 - "1";//1 'number'
let d = 1 > 2;//false 'boolean'
let e = 2 > 1;//true 'boolean'
let f = "我好棒" - 1;//NaN 'number'JS自動轉換成應該可以運算的型別，但仍然不可運算所以NaN
console.log(a,typeof a);
console.log(b,typeof b);
console.log(c,typeof c);
console.log(d,typeof d);
console.log(e,typeof e);
console.log(f,typeof f);

//1
// const HexSchool = "六角";
// HexSchool = "六角學院";

//2
// const HexSchoolMail = "service@hexschool.com";
// const HexSchoolMail = "service@hexschool.com.tw";

//3
// let studentNum = 20000;
// studentNumber = 30000;

//4
// let const = const;

//5
// const 123 = 123;

//第二題回答
//1.因為 const 在原始型別不能重複賦予值
//2.因為 const 不能重複宣告
//4.因為 const 是保留字
//5.因為第一個字不可以是數字