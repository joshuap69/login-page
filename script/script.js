window.addEventListener('load', function () {
    document.getElementById("username").focus();
})

window.addEventListener('keyup', function(event){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if(event.key === 'Tab' & username === document.activeElement){
        password.focus();
    }
    else if(event.key === 'Tab' & password === document.activeElement){
        username.focus();
    }
    else if(event.key === 'Enter'){
        document.getElementById("form").submit();
    }
})

window.addEventListener('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
})

var form = document.getElementById("form");
form.addEventListener('submit', formsubmit);
function formsubmit (event) {
    event.preventDefault();
    console.log("Username: " + document.getElementById("username").value);
    console.log("Password: " + document.getElementById("password").value);
    console.log("Stay signed in: " + document.getElementById("stay-signed-in").checked);
}