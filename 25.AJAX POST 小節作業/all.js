//註冊功能
const account = document.querySelector('.account');
const password = document.querySelector('.password');
const send = document.querySelector('.send');
let data ={};
send.addEventListener("click",function(e){
    if(account.value == '' || password.value == ''){
        alert('輸入錯誤123');
        return;
    }
    data = {
        email : account.value,
        password : password.value
    }
    start();
})
function start(){
axios.post('https://hexschool-tutorial.herokuapp.com/api/signup',data)
    .then(function(response){
        if(response.data.message == '帳號註冊成功'){
            alert('帳號註冊成功')
        }else{
            alert('帳號已被使用')
        }
    })
    .catch(function(error){
        console.log(error);
    })
    account.value = '';
    password.value = '';
    //.catch(function(error){
      //  console.log(error);
    //})
}

//登入功能
const accountIn = document.querySelector('.accountIn');
const passwordIn = document.querySelector('.passwordIn');
const sendIn = document.querySelector('.sendIn');
let dataIn = {};
sendIn.addEventListener("click",function(e){
    if(accountIn.value == '' || passwordIn.value == ''){
        alert('輸入錯誤');
        return;
    }
    dataIn = {
        email : accountIn.value,
        password : passwordIn.value
    }
    startIn();
})
function startIn(){
    axios.post('https://hexschool-tutorial.herokuapp.com/api/signin',dataIn)
        .then(function(response){
            if(response.data.message == '登入成功'){
                alert('歡迎光臨');
            }else{
                alert(response.data.message);
            }
        })
        accountIn.value = '';
        passwordIn.value = '';
        .catch(function(error){
            console.log(error);
        })
    }
