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

}

formEmail.addEventListener("submit", handleSubnit);