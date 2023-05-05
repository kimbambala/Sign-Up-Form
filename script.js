const password = document.querySelector("#user-password").value;
const passConf = document.querySelector("#password-confirm").value;
const buttonConf = document.querySelector(".button-conf");
const message = document.querySelector(".message")

buttonConf.addEventListener("click", passConfirmation);

function passConfirmation(passConf, password) {
    if(passConf != password){
        message.innerHTML = "Passwords do not match";
    }
    else{
        message.innerHTML = "Passwords matches";
        
    }

    console.log(message.textContent);
}