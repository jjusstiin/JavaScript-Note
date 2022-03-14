const btn = document.querySelector('.btn');
btn.addEventListener('click',function(e){
    console.log(e.target);
})
const list = document.querySelectorAll('.list>li');
list[1].addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.nodeName);
    if(e.target.nodeName == 'INPUT'){//要大寫注意
        list[0].textContent = '你目前點到按鈕了';
    }
})
