function submitForm(){

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

    let firstNameError = "";
    let lastNameError = "";
    let emailError = "";
    let passwordError = "";

    if (firstName === "") {
        firstNameError = "First Name cannot be empty";
        document.getElementById("first-name-error").textContent = firstNameError;
        document.getElementById("first-name").classList.add("error");
    } else {
        document.getElementById("first-name-error").textContent = "";
        document.getElementById("first-name").classList.remove("error");
    }

    if (lastName === "") {
        lastNameError = "Last Name cannot be empty";
        document.getElementById("last-name-error").textContent = lastNameError;
        document.getElementById("last-name").classList.add("error");
    } else {
        document.getElementById("last-name-error").textContent = "";
        document.getElementById("last-name").classList.remove("error");
    }

    if (email === "" || !er.test(email)) {
        emailError = "Looks like this is not an email";
        document.getElementById("email-error").textContent = emailError;
        document.getElementById("email").classList.add("error");
    } else {
        document.getElementById("email-error").textContent = "";
        document.getElementById("email").classList.remove("error");
    }

    if (password === "") {
        passwordError = "Password cannot be empty";
        document.getElementById("password-error").textContent = passwordError;
        document.getElementById("password").classList.add("error");
    } else {
        document.getElementById("password-error").textContent = "";
        document.getElementById("password").classList.remove("error");
    }
 
    if (firstName !== "" && lastName !== "" && email !== "" && password !== "" && er.test(email)) {
        alert('Enviamos os dados para seu email!')

        
        document.getElementById("last-name-error").textContent = "";
        document.getElementById("email-error").textContent = "";
        document.getElementById("password-error").textContent = "";

        cleanInputs()
    }
}

function cleanInputs() {
firstName.value = "";
lastName.value = "";
email.value = "";
password.value = "";
}