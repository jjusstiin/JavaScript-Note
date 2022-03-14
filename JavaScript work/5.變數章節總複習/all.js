//題目一  請問以下變數的值、型別分別為何？
let a = 1 + "我好棒"; //1我好棒 string
let b = 1 * "我好棒"; //Nan
let c = 2 > 1; //true boolean
let d = 1 < 2;//false boolean
let e;//undefined
console.log(a,b,c,d,e);
console.log(typeof a,typeof b,typeof c,typeof d,typeof e);

//題目二  請利用賦值運算子計算冰箱布丁剩餘數量
//情境題 布丁剩多少？
//冰箱裡原有 15 顆布丁
//被妹妹拿走了 3 顆
//被姊姊拿走了 5 顆
//媽媽又冰了 10 顆
//弟弟拿走了 2 顆

//請透過此變數進行運算
let puddingNum = 15;
let take =[
    { 
        who : "littleSister",
        took : -3
    },
    {
        who : "bigSister",
        took : -5
    },
    { 
        who : "mom",
        took : 10
    },
    { 
        who : "littleBrother",
        took : -8
    }]
let taken = 0;
take.forEach(function(item,index){
    taken += item.took;
})
puddingNum = puddingNum+taken;
console.log(`布丁還有${puddingNum}顆`)

//題目三  小美去飲料店買了很多飲料，但她數學不好，請利用以下步驟幫小美算出購買總額
//1 杯紅茶 30 元 
//小美買了 2 杯 
//她將紅茶數量 * 紅茶價格，算出 60 元
//1 杯綠茶 25 元
//小美買了 4 杯
//她將綠茶數量 * 綠茶價格，算出 ?? 元
//1 杯奶茶 50元
//小美買了 6 杯
//她將奶茶數量 * 奶茶價格，算出 ?? 元
//帳單從零開始計算
let bill = 0 ;
const blackTeaPrice = 30;
let blackTeaNum = 2;
const greenTeaPrice = 25;
let greenTeaNum = 4;
const milkTeaPrice = 50;
let milkTeaNum = 6;
bill = blackTeaPrice*blackTeaNum+greenTeaPrice*greenTeaNum+milkTeaPrice*milkTeaNum;
console.log(bill);
//請接續步驟指引4，協助小美算出帳單金額

//題目四  請協助以下字串與數字轉型、過濾空白
let number = "123";//將 number 轉型為數字
let string = 123;//將 string 轉型為字串
let myEmail ="  1235487@gmail.com";//請將 myEmail 的空白過濾掉
number = parseInt(number);
console.log(number,typeof number);
string = string.toString();
console.log(string,typeof string);
console.log(myEmail.trim());






console.log(`小美總共花了${bill}元`)