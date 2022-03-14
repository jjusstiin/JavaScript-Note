let gender = "male";
let waistline = 80;
if(gender=="male"){
    console.log("男生");
    if(waistline>90){
        console.log("男生體型過胖");
    }else{console.log("男生體型正常");}
}else if(gender=="female"){
    console.log("女生");
    if(waistline>80){
        console.log("女生體型過胖");
    }else{console.log("女生體型過胖");}
}else{
    console.log("搞笑喔")
}
console.log("END");

let passersbyBodyTemperture = 36.5;
if(passersbyBodyTemperture>=37.5){
    console.log("不得進入");
}else{console.log("歡迎光臨~~");
}
console.log('END');

let mingScore = 100;
if(mingScore>=80 && mingScore<=100){
    console.log("矮油，優秀喔~");
}else if(mingScore>=60 && mingScore<=79){
    console.log("不錯拉，但就普通");
}else if(mingScore<60 && mingScore>=0){
   console.log("再見，不及格"); 
}else{console.log("無法判定");}
console.log("END");

let kk = " 123 ";
console.log(kk);
console.log(kk.trim());
console.log(typeof(kk));
kk = parseInt(kk);
console.log(typeof(kk));
kk = kk.toString();
console.log(typeof(kk));

