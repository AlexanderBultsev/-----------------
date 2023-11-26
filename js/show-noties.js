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
    return notie
}

function showNotie(notie) {
    container.append(notie)
}

function countedFunction(func, maxCount) {
    let count = 0;
    return function() {
        if (count < maxCount) {
            count += 1
            return func.call(this, ...arguments)
        }
    }
}
showNotie = countedFunction(showNotie, 10)

notiesButton.addEventListener("click", e => {
    notiesButton.classList.toggle("pressed")
    
    if (notiesButton.classList.contains("pressed")) {
        timer = setInterval(() => {showNotie(Notie("Ошибка"))}, 1000)
    } else {
        clearInterval(timer)
    }
})