let inputFname = document.getElementById("inputFname")
let inputLname = document.getElementById("inputLname")
let inputMail = document.getElementById("inputMail")
let inputPass = document.getElementById("inputPass")
let singUpbtn = document.getElementById("singUpbtn")


singUpbtn.addEventListener("click",AddinfoToStorage)
function AddinfoToStorage() {
    if(inputFname.value === "" || inputLname.value === "" || inputMail.value === "" || inputPass.value === "" ) {
        alert ("Please inter your information to singup")
    }
    else {
        localStorage.setItem("inputFname", inputFname.value)
        localStorage.setItem("inputLname", inputLname.value)
        let mail = /\w+@\w+.\w+/ig
        let x = inputMail.value.match(mail)
        if(x) {
            localStorage.setItem("inputMail", x)
        }
        else {
            let y = prompt("Mail is uncorrect Rewrite the Mail","Exp:Name@gmail.com")
            localStorage.setItem("inputMail", y)
        }
        localStorage.setItem("inputPass", inputPass.value)
        setTimeout(()=> {
            location = "login.html"
        },1000)
    }
}
