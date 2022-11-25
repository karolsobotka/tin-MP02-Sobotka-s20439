
function validateFormEmployee() {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phoneNumber = document.getElementById('phoneNumber');
    const address = document.getElementById('address');
    const errorSummary = document.getElementById('errorsSummary');

    const errorFirstName = document.getElementById('errorFirstName');
    const errorLastName = document.getElementById('errorLastName');
    const errorPhoneNumber = document.getElementById('errorPhoneNumber');
    const errorAddress = document.getElementById('errorAddress');

    resetErrors([firstName, lastName, phoneNumber, address], 
        [errorFirstName, errorLastName, errorPhoneNumber, errorAddress], errorSummary);

    let valid = true;

    if(!checkRequired(firstName.value)){
        valid = false;
        firstName.classList.add('error-input');
        errorFirstName.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(firstName.value, 2, 60)){
        valid = false;
        firstName.classList.add('error-input');
        errorFirstName.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!checkRequired(lastName.value)){
        valid = false;
        lastName.classList.add('error-input');
        errorLastName.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(lastName.value, 2, 60)){
        valid = false;
        lastName.classList.add('error-input');
        errorLastName.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    checkPhoneNumber();

    if(!checkRequired(phoneNumber.value)){
        valid = false;
        phoneNumber.classList.add('error-input');
        errorPhoneNumber.innerText = "Pole jest wymagane";
    }

    if(!checkRequired(address.value)){
        valid = false;
        address.classList.add('error-input');
        errorAddress.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(address.value, 2, 60)){
        valid = false;
        address.classList.add('error-input');
        errorAddress.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}