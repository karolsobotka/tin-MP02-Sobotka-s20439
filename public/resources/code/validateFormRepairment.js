function validateFormRepairment() {
    const carName = document.getElementById('car_id');
    const mechanic = document.getElementById('mechanic_id');
    const date = document.getElementById('repairment_date');

    
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
    } else if(!checkTextLengthRange(carName.value, 1, 1)){
        valid = false;
        carName.classList.add('error-input');
        errorCar.innerText = "Pole powinno zawierać auto wybrane z listy";
    }

    if(!checkRequired(mechanic.value)){
        valid = false;
        mechanic.classList.add('error-input');
        errorMechanic.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(mechanic.value, 1, 1)){
        valid = false;
        mechanic.classList.add('error-input');
        errorMechanic.innerText = "Pole powinno zawierac mechanika wybranego z listy";
    }

    if(!checkRequired(date.value)){
        valid = false;
        date.classList.add('error-input');
        errorDate.innerText = "Pole wymagane";
    }


    if(!valid){
        errorSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}