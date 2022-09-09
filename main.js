const form = document.getElementById('form')
const firstName = document.getElementById('first_name')
const errorFirstName = document.getElementById('error_first_name')
const lastName = document.getElementById('last_name')
const errorLastName = document.getElementById('error_last_name')
const email = document.getElementById('email')
const errorEmail = document.getElementById('error_email')
const password = document.getElementById('password')
const errorPassword = document.getElementById('error_password')
const btnSubmit = document.getElementById('btn_submit')
const inputsForm = document.querySelectorAll('input')

// Escuchamos evento submit en formulario
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()
    // Validación de campo vacío primer nombre
    if (firstName.value === '') {
        firstName.classList.add('error_icon')
        errorFirstName.innerHTML = 'First Name cannot be empty'
        return
        // Validación de campo vacío apellido
    } else if (lastName.value === '') {
        firstName.classList.remove('error_icon')
        errorFirstName.innerHTML = ''
        lastName.classList.add('error_icon')
        errorLastName.innerHTML = 'Last Name cannot be empty'
        return
        // Validación de campo vacío email
    } else if (email.value === '') {
        lastName.classList.remove('error_icon')
        errorLastName.innerHTML = ''
        email.classList.add('error_icon')
        errorEmail.innerHTML = 'Email cannot be empty'
        return
        // Validación de @ en email
    } else if (email.value.indexOf("@") < 0) {
        errorEmail.innerHTML = 'Looks like this is not an email'
        return
        // Validación de .con en email
    } else if (email.value.indexOf(".com") < 0) {
        errorEmail.innerHTML = 'Looks like this is not an email'
        return
        // Validación de campo vacío password
    } else if (password.value === '') {
        email.classList.remove('error_icon')
        errorEmail.innerHTML = ''
        password.classList.add('error_icon')
        errorPassword.innerHTML = 'Password cannot be empty'
        return
    } else {
        // Si todo lo ingresado es correcto se arroja alerta con mensaje
        password.classList.remove('error_icon')
        errorPassword.innerHTML = ''
        // Limpiamos los inputs y recargamos el sitio
        alert('The data has been sent')
        inputsForm.forEach(element => {
            element.value = ''
        });
        window.location.reload()
    }
})
