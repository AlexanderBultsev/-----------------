function showContent(container, newcontent) {
    let lastCurrent = container.querySelector(".classify-current")
    if (lastCurrent != undefined) { lastCurrent.remove() }

    let current = document.createElement("div")
    current.classList.add("classify-current")
    let currentContent = document.createElement("p")
    currentContent.textContent = newcontent
    current.appendChild(currentContent)
    container.appendChild(current)
}

document.querySelectorAll(".classify-container").forEach((container) => {
    let classifyButtons = container.querySelectorAll(".classify-button")
    classifyButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("pressed")) { return }
            classifyButtons.forEach((button) => { button.classList.remove("pressed") })
            showContent(container, button.querySelector(".classify-desc").textContent)
            button.classList.add("pressed")
        })
    })
})
