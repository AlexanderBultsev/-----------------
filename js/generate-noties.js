let account = document.querySelector(".account")
let container = account.querySelector(".noties")
let notiesButton = account.querySelector("#noties-button")

let noties = []

function Notie(content, href) {
    let notie = document.createElement("a")
    notie.classList.add("button")
    if (href) {notie.href = href}
    notie.textContent = content
    notie.addEventListener("click", e => {
        noties.splice(noties.indexOf(notie), 1)
        notie.remove()
        if (noties.length == 0) {notiesButton.classList.toggle("pressed")}
    })
    return notie
}

function getNoties() {
    noties.push(Notie("Новое сообщение", ""))
    noties.push(Notie("Новая отметка нравится", ""))
}

notiesButton.addEventListener("click", e => {
    notiesButton.classList.toggle("pressed")
    if (notiesButton.classList.contains("pressed")) {
        getNoties()
        noties.forEach((notie) => { container.appendChild(notie) })
    }
})