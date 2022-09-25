// Get all children of div z4hgWe
let allChild = document.querySelector(".z4hgWe").childNodes

// Removing #text which is empty div
for(let i = 0; i < allChild.length; i+=3){
    allChild[i].remove()
}

// Removing few of the languages
for(let i = 0; i < allChild.length; i+=2){
    allChild[i].remove()
}