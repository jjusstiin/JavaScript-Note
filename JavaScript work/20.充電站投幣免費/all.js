const data = [
    {
        Charge:"免費",
        name:'與諶充電站'
    },{
        Charge:"免費",
        name:'小花充電站'
    },{
        Charge:"投幣式",
        name:'小明充電站'
    },{
        Charge:"投幣式",
        name:'小天充電站'
    }
];
const list = document.querySelector('.list');
//預設載入
function init(){ 
let str = '';
data.forEach(function(item,index){
    let content = `<li>${item.name}，${item.Charge}</li>`
    str += content;
})
list.innerHTML = str;
}
init();
//篩選器邏輯
const filter = document.querySelector('.filter');
filter.addEventListener("click",function(e){
    if(e.target.value == undefined){
        console.log('你點擊到空的地方');
        return;
    }
    let str='';
    data.forEach(function(item,index){
        if(e.target.value == '全部'){
            let content = `<li>${item.name}，${item.Charge}</li>`
            str += content;
        }else if(e.target.value == item.Charge){
            let content = `<li>${item.name}，${item.Charge}</li>`
        str += content;
        }
    })
    list.innerHTML = str;
})
//新增邏輯
const stationName = document.querySelector('.stationName');
const stationCharge = document.querySelector('.stationCharge');
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e){
    let obj = {};
    obj.name = stationName.value;
    obj.Charge = stationCharge.value;
    data.push(obj);
    init();//重新載入讓ul顯示
    stationName.value = '';
    stationCharge.value = '免費';
})



