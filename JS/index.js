let linksBox1 = document.getElementById("linksBox1")
let linksBox2 = document.getElementById("linksBox2")
let changeName = document.getElementById("changeName")
let logOutbtn = document.getElementById("logOutbtn")
let selectSearch = document.getElementById("selectSearch")
let selectGender = document.getElementById("selectGender")
let selectProduct = document.getElementById("selectProduct")
let numOfProductPurchased = document.getElementById("numOfProductPurchased")
let productNamePurchased = document.getElementById("productNamePurchased")
let sec2 = document.getElementById("sec2")


if(localStorage.getItem("inputFname")) {
    linksBox1.style.display = "none"
    linksBox2.style.display = "block"
}
else {
    linksBox1.style.display = "block"
    linksBox2.style.display = "none"
}
changeName.innerHTML = `${localStorage.getItem("inputFname")}`
logOutbtn.addEventListener("click",logOutfromPage)
function logOutfromPage() {
    localStorage.clear()
    setTimeout(()=> {
        location = "login.html"
    },1000)
}

/*----------------------------------------------------------- For Search in header -----------------------------------------------------------------------*/
selectSearch.addEventListener("change",()=> {
    if(selectSearch.value == 1) {
        selectGender.style.display = "block"
        selectProduct.style.display = "none"
        //if i was in search by both (for select tag)
        selectGender.value = 200
        selectProduct.value = 300
        //if i was in search by both
        showParentsection()
        //if i was in search by product
        showAllcarts()
    }
    else if(selectSearch.value == 2) {
        selectProduct.style.display = "block"
        selectGender.style.display = "none"
        // if i was in search by both (for select tag)
        selectProduct.value = 300
        // if i was in search by gender
        showParentsection()
        // if i was in search by both
        showAllcarts()
    }
    else{
        selectProduct.style.display = "block"
        selectGender.style.display = "block"
        //if i was in search by gender or search by product (for select tag)
        selectGender.value = 200
        selectProduct.value = 300
        // if i was in search by gender
        showParentsection()
        // if i was in search by product
        showAllcarts()
    }
})
function showParentsection(){
    document.querySelector(".Man").style.display = "block"
    document.querySelector(".Woman").style.display = "block"
    document.querySelector(".Kids").style.display = "block"
}
function showAllcarts(){
    let shirt1 = document.querySelector(".cart1")
    shirt1.style.display = "block"
    let shirt2 = document.querySelector(".cart2")
    shirt2.style.display = "block"
    let shirt3 = document.querySelector(".cart3")
    shirt3.style.display = "block"
    let Shoes4 = document.querySelector(".cart4")
    Shoes4.style.display = "block"
    let Shoes5 = document.querySelector(".cart5")
    Shoes5.style.display = "block"
    let Shoes6 = document.querySelector(".cart6")
    Shoes6.style.display = "block"
    let Pants7 = document.querySelector(".cart7")
    Pants7.style.display = "block"
    let Pants8 = document.querySelector(".cart8")
    Pants8.style.display = "block"
    let Pants9 = document.querySelector(".cart9")
    Pants9.style.display = "block"
    let shirt10 = document.querySelector(".cart10")
    shirt10.style.display = "block"
    let shirt11 = document.querySelector(".cart11")
    shirt11.style.display = "block"
    let shirt12 = document.querySelector(".cart12")
    shirt12.style.display = "block"
    let Shoes13 = document.querySelector(".cart13")
    Shoes13.style.display = "block"
    let Shoes14 = document.querySelector(".cart14")
    Shoes14.style.display = "block"
    let Shoes15 = document.querySelector(".cart15")
    Shoes15.style.display = "block"
    let Pants16 = document.querySelector(".cart16")
    Pants16.style.display = "block"
    let Pants17 = document.querySelector(".cart17")
    Pants17.style.display = "block"
    let Pants18 = document.querySelector(".cart18")
    Pants18.style.display = "block"
    let shirt19 = document.querySelector(".cart19")
    shirt19.style.display = "block"
    let shirt20 = document.querySelector(".cart20")
    shirt20.style.display = "block"
    let shirt21 = document.querySelector(".cart21")
    shirt21.style.display = "block"
    let Shoes22 = document.querySelector(".cart22")
    Shoes22.style.display = "block"
    let Shoes23 = document.querySelector(".cart23")
    Shoes23.style.display = "block"
    let Shoes24 = document.querySelector(".cart24")
    Shoes24.style.display = "block"
    let Pants25 = document.querySelector(".cart25")
    Pants25.style.display = "block"
    let Pants26 = document.querySelector(".cart26")
    Pants26.style.display = "block"
    let Pants27 = document.querySelector(".cart27")
    Pants27.style.display = "block"
}
selectGender.addEventListener("change",()=>{
    if(selectGender.value == 4) {
        showManonly()
    }
    else if(selectGender.value == 5) {
        showWomanonly()
    }
    else {
        showKids()
    }
})
function showManonly(){
    document.querySelector(".Man").style.display = "block"
    document.querySelector(".Woman").style.display = "none"
    document.querySelector(".Kids").style.display = "none"
}
function showWomanonly(){
    document.querySelector(".Woman").style.display = "block"
    document.querySelector(".Man").style.display = "none"
    document.querySelector(".Kids").style.display = "none"
}
function showKids(){
    document.querySelector(".Man").style.display = "none"
    document.querySelector(".Woman").style.display = "none"
    document.querySelector(".Kids").style.display = "block"
}
selectProduct.addEventListener("change",()=>{
    if(selectProduct.value == 7) {
        showShirtonly()
    }
    else if(selectProduct.value == 8) {
        showShoesonly()
    }
    else {
        showPantsonly()
    }
})
function showShirtonly() {
    let shirt1 = document.querySelector(".cart1")
    shirt1.style.display = "block"
    let shirt2 = document.querySelector(".cart2")
    shirt2.style.display = "block"
    let shirt3 = document.querySelector(".cart3")
    shirt3.style.display = "block"
    let Shoes4 = document.querySelector(".cart4")
    Shoes4.style.display = "none"
    let Shoes5 = document.querySelector(".cart5")
    Shoes5.style.display = "none"
    let Shoes6 = document.querySelector(".cart6")
    Shoes6.style.display = "none"
    let Pants7 = document.querySelector(".cart7")
    Pants7.style.display = "none"
    let Pants8 = document.querySelector(".cart8")
    Pants8.style.display = "none"
    let Pants9 = document.querySelector(".cart9")
    Pants9.style.display = "none"
    let shirt10 = document.querySelector(".cart10")
    shirt10.style.display = "block"
    let shirt11 = document.querySelector(".cart11")
    shirt11.style.display = "block"
    let shirt12 = document.querySelector(".cart12")
    shirt12.style.display = "block"
    let Shoes13 = document.querySelector(".cart13")
    Shoes13.style.display = "none"
    let Shoes14 = document.querySelector(".cart14")
    Shoes14.style.display = "none"
    let Shoes15 = document.querySelector(".cart15")
    Shoes15.style.display = "none"
    let Pants16 = document.querySelector(".cart16")
    Pants16.style.display = "none"
    let Pants17 = document.querySelector(".cart17")
    Pants17.style.display = "none"
    let Pants18 = document.querySelector(".cart18")
    Pants18.style.display = "none"
    let shirt19 = document.querySelector(".cart19")
    shirt19.style.display = "block"
    let shirt20 = document.querySelector(".cart20")
    shirt20.style.display = "block"
    let shirt21 = document.querySelector(".cart21")
    shirt21.style.display = "block"
    let Shoes22 = document.querySelector(".cart22")
    Shoes22.style.display = "none"
    let Shoes23 = document.querySelector(".cart23")
    Shoes23.style.display = "none"
    let Shoes24 = document.querySelector(".cart24")
    Shoes24.style.display = "none"
    let Pants25 = document.querySelector(".cart25")
    Pants25.style.display = "none"
    let Pants26 = document.querySelector(".cart26")
    Pants26.style.display = "none"
    let Pants27 = document.querySelector(".cart27")
    Pants27.style.display = "none"
}
function showShoesonly() {
    let shirt1 = document.querySelector(".cart1")
    shirt1.style.display = "none"
    let shirt2 = document.querySelector(".cart2")
    shirt2.style.display = "none"
    let shirt3 = document.querySelector(".cart3")
    shirt3.style.display = "none"
    let Shoes4 = document.querySelector(".cart4")
    Shoes4.style.display = "block"
    let Shoes5 = document.querySelector(".cart5")
    Shoes5.style.display = "block"
    let Shoes6 = document.querySelector(".cart6")
    Shoes6.style.display = "block"
    let Pants7 = document.querySelector(".cart7")
    Pants7.style.display = "none"
    let Pants8 = document.querySelector(".cart8")
    Pants8.style.display = "none"
    let Pants9 = document.querySelector(".cart9")
    Pants9.style.display = "none"
    let shirt10 = document.querySelector(".cart10")
    shirt10.style.display = "none"
    let shirt11 = document.querySelector(".cart11")
    shirt11.style.display = "none"
    let shirt12 = document.querySelector(".cart12")
    shirt12.style.display = "none"
    let Shoes13 = document.querySelector(".cart13")
    Shoes13.style.display = "block"
    let Shoes14 = document.querySelector(".cart14")
    Shoes14.style.display = "block"
    let Shoes15 = document.querySelector(".cart15")
    Shoes15.style.display = "block"
    let Pants16 = document.querySelector(".cart16")
    Pants16.style.display = "none"
    let Pants17 = document.querySelector(".cart17")
    Pants17.style.display = "none"
    let Pants18 = document.querySelector(".cart18")
    Pants18.style.display = "none"
    let shirt19 = document.querySelector(".cart19")
    shirt19.style.display = "none"
    let shirt20 = document.querySelector(".cart20")
    shirt20.style.display = "none"
    let shirt21 = document.querySelector(".cart21")
    shirt21.style.display = "none"
    let Shoes22 = document.querySelector(".cart22")
    Shoes22.style.display = "block"
    let Shoes23 = document.querySelector(".cart23")
    Shoes23.style.display = "block"
    let Shoes24 = document.querySelector(".cart24")
    Shoes24.style.display = "block"
    let Pants25 = document.querySelector(".cart25")
    Pants25.style.display = "none"
    let Pants26 = document.querySelector(".cart26")
    Pants26.style.display = "none"
    let Pants27 = document.querySelector(".cart27")
    Pants27.style.display = "none"
}
function showPantsonly() {
    let shirt1 = document.querySelector(".cart1")
    shirt1.style.display = "none"
    let shirt2 = document.querySelector(".cart2")
    shirt2.style.display = "none"
    let shirt3 = document.querySelector(".cart3")
    shirt3.style.display = "none"
    let Shoes4 = document.querySelector(".cart4")
    Shoes4.style.display = "none"
    let Shoes5 = document.querySelector(".cart5")
    Shoes5.style.display = "none"
    let Shoes6 = document.querySelector(".cart6")
    Shoes6.style.display = "none"
    let Pants7 = document.querySelector(".cart7")
    Pants7.style.display = "block"
    let Pants8 = document.querySelector(".cart8")
    Pants8.style.display = "block"
    let Pants9 = document.querySelector(".cart9")
    Pants9.style.display = "block"
    let shirt10 = document.querySelector(".cart10")
    shirt10.style.display = "none"
    let shirt11 = document.querySelector(".cart11")
    shirt11.style.display = "none"
    let shirt12 = document.querySelector(".cart12")
    shirt12.style.display = "none"
    let Shoes13 = document.querySelector(".cart13")
    Shoes13.style.display = "none"
    let Shoes14 = document.querySelector(".cart14")
    Shoes14.style.display = "none"
    let Shoes15 = document.querySelector(".cart15")
    Shoes15.style.display = "none"
    let Pants16 = document.querySelector(".cart16")
    Pants16.style.display = "block"
    let Pants17 = document.querySelector(".cart17")
    Pants17.style.display = "block"
    let Pants18 = document.querySelector(".cart18")
    Pants18.style.display = "block"
    let shirt19 = document.querySelector(".cart19")
    shirt19.style.display = "none"
    let shirt20 = document.querySelector(".cart20")
    shirt20.style.display = "none"
    let shirt21 = document.querySelector(".cart21")
    shirt21.style.display = "none"
    let Shoes22 = document.querySelector(".cart22")
    Shoes22.style.display = "none"
    let Shoes23 = document.querySelector(".cart23")
    Shoes23.style.display = "none"
    let Shoes24 = document.querySelector(".cart24")
    Shoes24.style.display = "none"
    let Pants25 = document.querySelector(".cart25")
    Pants25.style.display = "block"
    let Pants26 = document.querySelector(".cart26")
    Pants26.style.display = "block"
    let Pants27 = document.querySelector(".cart27")
    Pants27.style.display = "block"
}

/*------------------------------------------------------------------------- For Products in section ---------------------------------------------------------------*/
let productArrayPurchased
if(localStorage.getItem("productsPurchased")) {
    productArrayPurchased = JSON.parse(localStorage.getItem("productsPurchased"))
}
else {
    productArrayPurchased = []
}
numOfProductPurchased.innerHTML = productArrayPurchased.length
productArrayPurchased.map((element30)=> {
    productNamePurchased.innerHTML += `<a class="dropdown-item" href="#">${element30.ProductName}</a>`
})

let totalPrice
if(localStorage.getItem("totalPrice")) {
    totalPrice = +localStorage.getItem("totalPrice")
}
else {
    totalPrice = 0
}

let promise = fetch("Json/Gender.json")
promise.then((PromiseResponce)=>{
    let jsonPromiseFrompromise = PromiseResponce.json()
    return jsonPromiseFrompromise
}).then((objectFromjsonPromise)=>
{
    objectFromjsonPromise.map((element1)=>
    {
        if(element1.Gender === "Man")
        {
            let parentSec1 = document.createElement("section")
            parentSec1.classList.add("parent-sec1",element1.Gender)
            parentSec1.style.cssText = "width: 90%; margin: auto; background-color: #001d3dc2; color: white; padding: 10px"
            let h2 = document.createElement("h2")
            h2.style.cssText = "background-color: #ffc300;"
            h2.classList.add("text-center", "text-danger", "fw-bold")
            let h2content = document.createTextNode(element1.Gender)
            h2.appendChild(h2content)
            parentSec1.appendChild(h2)
            let secChild = document.createElement("section")
            secChild.classList.add("sec-child","row")
            secChild.style.cssText = "gap: 25px 0;"
            let useAjaxProperity = new XMLHttpRequest()
            useAjaxProperity.open("Get","Json/Man.json")
            useAjaxProperity.send()
            useAjaxProperity.onreadystatechange = function()
            {
                if(this.readyState === 4 && this.status === 200)
                {
                    let jsonData = useAjaxProperity.responseText
                    let objectData = JSON.parse(jsonData)
                    objectData.map((element2)=>
                    {
                        let div = document.createElement("div")
                        div.classList.add("cart" + element2.id,"text-center","col-lg-4","col-md-6")
                        let img = document.createElement("img")
                        img.setAttribute("src", `img/${element2.img}.jpg`)
                        img.style.cssText= "height: 300px; width: 280px;"
                        div.appendChild(img)
                        let h4 = document.createElement("h4")
                        let h4Content = document.createTextNode("ProductName:" + element2.ProductName)
                        h4.appendChild(h4Content)
                        div.appendChild(h4)
                        let span = document.createElement("span")
                        let spanContent = document.createTextNode("Price:" + element2.price + "$")
                        span.appendChild(spanContent)
                        div.appendChild(span)
                        var button1 = document.createElement("button")
                        button1.classList.add("bg-danger","text-white","rounded","fw-bold")
                        button1.style.fontSize = "15px"
                        var button1Content = document.createTextNode("BuyNow")
                        button1.appendChild(button1Content)
                        div.appendChild(button1)
                        var button2 = document.createElement("button")
                        button2.classList.add("bg-success","text-white","rounded","fw-bold")
                        button2.style.cssText = "font-size: 15px; display: none"
                        var button2Content = document.createTextNode("Buyed")
                        button2.appendChild(button2Content)
                        div.appendChild(button2)
                        secChild.appendChild(div)
                        //click on button
                        if(element2.id) {
                            productArrayPurchased.map((item)=>{
                                if(element2.id === item.id) {
                                    button1.style.display = "none"
                                    button2.style.display = "inline"
                                }
                            })
                        }
                        button1.onclick = function() {
                            if(!localStorage.getItem("inputFname")) {
                                alert("You should register in this web site")
                            }
                            else {
                                button1.style.display = "none"
                                button2.style.display = "inline"
                                productNamePurchased.innerHTML = ""
                                productArrayPurchased = [...productArrayPurchased, element2]
                                console.log(productArrayPurchased);
                                localStorage.setItem("productsPurchased", JSON.stringify(productArrayPurchased))
                                productArrayPurchased.map((element30)=> {
                                    productNamePurchased.innerHTML += `<a class="dropdown-item" href="#">${element30.ProductName}</a>`
                                })
                                totalPrice += +element2.price
                                localStorage.setItem("totalPrice", totalPrice)
                                numOfProductPurchased.innerHTML = productArrayPurchased.length
                                localStorage.setItem(`count${element2.id}`, 1)
                            }
                        }
                    })
                }
            }
            parentSec1.appendChild(secChild)
            sec2.appendChild(parentSec1)
        }
        if(element1.Gender === "Woman") {
            let parentSec2 = document.createElement("section")
            parentSec2.classList.add("parent-sec2",element1.Gender)
            parentSec2.style.cssText = "width: 90%; margin: auto; background-color: #001d3dc2; color: white; padding: 10px"
            let h2 = document.createElement("h2")
            h2.style.cssText = "background-color: #ffc300;"
            h2.classList.add("text-center", "text-danger", "fw-bold")
            let h2content = document.createTextNode(element1.Gender)
            h2.appendChild(h2content)
            parentSec2.appendChild(h2)
            let secChild = document.createElement("section")
            secChild.classList.add("sec-child","row")
            secChild.style.cssText = "gap: 25px 0;"
            let useAjaxProperity = new XMLHttpRequest()
            useAjaxProperity.open("Get","Json/Woman.json")
            useAjaxProperity.send()
            useAjaxProperity.onreadystatechange = function()
            {
                if(this.readyState === 4 && this.status === 200)
                {
                    let jsonData = useAjaxProperity.responseText
                    let objectData = JSON.parse(jsonData)
                    objectData.map((element2)=>{
                        let div = document.createElement("div")
                        div.classList.add("cart" + element2.id,"text-center","col-lg-4","col-md-6")
                        let img = document.createElement("img")
                        img.setAttribute("src", `img/${element2.img}.jpg`)
                        img.style.cssText= "height: 300px; width: 280px;"
                        div.appendChild(img)
                        let h4 = document.createElement("h4")
                        let h4Content = document.createTextNode("ProductName:" + element2.ProductName)
                        h4.appendChild(h4Content)
                        div.appendChild(h4)
                        let span = document.createElement("span")
                        let spanContent = document.createTextNode("Price:" + element2.price + "$")
                        span.appendChild(spanContent)
                        div.appendChild(span)
                        let button1 = document.createElement("button")
                        button1.classList.add("bg-danger","text-white","rounded","fw-bold")
                        button1.style.fontSize = "15px"
                        let button1Content = document.createTextNode("BuyNow")
                        button1.appendChild(button1Content)
                        div.appendChild(button1)
                        let button2 = document.createElement("button")
                        button2.classList.add("bg-success","text-white","rounded","fw-bold")
                        button2.style.cssText = "font-size: 15px; display: none"
                        let button2Content = document.createTextNode("Buyed")
                        button2.appendChild(button2Content)
                        div.appendChild(button2)
                        secChild.appendChild(div)
                        //click on button
                        if(element2.id) {
                            productArrayPurchased.map((item)=>{
                                if(element2.id === item.id) {
                                    button1.style.display = "none"
                                    button2.style.display = "inline"
                                }
                            })
                        }
                        button1.onclick = function() {
                            if(!localStorage.getItem("inputFname")) {
                                alert("You should register in this web site")
                            }
                            else {
                                button1.style.display = "none"
                                button2.style.display = "inline"
                                productNamePurchased.innerHTML = ""
                                productArrayPurchased = [...productArrayPurchased, element2]
                                console.log(productArrayPurchased);
                                localStorage.setItem("productsPurchased", JSON.stringify(productArrayPurchased))
                                productArrayPurchased.map((element30)=> {
                                    productNamePurchased.innerHTML += `<a class="dropdown-item" href="#">${element30.ProductName}</a>`
                                })
                                totalPrice += +element2.price
                                localStorage.setItem("totalPrice", totalPrice)
                                numOfProductPurchased.innerHTML = productArrayPurchased.length
                                localStorage.setItem(`count${element2.id}`, 1)
                            }
                        }
                    })
                }
            }
            parentSec2.appendChild(secChild)
            sec2.appendChild(parentSec2)
        }
        if(element1.Gender === "Kids") {
            let parentSec3 = document.createElement("section")
            parentSec3.classList.add("parent-sec3",element1.Gender)
            parentSec3.style.cssText = "width: 90%; margin: auto; background-color: #001d3dc2; color: white; padding: 10px"
            let h2 = document.createElement("h2")
            h2.style.cssText = "background-color: #ffc300;"
            h2.classList.add("text-center", "text-danger", "fw-bold")
            let h2content = document.createTextNode(element1.Gender)
            h2.appendChild(h2content)
            parentSec3.appendChild(h2)
            let secChild = document.createElement("sec-child","section")
            secChild.classList.add("row")
            secChild.style.cssText = "gap: 25px 0;"
            let useAjaxProperity = new XMLHttpRequest()
            useAjaxProperity.open("Get","Json/Kids.json")
            useAjaxProperity.send()
            useAjaxProperity.onreadystatechange = function()
            {
                if(this.readyState === 4 && this.status === 200)
                {
                    let jsonData = useAjaxProperity.responseText
                    let objectData = JSON.parse(jsonData)
                    objectData.map((element2)=>{
                        let div = document.createElement("div")
                        div.classList.add("cart" + element2.id,"text-center","col-lg-4","col-md-6")
                        let img = document.createElement("img")
                        img.setAttribute("src", `img/${element2.img}.jpg`)
                        img.style.cssText= "height: 300px; width: 280px;"
                        div.appendChild(img)
                        let h4 = document.createElement("h4")
                        let h4Content = document.createTextNode("ProductName:" + element2.ProductName)
                        h4.appendChild(h4Content)
                        div.appendChild(h4)
                        let span = document.createElement("span")
                        let spanContent = document.createTextNode("Price:" + element2.price + "$")
                        span.appendChild(spanContent)
                        div.appendChild(span)
                        let button1 = document.createElement("button")
                        button1.classList.add("bg-danger","text-white","rounded","fw-bold")
                        button1.style.fontSize = "15px"
                        let button1Content = document.createTextNode("BuyNow")
                        button1.appendChild(button1Content)
                        div.appendChild(button1)
                        let button2 = document.createElement("button")
                        button2.classList.add("bg-success","text-white","rounded","fw-bold")
                        button2.style.cssText = "font-size: 15px; display: none"
                        let button2Content = document.createTextNode("Buyed")
                        button2.appendChild(button2Content)
                        div.appendChild(button2)
                        secChild.appendChild(div)
                        //click on button
                        if(element2.id) {
                            productArrayPurchased.map((item)=>{
                                if(element2.id === item.id) {
                                    button1.style.display = "none"
                                    button2.style.display = "inline"
                                }
                            })
                        }
                        button1.onclick = function() {
                            if(!localStorage.getItem("inputFname")) {
                                alert("You should register in this web site")
                            }
                            else {
                                button1.style.display = "none"
                                button2.style.display = "inline"
                                productNamePurchased.innerHTML = ""
                                productArrayPurchased = [...productArrayPurchased, element2]
                                console.log(productArrayPurchased);
                                localStorage.setItem("productsPurchased", JSON.stringify(productArrayPurchased))
                                productArrayPurchased.map((element30)=> {
                                    productNamePurchased.innerHTML += `<a class="dropdown-item" href="#">${element30.ProductName}</a>`
                                })
                                totalPrice += +element2.price
                                localStorage.setItem("totalPrice", totalPrice)
                                numOfProductPurchased.innerHTML = productArrayPurchased.length
                                localStorage.setItem(`count${element2.id}`, 1)
                            }
                        }
                    })
                }
            }
            parentSec3.appendChild(secChild)
            sec2.appendChild(parentSec3)
        }
    })
})