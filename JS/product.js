let h3 = document.getElementById("h3")
let productsBuyed = document.getElementById("productsBuyed")


let products = JSON.parse(localStorage.getItem("productsPurchased"))
products.map((element1)=>{
    let div = document.createElement("div")
    div.style.cssText = "margin: 0px 5px"
    div.classList.add("cart" + element1.id,"text-center")
    let img = document.createElement("img")
    img.style.cssText= "height: 300px; width: 280px;"
    img.setAttribute("src",`img/${element1.img}.jpg`)
    div.appendChild(img)
    let h4 = document.createElement("h4")
    let h4Content = document.createTextNode("ProductName:" + element1.ProductName)
    h4.appendChild(h4Content)
    div.append(h4)
    let span1 = document.createElement("span")
    let span1Content = document.createTextNode("Price:" + element1.price + "$")
    span1.appendChild(span1Content)
    div.appendChild(span1)
    let button1 = document.createElement("button")
    button1.classList.add("bg-success","text-white","rounded","fw-bold","me-2")
    button1.style.cssText = "font-size: 15px; margin: 0px 5px"
    let buttonContent1 = document.createTextNode("+")
    button1.appendChild(buttonContent1)
    div.appendChild(button1)
    let button2 = document.createElement("button")
    button2.classList.add("bg-danger","text-white","rounded","fw-bold")
    button2.style.fontSize = "15px"
    let buttonContent2 = document.createTextNode("-")
    button2.appendChild(buttonContent2)
    div.appendChild(button2)
    let span2 = document.createElement("span")
    span2.style.cssText = "margin-left: 15px; font-weight: bold"
    let span2Content = document.createTextNode(localStorage.getItem(`count${element1.id}`))
    span2.appendChild(span2Content)
    div.appendChild(span2)
    productsBuyed.appendChild(div)
    button1.onclick = function() {
        let x = localStorage.getItem(`count${element1.id}`)
        localStorage.setItem(`count${element1.id}`, ++x)
        span2.innerHTML = +localStorage.getItem(`count${element1.id}`)
        let y = +localStorage.getItem("totalPrice")
        localStorage.setItem("totalPrice", y + +element1.price)
        h3.innerHTML = `Total Price is = ${localStorage.getItem("totalPrice")}$`
    }
    button2.onclick = function() {
        let x1 = localStorage.getItem(`count${element1.id}`)
        localStorage.setItem(`count${element1.id}`, --x1)
        span2.innerHTML = +localStorage.getItem(`count${element1.id}`)
        if(+localStorage.getItem(`count${element1.id}`) == 0) {
            products.map((element2,index)=> {
                if(element1.id == element2.id) {
                    products.splice(index,1)
                    localStorage.setItem("productsPurchased",JSON.stringify(products))
                    div.innerHTML = ""
                }
            })
        }
        let y = +localStorage.getItem("totalPrice")
        localStorage.setItem("totalPrice", y - +element1.price)
        h3.innerHTML = `Total Price is = ${localStorage.getItem("totalPrice")}$`
    }
})

h3.innerHTML = `Total Price is = ${localStorage.getItem("totalPrice")}$`