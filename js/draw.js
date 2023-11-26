const body = document.querySelector("body")
const butn = document.querySelector(".header-logo")

isDrawing = false

butn.addEventListener('click', () => {
    if (!isDrawing) {
        isDrawing = !isDrawing
    } else {
        isDrawing = !isDrawing
        const oldImgs = body.querySelectorAll("#newImg")
        oldImgs.forEach((img) => {
            img.remove()
        })
    }
})

body.addEventListener('mousemove', e => {
    if (isDrawing) {
        const newImg = document.createElement('img')
        newImg.id = "newImg"
        newImg.src = '/images/main/shortcut_icon_mountain.svg'
        newImg.style.height = '22px'
        newImg.style.width = '54px'
        newImg.style.position = 'absolute'
        newImg.style.left = e.pageX - 27 + 'px'
        newImg.style.top = e.pageY - 11 + 'px'
        newImg.style.zIndex = 1
        body.appendChild(newImg)
    }
})