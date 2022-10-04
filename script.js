let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let answer = document.querySelector('p')
const mousemoove = document.querySelector(".mousemoove")
let questionContainer = document.querySelector(".container")
const keypress = document.querySelector(".keypress")
const key = document.getElementById('key')
const nav = document.querySelector("nav")




btn1.addEventListener("click", () => {
    btn1.classList.toggle("answer")
    btn2.classList.add("red")
    answer.style.visibility = "visible"
})

btn2.addEventListener("click", () => {
    btn2.classList.toggle("answer")
    btn1.classList.add("red")
})


window.addEventListener('mousemove', (e) => {


    mousemoove.style.top = e.pageY + "px";
    mousemoove.style.left = e.pageX + "px";


    // if(e.target === btn1)
    // {
    //     console.log("BTN 1 !!"); // A NOTER POUR CHANGER LE CURSEUR QUAND ON PASSE SUR UNE DIV QU ON SOUHAITE. ON RAJOUTE UN STYLE ET VOILA :)
    // }
    // else if (e.target === btn2){
    //     console.log("BTN 2 BTN 2 !!");
    // }
    // else{
    //     console.log("NOP");
    // }

})

window.addEventListener("mousedown", (e) => {
    console.log("DOWN ! ")
    mousemoove.style.transform = 'scale(2) translate(-25%,-25%)'
})
window.addEventListener("mouseup", (e) => {
    console.log("UP")
    mousemoove.style.transform = 'scale(1) translate(-50%,-50%)'
    mousemoove.style.border = "15px solid green"
})


questionContainer.addEventListener("mouseenter", () => {
    console.log("Bien rentré.");
    questionContainer.style.background = "cyan"
    btn1.style.background = "blue"
})

questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "black"
    btn1.style.background = ""
})

// questionContainer.addEventListener("mouseover",() =>{
//     questionContainer.style.transform="rotate(90deg)"
// })
const kk = () => {
    const audio = new Audio()
    audio.src = "./key.mp3"
    audio.play() // Fonction qui joue un audio .
}

document.addEventListener("keypress", (w) => {
    console.log(w.key);
    key.textContent = w.key.toUpperCase()
    if (w.key === 'a || b || c') {
        keypress.style.background = "red"
    }
    // kk() => Joue un audio lorsqu'une touche est jouée.
})

window.addEventListener('scroll',() => {
    console.log(window.scrollY);
    if(window.scrollY >= 120)
    {
        nav.style.top = '0px'  // Permet de cacher la navBar si on scroll.
    }
    else{
        nav.style.top = '-50px'
    }
})