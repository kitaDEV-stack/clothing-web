const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_passord_input = document.getElementById('repeat-password-input')
const errors_message = document.getElementById('errors-message')

errors_message.style.display = "none"

form.addEventListener('submit', (e) => {
    let errors = []
    if(firstname_input){
        // If we have a firstname input then we are in the signup page
        errors = getSignupFormErrors(firstname_input.value,email_input.value,password_input.value,repeat_passord_input.value)
    }else{
        // If we don't have a firstname input then we are in the login page
        errors = getLoginFormErrors(email_input.value,password_input.value)
    }
    if(errors.length > 0){
        // If there are any errors this funciton will not allow to execute
        e.preventDefault()
        errors_message.innerText = errors.join('! ')
        errors_message.style.display = "block"
    }else{
        errors_message.style.display = "none"
    }
})
function getSignupFormErrors(firstname,email,password,repeatPassword){
    let errors = []
    if(firstname === '' || firstname === null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    if(email === '' || email === null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password === null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password.length < 8){
        errors.push('Need at least 8 letters')
        password_input.parentElement.classList.add('incorrect')
    }
    if(password !== repeatPassword){
        errors.push('Password does not match repeated password')
         password_input.parentElement.classList.add('incorrect')
         repeat_passord_input.parentElement.classList.add('incorrect')
    }
    return errors;
}

function getLoginFormErrors(email,password){
    let errors = []
    if(email === '' || email === null){
        errors.push('Email is required')
        email_input.parentElement.classList.add('incorrect')
    }
    if(password === '' || password === null){
        errors.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }
    return errors;

}

const allInputs = [firstname_input,email_input,password_input,repeat_passord_input].filter(input => input != null)
allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if(input.parentElement.classList.contains('incorrect')){
            input.parentElement.classList.remove('incorrect')
        }
        errors_message.style.display = "none"
    })
})