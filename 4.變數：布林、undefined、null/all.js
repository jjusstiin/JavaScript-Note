let isWakeUp = true;
console.log(typeof isWakeUp);
console.log(2>1);
console.log(3<2);

//undifined
//尚未被賦予值

//null
let b = 1;
let c = null;
console.log(c);//null有被賦予值，告知為空值
//原本有值，null後釋放記憶體

//字串轉數字
let a = 1;
a = parseInt(a);
console.log(a+1);

//數字轉字串
let d = 2;
d = d.toString();
console.log(d+1);
console.log(typeof d)

if(1=>0){
    console.log("nice");
}else{
    console.log("wrong");
}