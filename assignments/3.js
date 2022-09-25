let h3 = document.createElement("h3")
h3.innerText = "How to write Code ??"


let section = document.createElement("section")
section.classList.add("parent")
section.appendChild(h3)

document.querySelector(".accordion-homepage").appendChild(section)