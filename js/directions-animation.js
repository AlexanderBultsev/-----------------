let directions = document.querySelectorAll(".direction-container")

directions.forEach((direction) => {
    let desc = direction.querySelector(".direction-desc")
    let subdesc = direction.querySelector(".direction-subdesc")

    desc.addEventListener("click", () => {
        if (desc.classList.contains("moved")) {
            desc.classList.add("removed")
            desc.classList.remove("moved")
        } else if (subdesc.classList.contains("removed")) {
            subdesc.classList.remove("removed")

            desc.classList.remove("removed")
            desc.classList.add("moved")
        } else {
            subdesc.classList.remove("moved")

            desc.classList.remove("removed")
            desc.classList.add("moved")
        }
    })
    
    subdesc.addEventListener("click", () => {
        if (subdesc.classList.contains("moved")) {
            subdesc.classList.add("removed")
            subdesc.classList.remove("moved")
        } else if (desc.classList.contains("removed")) {
            desc.classList.remove("removed")

            subdesc.classList.remove("removed")
            subdesc.classList.add("moved")
        } else {
            desc.classList.remove("moved")

            subdesc.classList.remove("removed")
            subdesc.classList.add("moved")
        }
    })
})