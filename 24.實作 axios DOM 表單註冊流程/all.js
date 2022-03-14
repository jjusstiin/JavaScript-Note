const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');
send.addEventListener('click',function(e){
  callSingup();
})
function callSingup(){
  if(account.value == '' || password.value == ''){
    alert('請填寫正確資訊');
    return;
  }
  let obj = {};
  obj.email = account.value;
  obj.password = password.value
  console.log(obj);

axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',obj)
  .then(function (response) {
    if(response.data.message == '帳號註冊成功'){
      alert("恭喜帳號註冊成功");
    }else{
      alert('帳號註冊失敗，可能此帳號已經有人註冊')
    }
    account.value = '';
    password.value = '';
  })
  .catch(function (error) {
    console.log(error);
  });
}