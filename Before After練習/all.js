const check = document.querySelector('.check');
check.addEventListener('click',function(e){
    if(e.target.closest('div').dataset.check==''){
        check.setAttribute('data-check','check');
    }else{
        check.setAttribute('data-check','');
    }
})
