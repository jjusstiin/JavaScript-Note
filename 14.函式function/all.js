//機器人-早起活動-起床刷牙洗臉出門
function morningAction(){
    console.log('起床');
    cleanHead();
    console.log('出門');
}

function nightAction(){
    console.log('回家');
    cleanHead();
    console.log('睡覺');
}

function cleanHead(){
    console.log('刷牙');
    console.log('刮鬍子');
    console.log('洗臉');
}
morningAction();//啟動函數
nightAction();

function a(num,num2){
    console.log(num,num2);
    console.log(`您得加總的數字為${num+num2}`);//`裡面可以放文字${裡面可以做運算使用}`
}

a(1,2);
a(3,4);
a(23,34);

//return 把值回傳回到執行函數
//return可以中斷函式的執行，後面的城市就不執行了
//國文分數+數學分數的加總計算機
function calcTotalScore(chineeseScore,mathScore){
    let totalScore = chineeseScore+mathScore;
    return totalScore;
}

let markTotalScore = calcTotalScore(40,60);
let tomTotalScore = calcTotalScore(100,100);
console.log(`mark的總分為${markTotalScore}`);
console.log(`tom的總分為${tomTotalScore}`);

//檢查學生成績是否及格
function checkScore(score){
    if(score >= 60){
        return '及格';
    }else{
        return '不及格';
    }
}
let tomScore = checkScore(60);
console.log(tomScore);
let markScore = checkScore(30);
console.log(markScore);


let count = 0;

function evenOrNot(myInput){
    count+=1;
    if(myInput%2 == 0){
        return '是偶數'
    }else{
        return '不是偶數'
    }
}
let checkEven = evenOrNot(99);
console.log(checkEven);
checkEven = evenOrNot(8);
console.log(checkEven);
checkEven = evenOrNot(87);
console.log(`目前您紀錄${count}了`);
