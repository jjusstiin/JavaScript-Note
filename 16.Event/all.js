const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn5 = document.querySelector('.btn5');
const btn4 = document.querySelector('.btn4');
const title = document.querySelector('h1');
let count = 0;

//監聽 事件 加法器
btn.addEventListener('click',function(e){//自訂參數"e" 是Event的縮寫，裡面紀錄操作觸發事件的資訊，以物件方式濃縮到參數內
    console.log(e);
    console.log(e.clientX);//滑鼠點擊的X座標
    console.log(e.target);
    count+=1;
    console.log("你得"+count+"分");
    title.textContent ="你得"+count+"分";
})

console.log(btn.getAttribute('class'));
console.log(btn.nodeName);//取得使用的標籤

btn2.addEventListener('click',function(e){
    count-=1;
    console.log("你得"+count+"分");
    title.textContent ="你得"+count+"分";
})
btn3.addEventListener('click',function(e){
    count*=2;
    console.log("你得"+count+"分");
    title.textContent ="你得"+count+"分";
})
btn5.addEventListener('click',function(e){
    count=count*count;
    console.log("你得"+count+"分");
    title.textContent ="你得"+count+"分";
})
btn4.addEventListener('click',function(e){
    count = 0;
    console.log("你得"+count+"分");
    title.textContent ="你得"+count+"分";
})


