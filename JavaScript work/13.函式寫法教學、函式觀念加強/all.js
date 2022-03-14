function catAction(){
console.log('起床')
console.log('叫主人起床')
hate();
console.log('把桌上的水撥到地板')
console.log('睡覺')
}

function hate(){
console.log('嫌棄飼料難吃')
console.log('上廁所，不撥沙')
}

catAction();


function count(x,y){
    console.log(x+y);
}

count(4,5)

let num = 0;
function minus(num1,num2){
    num = num1-num2;
  }
  minus(10,7);
  console.log(num);


let priceIn = 56;
let priceTogo = 61;
let moneyIHave = 60;
function checkOrder(num, isTakeout) {
    if (isTakeout === 'togo') {
      if (calTotal(num,priceTogo) <= 60) {
        return "外帶成功!";
      } else {
        return "外帶失敗!";
      }
    } else if (isTakeout === 'in') {
      if (calTotal(num,priceIn) <= 60) {
        return "內用成功!";
      } else {
        return "內用失敗!";
      }
    } else {
      return "用餐方式輸入錯誤!";
    }
  }
  function calTotal(num,price) {
    return num * price;
  }
  
  //情境一：小格想內用一碗豆花
  //請呼叫 checkOrder 函式並依照情境帶入參數
  //使用下方 console.log() 印出結果
  console.log(checkOrder(1,'in'));
  
  //情境二：小格想外帶一碗豆花
  //請呼叫 checkOrder 函式並依照情境帶入參數
  //使用下方 console.log() 印出結果
  console.log(checkOrder(1,'togo'));
  