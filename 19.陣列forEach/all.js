let data = [30,40];

data.forEach(function(item,index,array){
    console.log(item,index,array);
})
//呈現30 0 [30,40]
//   40 1 [30,40]
console.log(data.length);

let data1 = [30,40,50,213,435,3452,12346,1234,45,123,56576,23412,'dfgfd',235346,'fgbc','dafd',435,'dfh234',2345634];
//累加
let total = 0;
let array = [];
let newData=[];
data1.forEach(function(item,index){
    if(typeof item == 'number'){
    total+=item;
    array.push(item);
    }
})
console.log(total);
console.log(array);
//篩選出偶數
let totalOfEven = 0;
data1.forEach(function(item,index){
    if(item%2==0){
        totalOfEven+=1;
        newData.push(item);
    }
})
console.log(totalOfEven);
console.log(newData);

let data2 = [
    {
        name:'Tom',
        sex:'male'
},
{
    name:'Marry',
    sex:'famale'
}
];
data2.forEach(function(item,index){
    console.log(item.name);
})