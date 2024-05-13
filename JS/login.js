let inputMail = document.getElementById("inputMail")
let inputPass = document.getElementById("inputPass")
let logInbtn = document.getElementById("logInbtn")


if(localStorage.getItem("inputFname")) {
    let linksBox1 = document.getElementById("linksBox1")
    linksBox1.style.display = "none"
}


logInbtn.addEventListener("click",goToHome)
function goToHome() {
    if(inputMail.value == "" || inputPass.value == "") {
        alert("please Inter Your Infomation to login")
    }
    else {
        if(!localStorage.getItem("inputFname")) {
            alert("You are not Create your Account")
        }
        else {
            if(inputMail.value !== localStorage.getItem("inputMail")) {
                alert("The mail in uncorrect")
            }
            else {
                if(inputPass.value !== localStorage.getItem("inputPass")) {
                    alert("The Password is uncorrect")
                }
                else {
                    setTimeout(()=> {
                        location = "index.html"
                    },1000)
                }
            }
        }
    }
}
