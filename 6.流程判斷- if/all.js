let todayDegree = 20;
let isWearJecket = 15>=todayDegree;
//條件式 true
if(isWearJecket){
    console.log("小美穿著外套");
    console.log("他準備出門了");
}else{
    console.log("小美因為太熱，所以不穿外套");
}

//小名想吃陽春麵，價格為110(noodlePrice)，
//但他不確定錢包剩下多少錢(moneyInWallet)，
//如果有80元就吃麻醬麵
//有35元就吃薯條
//於是打開錢包決定，不夠就回家吃飯
let moneyInWallet = 30;
if(moneyInWallet>=110){
    console.log("小明吃了一碗陽春麵");
}else if(moneyInWallet>=80){
    console.log("小明吃麻醬麵"); 
}else if(moneyInWallet>=35){
    console.log("小名吃薯條")
}else{
    console.log("小明回家吃飯");
}

//小華如果沒有下雨就不會帶雨具
//如果下毛毛雨，他會帶輕便雨衣
//如果下小雨，他會帶折傘
//如果豪雨，他會帶長傘
let todayWeather = "毛毛雨";
if (todayWeather == "沒有下雨"){
    console.log("小華不帶雨具");
}else if(todayWeather == "毛毛雨"){
    console.log("小華帶了輕便雨衣");
}else if(todayWeather == "下小雨"){
    console.log("小華帶了摺傘");
}else if(todayWeather == "豪雨"){
    console.log("小華帶了長傘");
}else{
    console.log("其他狀態");
}
console.log("小華出門了");

let wallet = 0;
wallet+=9000;
if(wallet>=100){
    wallet-=80
}else{
    wallet-=0
}
console.log(`錢包裡有${wallet}`);
