let posts = document.querySelectorAll(".post")

posts.forEach((post) => {
    let likeBtn = post.querySelector(".like-icon")
    likeBtn.addEventListener("click", e => {
        likeBtn.classList.toggle('liked')
    })
})
