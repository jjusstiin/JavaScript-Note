const arr = [1,5,10,20,30,40];

//find 只找到第一筆資料
const newArr = arr.find(function(item){
    console.log(item);
    return item>=5;
})
console.log(newArr);

//filter 取出有符合 的陣列資料
const newData = arr.filter(function(item){
    return item>=5;
})
console.log(newData);


//find 值提取出來
//findIndex 索引 編號
const data = ['red','green','black'];
const dData = data.find(function(item){
    return item == 'black';
})
console.log(dData);

const blackIndex = data.findIndex(function(item){
    return item == 'black';
})
console.log(blackIndex);

const orders = [
    {
        name : '小廖',
        orderId:'123724656'
    },
    {
        name : '小華',
        orderId:'123324656'
    },
    {
        name : '小天',
        orderId:'123524656'
    },
];

const huaId = orders.findIndex(function(item){
    return item.orderId == '123324656';
})
console.log(huaId);
console.log(`這個訂單編號是${orders[huaId].name}`);