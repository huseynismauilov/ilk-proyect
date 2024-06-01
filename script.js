let input = document.querySelector("input")
let p = document.querySelector(".p")

input.addEventListener("input", () => {
    p.innerHTML = input.value
})

let ul = document.querySelector("ul")
let but = document.querySelector(".a")
let li = document.querySelector("li")

but.addEventListener("click",()=> {
    let h = "Hello"
    let va = document.createElement("li")
    va.innerHTML = h
    ul.append(va)
})

let but1 = document.querySelector(".q")
let p1 = document.querySelector(".p1")
but1.addEventListener("click",()=> {
    p1.style.backgroundColor = "red"
})

let but2 = document.querySelector(".y")
let p2 = document.querySelector(".p1")
but2.addEventListener("click",()=> {
    p2.style.backgroundColor = "green"
})

let but3 = document.querySelector(".b")
let p3 = document.querySelector(".p1")
but3.addEventListener("click", ()=> {
    p3.style.backgroundColor = "purple"
})


let but4 = document.querySelector(".n")
let p4 = document.querySelector(".p1")
but4.addEventListener("click", ()=> {
    p4.style.backgroundColor = "orange"
})

//Bonus

let v = document.querySelector("ul")
let but5 = document.querySelector(".but")
let p5 = document.querySelector(".p2")
but5.addEventListener("click", ()=> {
    let va1 = document.createElement("li")
    va1.innerHTML = "Bu paragrafi göster/gizlət butonu ilə kontrol ede bilərsiz"
    v.append(va1)
})