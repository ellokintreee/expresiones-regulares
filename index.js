const suma = document.getElementsByClassName("mas")
const menos = document.getElementsByClassName("menos")

var numb = 0;

function sumando() {

    numb++
    set_numb(numb)
}


function restar() {
    numb--
    set_numb(numb)
}
function set_numb(value) {
    if (numb >= 0) {
        
    
    document.querySelectorAll("h1").forEach(element => {
        element.innerHTML = value
    });
}
}




