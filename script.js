function submitForm() {
    // Get values
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value.trim();

    // Error elements
    let isValid = true;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    if (name === "") {
        nameError.innerText = "Name is required";
        isValid = false;
    }

    if (age === "") {
        ageError.innerText = "Age is required";
        isValid = false;
    }

    if (gender === "") {
        genderError.innerText = "Gender is required";
        isValid = false;
    }

    if (email === "") {
        emailError.innerText = "Email is required";
        isValid = false;
    }

    // If valid → show next page
    if (isValid) {
        document.getElementById("formCard").style.display = "none";
        document.getElementById("resultCard").style.display = "block";

        rName.innerText = name;
        rAge.innerText = age;
        rGender.innerText = gender;
        rEmail.innerText = email;
    }
}