const username = document.querySelector('#username')
const password = document.querySelector('#password')
const toggleBtn = document.querySelector('#toggleSignUp')
const QuestionDisplay = document.querySelector('#Question')
const title = document.querySelector('#title')
const Message = document.querySelector('#Message')
let signUp = true

function toggleSignUp() { 
    signUp = !signUp
    title.textContent = toggleBtn.textContent
    QuestionDisplay.textContent = signUp ? 'Already Have an Account?' : 'Create an Account?'
    toggleBtn.textContent = signUp ? 'Log In' : 'Sign Up'
}

function updateMessage(text) {
    // text is like { error||message: string }
    Message.textContent = ''
}

async function signUpReq() {
    if (username.value == '' || password.value == '') return

    const res = await fetch('http://localhost:3000/signUp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username.value, password: password.value})
    })

    const data = await res.json()
    updateMessage(data)
}

async function logIn() {
    if (username.value == '' || password.value == '') return

    const res = await fetch('http://localhost:3000/logIn', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username: username.value, password: password.value})
    })

    const data = await res.json()
    updateMessage(data)
}

function Confirm() { signUp ? signUpReq() : logIn() }