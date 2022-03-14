//document.querySelectorAll('a')抓多個相同標籤變成陣列
const myLinks = document.querySelectorAll('a');
console.log(myLinks);
myLinks[0].setAttribute('class','red');
myLinks[1].setAttribute('href','http://www.yahoo.com.tw');
myLinks[1].setAttribute('target','_block');
document.querySelectorAll('a')[1].setAttribute('style','color: green');