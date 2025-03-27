function initializeErrors() {
    document.getElementById("nameError").innerText = "This field is required";
    document.getElementById("emailError").innerText = "A valid email is required";
    document.getElementById("websiteError").innerText = "A valid URL is required";
    document.getElementById("messageError").innerText = "This field is required";

    document.getElementById("name").classList.add("error-border");
    document.getElementById("email").classList.add("error-border");
    document.getElementById("website").classList.add("error-border");
    document.getElementById("message").classList.add("error-border");
}

function validateName() {
    let name = document.getElementById("name");
    let nameError = document.getElementById("nameError");

    if (name.value.trim() === "") {
        nameError.innerText = "This field is required";
        name.classList.add("error-border");
    } else {
        nameError.innerText = "";
        name.classList.remove("error-border");
    }
}

function validateEmail() {
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.value.trim() === "") {
        emailError.innerText = "A valid email is required";
        email.classList.add("error-border");
    } else if (!email.value.match(emailPattern)) {
        emailError.innerText = "Enter a valid email (e.g., example@mail.com)";
        email.classList.add("error-border");
    } else {
        emailError.innerText = "";
        email.classList.remove("error-border");
    }
}

function validateWebsite() {
    let website = document.getElementById("website");
    let websiteError = document.getElementById("websiteError");
    let urlPattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,6}(\.[a-z]{2,6})?(\/[^\s]*)?$/;

    if (website.value.trim() === "") {
        websiteError.innerText = "A valid URL is required";
        website.classList.add("error-border");
    } else if (!website.value.match(urlPattern)) {
        websiteError.innerText = "Enter a valid URL (e.g., https://example.com)";
        website.classList.add("error-border");
    } else {
        websiteError.innerText = "";
        website.classList.remove("error-border");
    }
}

function validateMessage() {
    let message = document.getElementById("message");
    let messageError = document.getElementById("messageError");

    if (message.value.trim() === "") {
        messageError.innerText = "This field is required";
        message.classList.add("error-border");
    } else {
        messageError.innerText = "";
        message.classList.remove("error-border");
    }
}

function validateForm() {
    validateName();
    validateEmail();
    validateWebsite();
    validateMessage();

    // Check if any error messages exist
    if (document.getElementById("nameError").innerText !== "" ||
        document.getElementById("emailError").innerText !== "" ||
        document.getElementById("websiteError").innerText !== "" ||
        document.getElementById("messageError").innerText !== "") {
        return false; // Prevent form submission
    }
    return true; // Allow form submission
}
