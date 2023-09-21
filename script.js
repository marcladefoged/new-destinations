const form = document.querySelector("#form");
const country = document.querySelector("#country")
const destinationTitle = document.querySelector("#destination-title");
const link = document.querySelector("#link");
const arrivalDate = document.querySelector("#arrival-date");
const departureDate = document.querySelector("#departure-date");
const destinationImage = document.querySelector("#destination-image");
const description = document.querySelector("#description");
const saveButton = document.querySelector("#save-button");


form.addEventListener('change', e => {
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
    const titleValue = destinationTitle.value.trim();
    const linkValue = link.value.trim();
    const descriptionValue = description.value.trim();


    let success = true

    // Country validation
    if (countryValue === '') {
        setError(country, 'Country name is required!')
        success = false;
    } else if (countryValue.length < 2) {
        setError(country, 'Country name needs to be atleast 2 characters long!')
        success = false;
    } else if (countryValue.length > 50) {
        setError(country, 'Country name can not be longer than 50 characters!')
    } else {
         setSuccess(country);
    }

    // Title validation
    if (titleValue === '') {
        setError(destinationTitle, 'Title is required!')
        success = false;
    } else if (titleValue.length < 2) {
        setError(destinationTitle, 'The title needs to be atleast 2 characters long!')
        success = false;
    } else if (titleValue.length > 50) {
        setError(destinationTitle, 'The title can not be longer than 50 characters!')
    } else {
        setSuccess(destinationTitle);
    }

    // Link validation

    // Regular expression to validate URLs
    const urlRegex = /^(http(s)?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\.[a-z]{2,})?([\w-./?%&=]*)?$/;


    if (linkValue === '') {
        setError(link, 'A link for the new destination is required!')
        success = false;
        
    } else if (!urlRegex.test(linkValue)) {
        // its not a valid URL
        setError(link, 'Invalid URL')
        success = false;
    } else {
        setSuccess(link);
    }


    // Image validation
    destinationImage.addEventListener('change', function () {
        if (destinationImage.files.length > 0) {
            const selectedFile = destinationImage.files[0];
            const fileName = selectedFile.name;
            const fileExtension = fileName.split('.').pop().toLowerCase();

            // Check if the file extension is valid (JPG or PNG)
            if (fileExtension !== 'jpg' || fileExtension !== 'png') {
                setError(destinationImage, 'The selected image needs to be either JPG or PNG')
                success = false;
            } else {
                setSuccess(destinationImage);

            }
        }
    })
    
    // Description validation
    if (descriptionValue === '') {
        setError(description, 'A description of the new destination is required!')
        success = false;
    } else if (descriptionValue.length < 10) {
        setError(description, 'The description needs to be atleast 10 characters long!')
        success = false;
    } else if (descriptionValue.length > 400) {
        setError(description, 'The description can not be longer than 400 characters!')
        success = false;
    } else {
        setSuccess(description);
    }



    if (success) {
        // ADD TO DESTINATIONS
    }
}