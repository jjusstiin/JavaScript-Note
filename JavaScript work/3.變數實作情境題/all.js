//第一題
//媽媽請小明買水果，至少要三樣水果，最多不可超過150元：
const list = document.querySelector('.list');
let data =[
    {
        name: "apple",
        price: 50
    },
    {
        name: "mango",
        price: 30
    },
    {
        name: "guava",
        price: 30
    },
    {
        name: "banana",
        price: 20
    },
    {
      name: "papaya",
        price: 40
    }
]
let newList = [];
let space = [];
let num =0;
content =''
data.forEach(function(item,index){
    if(index == 0){
        item.amount = 1;
        newList.push(item);
    }
    if(index > 0){
        item.amount = 1;
        newList.push(item);
        space.forEach(function(item){
            let c = (2**index)-1;
            newList.push({
                name : newList[c-item].name+","+newList[c].name,
                price : newList[c].price+newList[c-item].price,
                amount : newList[c].amount+newList[c-item].amount
            });
            num+=1;
            space.push(num);
        })
    }
    num+=1;
    space.push(num);
})
console.log(space);
console.log(newList);
let str='';
newList.forEach(function(item,index){
    if(item.price<=150 && item.amount>=3){
        str += `<li>{${item.name},${item.price}元,${item.amount}}</li>` 
    }
})
list.innerHTML = str;
//至少要三樣水果，最多不可超過150元，有幾種組合
//請依提示幫小明買水果，並印出水果金額
//範例 cost = papayaPrice*1 + applePrice*1 + bananaPrice*1;

//第二題
//媽媽請小明回程的路上記得去雜貨店買醬油1瓶、鹽1包，雜貨店老闆心血來潮幫小明打了九折，小明有200元：
const soySaucePrice = 80;
const saltPrice = 40;
let sale = 0.9;
let mingMoney = 200;

//請幫小明算出還剩下多少錢，並印出結果
mingMoney = mingMoney-(soySaucePrice+saltPrice)*sale;
console.log(`小明還剩${mingMoney}元`);

//第三題
//情境題
//農夫種了12顆高麗菜
//早上賣掉了2顆高麗菜
//中午賣掉了3顆高麗菜
//晚上又種了1顆高麗菜
let cabbageNum = 12;
//請依早、中、晚的順序去記算高麗菜數量，並使用 console.log 印出最終數量
cabbageNum -= 2;
cabbageNum -= 3;
cabbageNum += 1;

console.log(`農夫的高麗菜剩下${cabbageNum}顆`)