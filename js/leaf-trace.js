let leavesToggle = document.querySelector("#leaves-toggle")
let traceTimeout
let randomTimeout
let leavesTimeout
let moved = false
let mouseX
let mouseY
let leavesContainer

function ableTrace(delay) {
    leavesContainer = document.createElement("div")
    leavesContainer.classList.add("leaves-container")
    document.body.append(leavesContainer)

    traceTimeout = setTimeout(function traceCycle() {
        if (moved) {
            traceLeaf(mouseX, mouseY)
        }
        traceTimeout = setTimeout(traceCycle, delay)
    }, delay)

    randomTimeout = setTimeout(function randomCycle() {
        randomLeaf(Math.random() * document.documentElement.clientWidth, Math.random() * document.documentElement.clientHeight)
        randomTimeout = setTimeout(randomCycle, delay*2)
    })
}

function disableTrace() {
    leavesContainer.remove()
    clearTimeout(traceTimeout)
}

function traceLeaf(x, y) {
    let size = 20
    let leaf = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    leaf.classList.add("leaf")
    leaf.setAttribute("viewBox", "0 0 32 32")
    leaf.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    leaf.setAttribute("width", size + "px")
    leaf.setAttribute("height", size + "px")
    leaf.style.left = (x - size / 2) + "px"
    leaf.style.top = (y - size / 2) + "px"
    leaf.style.transform = "scale(1) rotate(" + ((x + y) % 360) + "deg)"
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute("d", "M30.039 2.719c-0.143-0.544-0.631-0.939-1.211-0.939-0.395 0-0.748 0.184-0.977 0.47l-0.002 0.002c-1.639 1.931-3.786 3.384-6.235 4.158l-0.096 0.026c-1.66 0.54-3.592 0.925-5.588 1.079l-0.086 0.005c-2.296 0.094-4.448 0.609-6.414 1.468l0.114-0.045c-3.466 1.876-5.78 5.485-5.78 9.633 0 0.064 0.001 0.127 0.002 0.19l-0-0.010c0.010 0.318 0.031 0.631 0.068 0.945 0.144 1.149 0.443 2.193 0.877 3.163l-0.028-0.070c-1.472 1.947-2.758 4.166-3.758 6.536l-0.076 0.204c-0.064 0.145-0.101 0.314-0.101 0.492 0 0.512 0.309 0.953 0.75 1.146l0.008 0.003c0.144 0.064 0.311 0.102 0.487 0.102 0.001 0 0.003 0 0.004 0h-0c0 0 0.001 0 0.001 0 0.512 0 0.953-0.308 1.146-0.75l0.003-0.008c0.863-2.053 1.833-3.813 2.96-5.455l-0.066 0.102c1.149 1.549 2.642 2.78 4.37 3.593l0.070 0.030c1.482 0.678 3.216 1.072 5.041 1.072 0.026 0 0.052-0 0.077-0l-0.004 0c1.957-0.008 3.82-0.406 5.517-1.119l-0.095 0.035c5.424-2.452 9.281-7.517 9.983-13.546l0.008-0.079c0.151-1.153 0.237-2.486 0.237-3.839 0-3.061-0.441-6.020-1.264-8.815l0.056 0.22zM28.537 14.781c-0.578 5.22-3.848 9.56-8.373 11.642l-0.090 0.037c-1.28 0.561-2.772 0.888-4.34 0.888-1.522 0-2.972-0.308-4.292-0.864l0.073 0.027c-1.604-0.758-2.91-1.921-3.822-3.358l-0.022-0.037c3.354-3.495 8.014-5.715 13.193-5.872l0.029-0.001c0.636-0.064 1.129-0.596 1.129-1.244 0-0.69-0.56-1.25-1.25-1.25-0.043 0-0.085 0.002-0.126 0.006l0.005-0c-5.472 0.226-10.391 2.428-14.097 5.906l0.012-0.011c-0.102-0.347-0.188-0.766-0.242-1.196l-0.004-0.042c-0.027-0.24-0.045-0.482-0.051-0.723-0.001-0.048-0.002-0.105-0.002-0.162 0-3.16 1.757-5.909 4.348-7.325l0.044-0.022c1.6-0.679 3.456-1.104 5.402-1.174l0.027-0.001c2.288-0.177 4.409-0.604 6.429-1.258l-0.195 0.055c2.238-0.74 4.171-1.848 5.83-3.267l-0.023 0.020c0.404 1.735 0.635 3.727 0.635 5.773 0 1.216-0.082 2.414-0.24 3.587l0.015-0.137z")
    path.setAttribute("stroke-width", "2")
    path.setAttribute("stroke-linecap", "round")
    path.setAttribute("stroke-linejoin", "round")
    leaf.append(path);
    leavesContainer.append(leaf)
    setTimeout(() => {
        leaf.style.transform = "scale(0) rotate(" + ((x + y) % 360 + 360) + "deg)"
        leaf.classList.add("hidden")
    }, 0)
    setTimeout(() => {
        leaf.remove()
    }, 4000)
}

function randomLeaf(x, y) {
    let size = 60
    let leaf = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    leaf.classList.add("leaf", "hidden")
    leaf.setAttribute("viewBox", "0 0 32 32")
    leaf.setAttribute("xmlns", "http://www.w3.org/2000/svg")
    leaf.setAttribute("width", size + "px")
    leaf.setAttribute("height", size + "px")
    leaf.style.left = (x - size / 2) + "px"
    leaf.style.top = (y - size / 2) + "px"
    leaf.style.transform = "scale(0) rotate(" + ((x + y) % 360 - 360) + "deg)"
    let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute("d", "M30.039 2.719c-0.143-0.544-0.631-0.939-1.211-0.939-0.395 0-0.748 0.184-0.977 0.47l-0.002 0.002c-1.639 1.931-3.786 3.384-6.235 4.158l-0.096 0.026c-1.66 0.54-3.592 0.925-5.588 1.079l-0.086 0.005c-2.296 0.094-4.448 0.609-6.414 1.468l0.114-0.045c-3.466 1.876-5.78 5.485-5.78 9.633 0 0.064 0.001 0.127 0.002 0.19l-0-0.010c0.010 0.318 0.031 0.631 0.068 0.945 0.144 1.149 0.443 2.193 0.877 3.163l-0.028-0.070c-1.472 1.947-2.758 4.166-3.758 6.536l-0.076 0.204c-0.064 0.145-0.101 0.314-0.101 0.492 0 0.512 0.309 0.953 0.75 1.146l0.008 0.003c0.144 0.064 0.311 0.102 0.487 0.102 0.001 0 0.003 0 0.004 0h-0c0 0 0.001 0 0.001 0 0.512 0 0.953-0.308 1.146-0.75l0.003-0.008c0.863-2.053 1.833-3.813 2.96-5.455l-0.066 0.102c1.149 1.549 2.642 2.78 4.37 3.593l0.070 0.030c1.482 0.678 3.216 1.072 5.041 1.072 0.026 0 0.052-0 0.077-0l-0.004 0c1.957-0.008 3.82-0.406 5.517-1.119l-0.095 0.035c5.424-2.452 9.281-7.517 9.983-13.546l0.008-0.079c0.151-1.153 0.237-2.486 0.237-3.839 0-3.061-0.441-6.020-1.264-8.815l0.056 0.22zM28.537 14.781c-0.578 5.22-3.848 9.56-8.373 11.642l-0.090 0.037c-1.28 0.561-2.772 0.888-4.34 0.888-1.522 0-2.972-0.308-4.292-0.864l0.073 0.027c-1.604-0.758-2.91-1.921-3.822-3.358l-0.022-0.037c3.354-3.495 8.014-5.715 13.193-5.872l0.029-0.001c0.636-0.064 1.129-0.596 1.129-1.244 0-0.69-0.56-1.25-1.25-1.25-0.043 0-0.085 0.002-0.126 0.006l0.005-0c-5.472 0.226-10.391 2.428-14.097 5.906l0.012-0.011c-0.102-0.347-0.188-0.766-0.242-1.196l-0.004-0.042c-0.027-0.24-0.045-0.482-0.051-0.723-0.001-0.048-0.002-0.105-0.002-0.162 0-3.16 1.757-5.909 4.348-7.325l0.044-0.022c1.6-0.679 3.456-1.104 5.402-1.174l0.027-0.001c2.288-0.177 4.409-0.604 6.429-1.258l-0.195 0.055c2.238-0.74 4.171-1.848 5.83-3.267l-0.023 0.020c0.404 1.735 0.635 3.727 0.635 5.773 0 1.216-0.082 2.414-0.24 3.587l0.015-0.137z")
    path.setAttribute("stroke-width", "2")
    path.setAttribute("stroke-linecap", "round")
    path.setAttribute("stroke-linejoin", "round")
    leaf.append(path);
    leavesContainer.append(leaf)
    setTimeout(() => {
        leaf.style.transform = "scale(1) rotate(" + ((x + y) % 360) + "deg)"
        leaf.classList.remove("hidden")
    }, 0)
    setTimeout(() => {
        leaf.style.transform = "scale(0) rotate(" + ((x + y) % 360 + 360) + "deg)"
        leaf.classList.add("hidden")
    }, 2000)
    setTimeout(() => {
        leaf.remove()
    }, 4000)
}

leavesToggle.addEventListener("click", e => {
    leavesToggle.classList.toggle("pressed")
    if (leavesToggle.classList.contains("pressed")) {
        ableTrace(200)
    }
    else {
        disableTrace()
    }
})

window.addEventListener("DOMContentLoaded", e => {
    leavesToggle.classList.add("pressed")
    ableTrace(200)
})

window.addEventListener("mousemove", e => {
    moved = true
    mouseX = e.clientX
    mouseY = e.clientY
    if (leavesTimeout) {
        clearTimeout(leavesTimeout)
    }
    leavesTimeout = setTimeout(() => {
        moved = false
    }, 100)
})

let scrollDirection = 0
let scrollPosition = window.scrollY

window.addEventListener("scroll", e => {
    if (window.scrollY > scrollPosition) {
        scrollDirection = -1
    } else {
        scrollDirection = 1
    }
    scrollPosition = window.scrollY
    leavesContainer.childNodes.forEach(leaf => {
        let top = leaf.getBoundingClientRect().top
        let k = 1000 * scrollDirection
        if (scrollDirection < 0) {
            k *= top / document.documentElement.clientHeight
        } else {
            k *= (document.documentElement.clientHeight - top) / document.documentElement.clientHeight
        }
        leaf.style.top = top + k + "px"
    });
});