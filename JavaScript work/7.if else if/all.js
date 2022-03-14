//雅萱是上班族，每次領薪水時，都要再扣勞保費跟健保費，請幫雅萱算出她的薪資級距要扣減多少錢：
//級距一：24000 ~ 25199，扣勞保552元、健保372元。
//級距二：25200 ~ 26399，扣勞保579元、健保391元。
//級距三：26400 ~ 27599，扣勞保607元、健保409元。
//級距四：27600 ~ 28799，扣勞保635元、健保428元。
let wangShuanMoney = 26800;
let laborIsurancePrice;
laborIsurancePrice = [552,579,607,635]
let healthIsurancePrice;
healthIsurancePrice = [372,391,409,428]
//印出雅萱實領薪水
if(24000<=wangShuanMoney && wangShuanMoney<=25199){
    wangShuanMoney = wangShuanMoney-laborIsurancePrice[0]-healthIsurancePrice[0];
}else if(25200<=wangShuanMoney && wangShuanMoney<=26399){
    wangShuanMoney = wangShuanMoney-laborIsurancePrice[1]-healthIsurancePrice[1];
}else if(26400<=wangShuanMoney && wangShuanMoney<=27599){
    wangShuanMoney = wangShuanMoney-laborIsurancePrice[2]-healthIsurancePrice[2];
}else if(27600<=wangShuanMoney && wangShuanMoney<=28799){
    wangShuanMoney = wangShuanMoney-laborIsurancePrice[3]-healthIsurancePrice[3];
}
console.log(`雅萱實領薪水為${wangShuanMoney}元`);

