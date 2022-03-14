//.innerHTML .textContent .getAttribure('屬性') .value
const myLink = document.querySelector('a');
console.log(myLink.getAttribute('class'));
//setAttribute getAttribute
console.log(myLink.innerHTML);
let content = myLink.innerHTML;
console.log(content);
console.log(myLink.textContent);

//表單元素如何取值
const txt = document.querySelector('.txt');
console.log(txt.value);
txt.value = 'hello!!'
console.log(txt.value);
const list =document.querySelectorAll('.sel>option');
console.log(list);
list[0].textContent = '台中市';
list[0].value = '台中市';
console.log(list[0]);
const sel = document.querySelector('.sel');
sel.value = '台北市';//select的value是從option裡面的值去選取，而非更改了option的value，所以如果非option內的value將顯示不出東西



