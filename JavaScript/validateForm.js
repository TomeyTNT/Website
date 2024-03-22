function validateForm() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let fullNameError = document.getElementById("fullNameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");

    fullNameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";

    let isValid = true;

    if (fullName === "") {
        fullNameError.innerHTML = "Full Name is required.";
        isValid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Email Address is required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Invalid Email Address.";
        isValid = false;
    }

    if (message === "") {
        messageError.innerHTML = "Message is required.";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Simple email validation regex
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
