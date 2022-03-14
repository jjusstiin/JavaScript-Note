const myLink = document.querySelector('a');

myLink.addEventListener('click',function(e){
    e.preventDefault();//取消標籤默認行為
    console.log('有被點擊到')
    document.querySelector('h1').textContent = 'hello';
})
const inn = document.querySelector('input');
inn.setAttribute('class','jjim')
console.log(myLink.getAttribute('class'));