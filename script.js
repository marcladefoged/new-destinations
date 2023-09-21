const form = document.querySelector("#form");
const country = document.querySelector("#country")
const destinationTitle = document.querySelector("#destination-title");
const link = document.querySelector("#link");
const arrivalDate = document.querySelector("#arrival-date");
const departureDate = document.querySelector("#departure-date");
const destinationImage = document.querySelector("#destination-image");
const description = document.querySelector("#description");
const saveButton = document.querySelector("#save-button");


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const validateInputs = () => {
        const countryValue = country.value.trim();

        let success = true
        // Country validation
    if (countryValue === '') {
        setError(countryValue, 'Country name is required!')
        success = false;
    } else {
         setSuccess(countryValue);
    }

}