console.log("This is for login form");

let btn = document.getElementsByClassName('btn')[0];
let name = document.getElementById('name');
let password = document.getElementById('password');

console.log(btn);

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(e);
    
    var xhr = new XMLHttpRequest();

    xhr.open('POST','/login',true);

    xhr.onload = function(){
        console.log(this.responseText);
    }

    var user = {
        Name : name.value,
        Password : password.value
    }

    xhr.send(user);

})