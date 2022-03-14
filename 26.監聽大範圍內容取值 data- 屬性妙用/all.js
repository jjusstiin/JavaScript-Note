const title = document.querySelector('.box');

title.addEventListener('click',function(e){
    if(e.target.getAttribute('data-content')=='標題'){
        console.log(e.target.getAttribute('value'));
        console.log(e.target.getAttribute('data-content'));
    }
})