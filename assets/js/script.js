// DOM elements
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')

// DOM elements for errors
const firstNameErrorIcon = document.getElementById('first-name-error-icon')
const firstNameErrorMessage = document.getElementById('first-name-error-message')
const lastNameErrorIcon = document.getElementById('last-name-error-icon')
const lastNameErrorMessage = document.getElementById('last-name-error-message')
const emailErrorIcon = document.getElementById('email-error-icon')
const emailErrorMessage = document.getElementById('email-error-message')
const passwordErrorIcon = document.getElementById('password-error-icon')
const passwordErrorMessage = document.getElementById('password-error-message')

// Submitting on button
document.getElementById('submit-btn').addEventListener('click', () => {
    // Reset error states
    resetErrors([firstName, lastName, email, password]);

    // Validate fields
    let isValid = true;

    // Validate fields
    if (firstName.value.trim() === '') {
        showError(firstName, firstNameErrorIcon, firstNameErrorMessage)
        isValid = false;
    }

    if (lastName.value.trim() === '') {
        showError(lastName, lastNameErrorIcon, lastNameErrorMessage)
        isValid = false;
    }

    if (email.value.trim() === '' || !isValidEmail(email.value)) {
        showError(email, emailErrorIcon, emailErrorMessage)
        isValid = false;
    }

    if (password.value.trim() === '') {
        showError(password, passwordErrorIcon, passwordErrorMessage)
        isValid = false;
    }

    if(isValid){
        firstName.value = ''
        lastName.value = ''
        email.value = ''
        password.value = ''
        console.log('Sent!')
    }
})

function resetErrors(inputs) {
    // Hide all error messages, icons, red borders and red texts
    const errorIcons = document.querySelectorAll('img[id$="error-icon"]')
    const errorMessages = document.querySelectorAll('p[id$="error-message"]')

    errorIcons.forEach(icon => icon.classList.add('hidden'))
    errorMessages.forEach(message => message.classList.add('hidden'))
    inputs.forEach(input => input.classList.remove('border-Red', 'text-Red'))
}

function showError(input, icon, message) {
    // Show error message, icon, red border and red text
    input.classList.add('border-Red', 'text-Red')
    icon.classList.remove('hidden')
    message.classList.remove('hidden')
}

function isValidEmail(email) {
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(email)
}