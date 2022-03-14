const steven ={
    name: 'Steven',
    phoneBattery: 70,
    charge: function(level1,level2){
        this.phoneBattery = level1+level2
    }
}

const becky = {
    name: 'Becky',
    phoneBattery: 30
}

console.log(steven);
steven.charge(50,50);
console.log(steven);

//call
console.log(becky);
steven.charge.call(becky,30,40); //借bccky充電
console.log(becky);

//apply 與call用法一樣但要用陣列輸入
console.log(becky);
steven.charge.apply(becky,[30,40]); //借bccky充電
console.log(becky);

//bind
console.log(becky);
const beckyCharge = steven.charge.bind(becky) //將充電借給becky
beckyCharge(40,50);                           //需要時再使用
console.log(becky);

class main{
    constructor(){
        this.name = 'Justin';
        document.querySelector('.link').addEventListener('click',this.logState.bind(this));
    }
    logState(){
        console.log(this.name);
    }
}
new main();