axios.get('https://hexschool.github.io/ajaxHomework/data.json')
.then(function (response) {
    console.log(response);
  console.log(response.data);
  console.log(response.status);
  console.log(response.statusText);
  console.log(response.headers);
  console.log(response.config);
});
  let ary = []
  axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
      ary = response.data;
      console.log(ary);//為了等待response不耽誤執行會先被跳過(2)
      renderData();
  });
  function renderData(){
      console.log(ary);//(3)
      const title = document.querySelector('.title');
      title.textContent = ary[0].name;
  }
  console.log(ary);//出現空值，資訊還沒回傳就被先執行 (1)
