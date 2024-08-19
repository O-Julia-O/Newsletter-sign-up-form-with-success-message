const formEmail = document.getElementById("c-form");
const dismissBtn = document.getElementById("success-btn");
const mainEmailMessageForm = document.querySelector(".email-message");
const showsuccessMessage = document.querySelector(".success-message");
const emailOfClient = document.getElementById("emailOfClient")


function handleSubnit(e) {
    /* prevent the default behavior of the onsubmit event */
    e.preventDefault();

    /* Retrieving data from the form */
    const data = {};
    const fields = e.target.querySelectorAll("input, select, textarea");

    for(const field of fields) {
        data[field.name] = field.value;
    }

    const emailErrorMessage = validateEmail(data.email);

    /* if emailErrorMessage is not empty */
    if (emailErrorMessage) {
        const input = document.getElementById("email");
        /* find classname */
        const emailErrorMessageElement = document.querySelector(".c-form-field__messages");
        /* styles for input */
        input.classList.add("invalid");
        /* show error message to user */
        emailErrorMessageElement.innerText = emailErrorMessage;
    }

    /* show success message */
    if (!emailErrorMessage) {
        mainEmailMessageForm.classList.add("close");
        emailOfClient.textContent = data.email;
        showsuccessMessage.classList.remove('close');
    }

}

function validateEmail(email) {
    if(!email) return "Email is required";

    const isValidEmail = /^\S+@\S+$/g; /* there are characters before and after the @ symbol.  */

    if (!isValidEmail.test(email)) { /* method test checks the current String on validation by using the RegEx */
        return "Please enter a valid email";
    }

    return '';
}

function returnToMainPage() {
    mainEmailMessageForm.classList.remove("close");
    showsuccessMessage.classList.add("close");
}

formEmail.addEventListener("submit", handleSubnit);
dismissBtn.addEventListener("click", returnToMainPage);
