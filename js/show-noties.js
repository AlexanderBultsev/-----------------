let notiesButton = document.querySelector("#noties-button")
let container = document.querySelector(".noties")

function Notie(content, href) {
    let notie = document.createElement("a")
    notie.classList.add("button")
    if (href) {notie.href = href} {
        notie.textContent = content
    }
    notie.addEventListener("click", e => {
        notie.remove()
        if (container.children.length == 0) {
            notiesButton.classList.toggle("pressed")
        }
    })
    container.append(notie)
}

notiesButton.addEventListener("click", e => {
    if (container.children.length != 0) {
        notiesButton.classList.toggle("pressed")
    }
})