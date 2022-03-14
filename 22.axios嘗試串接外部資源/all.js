//先安裝axios <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
let ary = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    //console.log(response.data);
    //console.log(response.status);
    //console.log(response.statusText);
    //console.log(response.headers);
    //console.log(response.config);
    ary = response.data;
    console.log('資料有回傳了')//2
    renderData();
});
function renderData(){
  console.log(ary[0].name);//3
  const title=document.querySelector('h1');
  title.innerHTML = ary[0].name;
}
console.log(ary[0]);//1
