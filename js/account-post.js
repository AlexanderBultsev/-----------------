let newPostPhoto = document.querySelector('.new-post img')
let newPostPhotoInput = document.querySelector('.new-post input[type=file]')

newPostPhotoInput.addEventListener("change", e => {
	let photo = newPostPhotoInput.files[0]
    if (photo) {
        let reader = new FileReader();
		reader.readAsDataURL(photo);
		reader.onloadend = () => {
			newPostPhoto.src = reader.result
		}
    }
})