
document.addEventListener("DOMContentLoaded", () => {

// Redirect to signup.html when clicking the link
    document.getElementById("signUpLink").addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "signup.html";
    });


document.getElementById("signupForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Signup successful! Redirecting to Home...");
      setTimeout(() => {
        window.location.href = "index.html"; // Go back to main page
      }, 2000);
    });

})










