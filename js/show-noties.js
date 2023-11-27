let notiesButton = document.querySelector("#noties-button")
let notiesIcon = notiesButton.querySelector("img")
let notiesContainer = document.querySelector(".noties")

function checkNoties() {
    if (notiesContainer.children.length == 0) {
        notiesIcon.src = "images/main/noties_off_icon.png"
        notiesButton.classList.remove("pressed")
    }
    else {
        notiesIcon.src = "images/main/noties_icon.png"
    }
}

function Notie(content, href) {
    let notie = document.createElement("a")
    notie.classList.add("button")
    if (href)
        notie.href = href
    notie.textContent = content
    notiesContainer.append(notie)
    checkNoties()

    notie.addEventListener("click", e => {
        notie.remove()
        checkNoties()
    })
}

window.addEventListener("DOMContentLoaded", () => {
    checkNoties()
})

notiesButton.addEventListener("click", e => {
    notiesButton.classList.toggle("pressed")
    checkNoties()
})