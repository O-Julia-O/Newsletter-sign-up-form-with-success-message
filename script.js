const formEmail = document.getElementById("c-form");

function handleSubnit(e) {
    /* prevent the default behavior of the onsubmit event */
    e.preventDefault();

    /* Retrieving data from the form */
    const data = {};
    const fields = e.target.querySelectorAll("input, select, textarea");

    for(const field of fields) {
        data[field.name] = field.value;
    }

    console.log(data); /* email: "4857485" */
    const emailErrorMessage = validateEmail(data.email);

    /* if emailErrorMessage is not empty */
    if (emailErrorMessage) {
        /* find classname */
        const emailErrorMessageElement = document.querySelector(".c-form-field__messages");
        /* show error message to user */
        emailErrorMessageElement.innerText = emailErrorMessage;
    }

}

formEmail.addEventListener("submit", handleSubnit);

function validateEmail(email) {
    if(!email) return "Email is required";

    const isValidEmail = /^\S+@\S+$/g; /* there are characters before and after the @ symbol.  */

    if (!isValidEmail.test(email)) { /* method test checks the current String on validation by using the RegEx */
        return "Please enter a valid email";
    }

    return '';
}