let body = document.getElementsByTagName("body")[0];




for (let i = 0; i < 10; i++) {
    let element = document.createElement("div");
    let elemento2 = document.createElement("div");
    let elemento3 = document.createElement("div");
    elemento2.classList += "secondLine"
    elemento3.classList += "thirdLine"
    body.appendChild(element)
    body.appendChild(elemento2)
    body.appendChild(elemento3)
    
}
/*
let elemento2 = document.createElement("img")
elemento2.setAttribute("src","https://plus.unsplash.com/premium_photo-1661315433213-a97f4706b566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80") 

element.appendChild(elemento2);*/
