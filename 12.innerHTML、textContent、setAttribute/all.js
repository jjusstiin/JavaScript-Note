//選取h1            //選取網頁上元素 就像'css選擇器' 如果是選取id 要用'#id名稱'
const el = document.querySelector('.header');
console.log(el.textContent);
el.textContent = 'Hello World!!';//textContent修改內容
console.log(el.textContent);
document.querySelector('h1').textContent = 'hahaha!!';

const main = document.querySelector('.main');
console.log(main);
//會刪除所有標籤內的內容，在此標籤內重新寫入
main.innerHTML = `<h1 class="header"><span>標題</span></h1>`;//也可以用單雙引號，但是HTML裡面的"'要交錯財部會錯誤
console.log(main.innerHTML);

const list = document.querySelector('.list');
console.log(list);
let myLink = "http://www.yahoo.com.tw";
let myName = "Justin";
let content = `<li><a href=${myLink}>${myName}</a></li>`;
list.innerHTML = content+content+content+`<span>hihihi</span>`;

//.innerHTML 可以改寫標籤和內容
//.textContent 只能改寫內容
const men = document.querySelector('.men');
men.innerHTML = `<h1>標題</h1>`;//可以以HTML呈現
men.textContent = `<h1>標題</h1>`;//會用文字內容方式呈現

//.setAttribute修改屬性
const aa = document.querySelector('.aa');
aa.setAttribute('href','http://www.yahoo.com.tw');
aa.setAttribute('class','red');
aa.setAttribute('target','_block');