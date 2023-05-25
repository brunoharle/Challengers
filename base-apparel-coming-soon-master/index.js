const $btnSubmit = document.querySelector('#btn-submit');
const $email = document.getElementById('email');
const $iconError = document.querySelector('.icon-error');

var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);

$btnSubmit.addEventListener('click', validateEmail);

function validateEmail(e) {
    e.preventDefault();

    const emailValue = $email.value;
    
    if(emailValue === "" || !er.test(emailValue)){
        let emailError = "Please provide a valid email";
        document.getElementById('email-error').textContent = emailError;
        $iconError.style.display = 'flex';
        $email.classList.add("error");

    } else {
        document.getElementById('email-error').textContent = "";
        $iconError.style.display = 'none';
        $email.classList.remove("error");
        alert('Email cadastrado com sucesso');
        cleanInput();
    }
}

function cleanInput() {
    $email.value = "";
}
