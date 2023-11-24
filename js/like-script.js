const likeBtns = document.querySelectorAll('.like-icon');
for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", () => {
        likeBtns[i].classList.toggle('liked');
        }
    )
}
