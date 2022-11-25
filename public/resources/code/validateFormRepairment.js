function validateFormRepairment() {
    const carName = document.getElementById('carName');
    const mechanic = document.getElementById('mechanic');
    const date = document.getElementById('repairDate');

    
    const errorCar = document.getElementById('errorCar');
    const errorMechanic = document.getElementById('errorMechanic');
    const errorDate = document.getElementById('errorRepairDate');
 
    const errorSummary  = document.getElementById('errorsSummary');

    console.log(carName+ ", "+mechanic+", "+date+", "+errorSummary+", "+errorCar+", "+errorDate+", "+errorMechanic)

    resetErrors([carName, mechanic, date], [errorCar, errorMechanic, errorDate], errorSummary);

    let valid = true;

    if(!checkRequired(carName.value)){
        valid = false;
        carName.classList.add('error-input');
        errorCar.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(carName.value, 2, 60)){
        valid = false;
        carName.classList.add('error-input');
        errorCar.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!checkRequired(mechanic.value)){
        valid = false;
        mechanic.classList.add('error-input');
        errorMechanic.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(mechanic.value, 2, 60)){
        valid = false;
        mechanic.classList.add('error-input');
        errorMechanic.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!checkRequired(date.value)){
        valid = false;
        date.classList.add('error-input');
        errorDate.innerText = "Pole wymagane";
    }


    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}