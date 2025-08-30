
document.addEventListener("DOMContentLoaded", () => {
    const signUp = document.getElementById("signUpLink");
    //     // Redirect to signup.html when clicking the link

    if (signUp) {
        signUp.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = "signup.html";
        });
    }
});


// for getting us into signup form
document.addEventListener("DOMContentLoaded", () => {
    const signUpForm = document.getElementById("signupForm");
     if (signUpForm) { 
        signUpForm.addEventListener("submit", function (e) {
            e.preventDefault();
       
    let validationSuccess = true;

    // regex pattern 
    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^[A-Za-z0-9!@#$%^&*/]{8,}$/;

    // Input fields
    const username = document.getElementById("userName");
    const email = document.getElementById("Email");
    const password = document.getElementById("password");

    // clear previous errors
    document.querySelectorAll(".error").forEach(clear => clear.textContent = "");

    // testing username 
    if (!namePattern.test(username.value)) {
        document.getElementById("usernameError").innerText = "Username must contain letters";
        validationSuccess = false;
    }

    //testing email
    if (!emailPattern.test(email.value)) {
        document.getElementById("EmailError").innerText = "Enter the valid Email";
        validationSuccess = false;
    }

    // testing password
    if (!passwordPattern.test(password.value)) {
        document.getElementById("PasswordError").innerText = "Password must contain 8 charaters";
        validationSuccess = false;
    }

    if (validationSuccess) {
        alert("Signup successful! Redirecting to Home...");
        signUpForm.reset();
        setTimeout(() => {
            window.location.href = "index.html"; // Go back to main page
        }, 2000);
    }
 });
    }
});
  













