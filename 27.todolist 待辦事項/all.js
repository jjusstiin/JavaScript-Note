let data = [];
const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');
function renderData(){
    let str = '';
    data.forEach(function(item,index){
        str += `<li>${item.content}<input type="button" value='刪除' data-num=${index} class="delete"></li>` 
    })
    const list = document.querySelector('.list');
    list.innerHTML = str;
    }
//新增
save.addEventListener('click',function(e){
    if( txt.value.trim() ==''){
        alert('請輸入內容');
        txt.value = '';
        return;
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    renderData();
    txt.value = '';
})

//刪除
list.addEventListener('click',function(e){
    if(e.target.getAttribute('class')!=='delete'){
        alert('手殘嗎');
        return;
    }
    let num = e.target.getAttribute('data-num');
    data.splice(num,1);
    renderData();
})