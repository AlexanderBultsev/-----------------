let basket = document.querySelector("#basket")
let catalog = document.querySelector("#catalog")


let filter = basket.querySelector("#filter")
let sort = basket.querySelector("#sort")
let clear = basket.querySelector("#clear")

function Product(id, img) {
    this.id = id

    this.product = document.createElement("div")
    this.product.id = id
    this.product.classList.add("product")

    this.img = document.createElement("img")
    this.img.id = "img" + id
    this.img.src = img.src
    this.product.appendChild(this.img)
    
    let buttonsContainer = document.createElement("div")
    buttonsContainer.classList.add("buttons-container")
    this.product.appendChild(buttonsContainer)

    this.remove = document.createElement("button")
    this.remove.id = "remove" + id
    this.remove.classList.add("button", "remove")
    this.remove.textContent = "-"
    this.remove.addEventListener("click", e => {removeEvent(id)})
    buttonsContainer.appendChild(this.remove)

    this.count = document.createElement("button")
    this.count.id = "count" + id
    this.count.classList.add("button", "count", "pressed")
    this.count.textContent = "0"
    buttonsContainer.appendChild(this.count)
    
    this.add = document.createElement("button")
    this.add.id = "add" + id
    this.add.classList.add("button", "add")
    this.add.textContent = "Купить"
    this.add.addEventListener("click", e => {addEvent(id)})
    buttonsContainer.appendChild(this.add)
}

let basketProducts = []
basket.querySelectorAll(".product").forEach((product) => {
    let id = product.id
    let img = product.querySelector("img")
    let remove = product.querySelector(".remove")
    let count = product.querySelector(".count")
    let add = product.querySelector(".add")
    basketProducts.push({id, product, img, remove, count, add})
    remove.addEventListener("click", e => {removeEvent(id)})
    add.addEventListener("click", e => {addEvent(id)})
})

let catalogProducts = []
catalog.querySelectorAll(".product").forEach((product) => {
    let id = product.id
    let img = product.querySelector("img")
    let remove = product.querySelector(".remove")
    let count = product.querySelector(".count")
    let add = product.querySelector(".add")
    catalogProducts.push({id, product, img, remove, count, add})
    remove.addEventListener("click", e => {removeEvent(id)})
    add.addEventListener("click", e => {addEvent(id)})
})

function removeEvent(id) {
    let catalogProduct = catalogProducts.find(item => item.id == id)
    let basketProduct = basketProducts.find(item => item.id == id)

    catalogProduct.count.textContent = parseInt(catalogProduct.count.textContent) - 1
    if (catalogProduct.count.textContent == "0") {
        catalogProduct.remove.style.display = null
        catalogProduct.count.style.display = null
        catalogProduct.add.textContent = "Купить"
    }

    basketProduct.count.textContent = parseInt(basketProduct.count.textContent) - 1
    if (basketProduct.count.textContent == "0") {
        basketProduct.product.remove()
        basketProducts.splice(basketProducts.findIndex(item => item.id == id), 1)
    }
}

function addEvent(id) {
    let catalogProduct = catalogProducts.find(item => item.id == id)
    let basketProduct = basketProducts.find(item => item.id == id)
    
    if (basketProduct == undefined) {
        basketProduct = new Product(catalogProduct.id, catalogProduct.img)
        basketProducts.push(basketProduct)
        basket.appendChild(basketProduct.product)
    }

    if (catalogProduct.count.textContent == "0") {
        catalogProduct.remove.style.display = "block"
        catalogProduct.count.style.display = "block"
        catalogProduct.add.textContent = "+"
    }
    catalogProduct.count.textContent = parseInt(catalogProduct.count.textContent) + 1

    if (basketProduct.count.textContent == "0") {
        basketProduct.remove.style.display = "block"
        basketProduct.count.style.display = "block"
        basketProduct.add.textContent = "+"
    }
    basketProduct.count.textContent = parseInt(basketProduct.count.textContent) + 1
}

function basketShow(newProducts) {
    basket.querySelectorAll(".product").forEach((product) => { product.remove() })
    newProducts.forEach((product) => { basket.appendChild(product.product) })
}

sort.addEventListener("click", e => {
    sort.classList.toggle("pressed")
    if (sort.classList.contains("pressed")) {
        let sortedBusketProducts = basketProducts.sort((a, b) => {
            return parseInt(b.count.textContent) - parseInt(a.count.textContent)
        })
        basketShow(sortedBusketProducts)
    }
})

filter.addEventListener("click", e => {
    filter.classList.toggle("pressed")
    if (filter.classList.contains("pressed")) {
        let filteredBusketProducts = basketProducts.filter((product) => {
            return parseInt(product.count.textContent) <= 1
        })
        basketShow(filteredBusketProducts)
    }
})

clear.addEventListener("click", e => {
    while(basketProducts.length != 0) {
            let basketProduct = basketProducts.pop()
            let catalogProduct = catalogProducts.find(item => item.id == basketProduct.id)

            catalogProduct.remove.style.display = null
            catalogProduct.count.textContent = "0"
            catalogProduct.count.style.display = null
            catalogProduct.add.textContent = "Купить"

            basketProduct.product.remove()
    }
    sort.classList.remove("pressed")
    filter.classList.remove("pressed")
})