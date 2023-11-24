let body = document.querySelector("body")
let openButton = document.querySelector("#login-button")


let loginContainer = document.createElement("div")
loginContainer.id = "login-container"
loginContainer.classList.add("form-container")
    let loginForm = document.createElement("form")
    loginForm.id = "login-form"
    loginForm.classList.add("form")
    loginForm.method = "post"
    loginForm.autocomplete = "on"
    loginForm.action = "" // Будущее
        let loginCloseButton = document.createElement('div')
        loginCloseButton.id = "login-close"
        loginCloseButton.classList.add("close")
        loginForm.appendChild(loginCloseButton)

        let loginTitle = document.createElement("h1")
        loginTitle.classList.add("title")
        loginTitle.textContent = "Вход"
        loginForm.appendChild(loginTitle)

        let loginEmail = document.createElement("div")
        loginEmail.classList.add("field")
            let loginEmailLabel = document.createElement("label")
            loginEmailLabel.classList.add("label")
            loginEmailLabel.htmlFor = "login-email"
            loginEmailLabel.textContent = "Электронная почта"
            loginEmail.appendChild(loginEmailLabel)

            let loginEmailInput = document.createElement("input")
            loginEmailInput.id = "login-email"
            loginEmailInput.classList.add("input")
            loginEmailInput.type = "email"
            loginEmailInput.required = true
            loginEmailInput.autocomplete = "email"
            loginEmail.appendChild(loginEmailInput)
        loginForm.appendChild(loginEmail)

        let loginPassword = document.createElement("div")
        loginPassword.classList.add("field")
            let loginPasswordLabel = document.createElement("label")
            loginPasswordLabel.classList.add("label")
            loginPasswordLabel.htmlFor = "login-password"
            loginPasswordLabel.textContent = "Пароль"
            loginPassword.appendChild(loginPasswordLabel)
            
            let loginPasswordInput = document.createElement("input")
            loginPasswordInput.id = "login-password"
            loginPasswordInput.classList.add("input")
            loginPasswordInput.type = "password"
            loginPasswordInput.required = true
            loginPasswordInput.autocomplete = "current-password"
            loginPasswordInput.maxLength = "32"
            loginPassword.appendChild(loginPasswordInput)
        loginForm.appendChild(loginPassword)

        let regOpenButton = document.createElement("a")
        regOpenButton.id = "reg-link"
        regOpenButton.textContent = "Регистрация"
        loginForm.appendChild(regOpenButton)

        let loginButton = document.createElement("button")
        loginButton.classList.add("button")
        loginButton.id = "login-submit"
        loginButton.type = "submit"
        loginButton.textContent = "Войти"
        loginForm.appendChild(loginButton)
    loginContainer.appendChild(loginForm)


let regContainer = document.createElement("div")
regContainer.id = "reg-cintainer"
regContainer.classList.add("form-container")
    let regForm = document.createElement("form")
    regForm.id = "reg-form"
    regForm.classList.add("form")
    regForm.method = "post"
    regForm.autocomplete = "on"
    regForm.action = "" // Будущее
        let regCloseButton = document.createElement('div')
        regCloseButton.id = "reg-close"
        regCloseButton.classList.add("close")
        regForm.appendChild(regCloseButton)

        let regTitle = document.createElement("h1")
        regTitle.classList.add("title")
        regTitle.textContent = "Регистрация"
        regForm.appendChild(regTitle)

        let regNamelField = document.createElement("div")
        regNamelField.classList.add("field")
            let regNameLabel = document.createElement("label")
            regNameLabel.classList.add("label")
            regNameLabel.htmlFor = "reg-name"
            regNameLabel.textContent = "Имя"
            regNamelField.appendChild(regNameLabel)

            let regNameInput = document.createElement("input")
            regNameInput.classList.add("input")
            regNameInput.id = "reg-name"
            regNameInput.type = "nickname"
            regNameInput.required = true
            regNameInput.autocomplete = "nickname"
            regNamelField.appendChild(regNameInput)
        regForm.appendChild(regNamelField)

        let regEmailField = document.createElement("div")
        regEmailField.classList.add("field")
            let regEmailLabel = document.createElement("label")
            regEmailLabel.classList.add("label")
            regEmailLabel.htmlFor = "reg-email"
            regEmailLabel.textContent = "Электронная почта"
            regEmailField.appendChild(regEmailLabel)

            let emailInput = document.createElement("input")
            emailInput.classList.add("input")
            emailInput.id = "reg-email"
            emailInput.type = "email"
            emailInput.required = true
            emailInput.autocomplete = "email"
            regEmailField.appendChild(emailInput)
        regForm.appendChild(regEmailField)

        let regPassworgField = document.createElement("div")
        regPassworgField.classList.add("field")
            let regPassworgLabel = document.createElement("label")
            regPassworgLabel.classList.add("label")
            regPassworgLabel.htmlFor = "reg-password"
            regPassworgLabel.textContent = "Пароль"
            regPassworgField.appendChild(regPassworgLabel)
            
            let regPassworgInput = document.createElement("input")
            regPassworgInput.classList.add("input")
            regPassworgInput.id = "reg-password"
            regPassworgInput.type = "password"
            regPassworgInput.required = true
            regPassworgInput.autocomplete = "current-password"
            regPassworgInput.maxLength = "32"
            regPassworgField.appendChild(regPassworgInput)
        regForm.appendChild(regPassworgField)

        let loginOpenButton = document.createElement("a")
        loginOpenButton.id = "login-link"
        loginOpenButton.textContent = "Вход"
        regForm.appendChild(loginOpenButton)

        let regButton = document.createElement("button")
        regButton.classList.add("button")
        regButton.id = "reg-submit"
        regButton.type = "submit"
        regButton.textContent = "Зарегистрироваться"
        regForm.appendChild(regButton)
    regContainer.appendChild(regForm)



function loginOpen() {
    body.appendChild(loginContainer)
}

function loginClose() {
    loginContainer.remove()
}

function regOpen() {
    body.appendChild(regContainer)
}

function regClose() {
    regContainer.remove()
}

openButton.onclick = () => {
    openButton.classList.add("pressed")
    loginOpen()
}

loginOpenButton.onclick = () => {
    regClose()
    loginOpen()
}

loginCloseButton.onclick = () => {
    loginClose()
    openButton.classList.remove("pressed")
}

regOpenButton.onclick = () => {
    loginClose()
    regOpen()
}

regCloseButton.onclick = () => {
    regClose()
    openButton.classList.remove("pressed")
}