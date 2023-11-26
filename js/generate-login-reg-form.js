let openButton = document.querySelector("#login-button")

class LoginContainer {
    constructor() {
        this.loginContainer = document.createElement("div")
        this.loginContainer.id = "login-container"
        this.loginContainer.classList.add("form-container")
            this.loginForm = document.createElement("form")
            this.loginForm.id = "login-form"
            this.loginForm.classList.add("form")
            this.loginForm.method = "post"
            this.loginForm.autocomplete = "on"
            this.loginForm.action = "" // Будущее
                this.loginCloseButton = document.createElement('div')
                this.loginCloseButton.id = "login-close"
                this.loginCloseButton.classList.add("close")
            this.loginForm.append(this.loginCloseButton)

                this.loginTitle = document.createElement("h1")
                this.loginTitle.classList.add("title")
                this.loginTitle.textContent = "Вход"
            this.loginForm.append(this.loginTitle)

                this.loginEmail = document.createElement("div")
                this.loginEmail.classList.add("field")
                    this.loginEmailLabel = document.createElement("label")
                    this.loginEmailLabel.classList.add("label")
                    this.loginEmailLabel.htmlFor = "login-email"
                    this.loginEmailLabel.textContent = "Электронная почта"
                this.loginEmail.append(this.loginEmailLabel)

                    this.loginEmailInput = document.createElement("input")
                    this.loginEmailInput.id = "login-email"
                    this.loginEmailInput.classList.add("input")
                    this.loginEmailInput.type = "email"
                    this.loginEmailInput.required = true
                    this.loginEmailInput.autocomplete = "email"
                this.loginEmail.append(this.loginEmailInput)
            this.loginForm.append(this.loginEmail)

                this.loginPassword = document.createElement("div")
                this.loginPassword.classList.add("field")
                    this.loginPasswordLabel = document.createElement("label")
                    this.loginPasswordLabel.classList.add("label")
                    this.loginPasswordLabel.htmlFor = "login-password"
                    this.loginPasswordLabel.textContent = "Пароль"
                this.loginPassword.append(this.loginPasswordLabel)

                    this.loginPasswordInput = document.createElement("input")
                    this.loginPasswordInput.id = "login-password"
                    this.loginPasswordInput.classList.add("input")
                    this.loginPasswordInput.type = "password"
                    this.loginPasswordInput.required = true
                    this.loginPasswordInput.autocomplete = "current-password"
                    this.loginPasswordInput.maxLength = "32"
                this.loginPassword.append(this.loginPasswordInput)
            this.loginForm.append(this.loginPassword)

                this.regOpenButton = document.createElement("a")
                this.regOpenButton.id = "reg-link"
                this.regOpenButton.textContent = "Регистрация"
            this.loginForm.append(this.regOpenButton)

                this.loginButton = document.createElement("button")
                this.loginButton.classList.add("button")
                this.loginButton.id = "login-submit"
                this.loginButton.type = "submit"
                this.loginButton.textContent = "Войти"
            this.loginForm.append(this.loginButton)
        this.loginContainer.append(this.loginForm)

        this.loginCloseButton.addEventListener("click", e => {
            this.loginContainer.remove()
            openButton.classList.remove("pressed")
        })

        this.regOpenButton.addEventListener("click", e => {
            this.loginContainer.remove()
            document.body.append((new RegContainer).regContainer)
        })
    }
}

class RegContainer {
    constructor() {
        this.regContainer = document.createElement("div")
        this.regContainer.id = "reg-cintainer"
        this.regContainer.classList.add("form-container")
            this.regForm = document.createElement("form")
            this.regForm.id = "reg-form"
            this.regForm.classList.add("form")
            this.regForm.method = "post"
            this.regForm.autocomplete = "on"
            this.regForm.action = "" // Будущее
                this.regCloseButton = document.createElement('div')
                this.regCloseButton.id = "reg-close"
                this.regCloseButton.classList.add("close")
            this.regForm.append(this.regCloseButton)

                this.regTitle = document.createElement("h1")
                this.regTitle.classList.add("title")
                this.regTitle.textContent = "Регистрация"
            this.regForm.append(this.regTitle)

                this.regNamelField = document.createElement("div")
                this.regNamelField.classList.add("field")
                    this.regNameLabel = document.createElement("label")
                    this.regNameLabel.classList.add("label")
                    this.regNameLabel.htmlFor = "reg-name"
                    this.regNameLabel.textContent = "Имя"
                this.regNamelField.append(this.regNameLabel)

                    this.regNameInput = document.createElement("input")
                    this.regNameInput.classList.add("input")
                    this.regNameInput.id = "reg-name"
                    this.regNameInput.type = "nickname"
                    this.regNameInput.required = true
                    this.regNameInput.autocomplete = "nickname"
                this.regNamelField.append(this.regNameInput)
            this.regForm.append(this.regNamelField)

                this.regEmailField = document.createElement("div")
                this.regEmailField.classList.add("field")
                    this.regEmailLabel = document.createElement("label")
                    this.regEmailLabel.classList.add("label")
                    this.regEmailLabel.htmlFor = "reg-email"
                    this.regEmailLabel.textContent = "Электронная почта"
                this.regEmailField.append(this.regEmailLabel)

                    this.emailInput = document.createElement("input")
                    this.emailInput.classList.add("input")
                    this.emailInput.id = "reg-email"
                    this.emailInput.type = "email"
                    this.emailInput.required = true
                    this.emailInput.autocomplete = "email"
                this.regEmailField.append(this.emailInput)
            this.regForm.append(this.regEmailField)

                this.regPassworgField = document.createElement("div")
                this.regPassworgField.classList.add("field")
                    this.regPassworgLabel = document.createElement("label")
                    this.regPassworgLabel.classList.add("label")
                    this.regPassworgLabel.htmlFor = "reg-password"
                    this.regPassworgLabel.textContent = "Пароль"
                this.regPassworgField.append(this.regPassworgLabel)

                    this.regPassworgInput = document.createElement("input")
                    this.regPassworgInput.classList.add("input")
                    this.regPassworgInput.id = "reg-password"
                    this.regPassworgInput.type = "password"
                    this.regPassworgInput.required = true
                    this.regPassworgInput.autocomplete = "current-password"
                    this.regPassworgInput.maxLength = "32"
                this.regPassworgField.append(this.regPassworgInput)
            this.regForm.append(this.regPassworgField)

                this.loginOpenButton = document.createElement("a")
                this.loginOpenButton.id = "login-link"
                this.loginOpenButton.textContent = "Вход"
            this.regForm.append(this.loginOpenButton)

                this.regButton = document.createElement("button")
                this.regButton.classList.add("button")
                this.regButton.id = "reg-submit"
                this.regButton.type = "submit"
                this.regButton.textContent = "Зарегистрироваться"
            this.regForm.append(this.regButton)
        this.regContainer.append(this.regForm)

        this.regCloseButton.addEventListener("click", e => {
            this.regContainer.remove()
            openButton.classList.remove("pressed")
        })

        this.loginOpenButton.addEventListener("click", e => {
            this.regContainer.remove()
            document.body.append((new LoginContainer).loginContainer)
        })
    }
}

openButton.addEventListener("click", e => {
    openButton.classList.add("pressed")
    document.body.append((new LoginContainer).loginContainer)
})