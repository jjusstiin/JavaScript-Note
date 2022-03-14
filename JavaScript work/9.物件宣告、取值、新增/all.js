//使用.點記法
let obj = {
    myName:'王小花',   
};

//讀取物件屬性
console.log(obj.myName)//王小花

//新增物件屬性
obj.key = 'value';
console.log(obj)//{myName: "王小花", key: "value"}
//使用[]括弧記法
//通常情況下會使用.取值，但某些情況無法用.取值，例如屬性為數字開頭時，或要讀取變數的情況下皆會使用[]。
let obj1 = {
    myName:'王小花',   
};
//讀取物件屬性
console.log(obj1['myName']);//王小花

//新增物件屬性
obj1['key'] = 'value';
console.log(obj1);//{myName: "王小花", key: "value"}

//讀取變數的情況
let a = 'myName';
console.log(obj1[a])//王小花

//問題一
//以下為花草茶的配方，請新增一個名為 herbalTea 的物件，並依照以下要求設定屬性:
//新增一個名為 flowers 的屬性，其值為一個陣列，裡面包含 ＂馬鞭草＂、＂粉紅玫瑰＂、＂迷迭香＂。
//新增一個名為 steepingTime 的屬性，其值為 5。
//新增一個名為 aroma 的屬性，其值為 ＂草香＂。
//新增一個名為 seasoning 的屬性，其值為一個物件，裡面包含 sugar 的屬性，其值為＂5g＂。

let berbalTea = {
    flowers : [
        "馬鞭草",
        "粉紅玫瑰",
        "迷迭香"
    ],
    steepingTime : 5,
    aroma : "香草",
    seasoning : {
        sugar : "5g"
    }
}
console.log(berbalTea);

//問題二
//請利用問題一宣告的 herbalTea 物件，嘗試透過前情提要所介紹的 2 種讀取物件方法依序輸出以下值:

//取得 flowers 陣列的第三個值 ＂迷迭香＂
console.log(berbalTea.flowers[2]);

//取得 steepingTime 的值
console.log(berbalTea.steepingTime);

//取得 aroma 的值
console.log(berbalTea.aroma);

//取得 seasoning 屬性內 sugar 的值
console.log(berbalTea.seasoning.sugar);

//在 seasoning 屬性內新增名為 milk 的屬性，值為 '100ml'
berbalTea.seasoning.milk = '100ml';
//印出 milk 屬性的值
console.log(berbalTea.seasoning.milk);