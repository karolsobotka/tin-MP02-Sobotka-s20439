function validateFormCar() {
    const marka = document.getElementById('maker');
    const model = document.getElementById('model');
    const plates = document.getElementById('car-plates');
    const errorSummary = document.getElementById('errorsSummary');

    const errorMaker = document.getElementById('errorMaker');
    const errorModel = document.getElementById('errorModel');
    const errorPlates = document.getElementById('errorCarPlates');

    resetErrors([marka, model, plates], [errorMaker, errorModel, errorPlates], errorSummary);

    let valid = true;

    if(!checkRequired(marka.value)){
        valid = false;
        marka.classList.add('error-input');
        errorMaker.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(marka.value, 2, 60)){
        valid = false;
        marka.classList.add('error-input');
        errorMaker.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }

    if(!checkRequired(model.value)){
        valid = false;
        model.classList.add('error-input');
        errorModel.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(model.value, 2, 60)){
        valid = false;
        model.classList.add('error-input');
        errorModel.innerText = "Pole powinno zawierac od 2 do 60 znaków";
    }


    if(!checkRequired(plates.value)){
        valid = false;
        plates.classList.add('error-input');
        errorPlates.innerText = "Pole jest wymagane";
    } else if(!checkTextLengthRange(plates.value, 3, 7)){
        valid = false;
        plates.classList.add('error-input');
        errorModel.innerText = "Pole powinno zawierac od 3 do 7 znaków";
    }

    if(!valid){
        errorsSummary.innerText = "Formularz zawiera błędy"
    }

    return valid;

}
