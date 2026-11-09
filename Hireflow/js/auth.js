// js/auth.js
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('form[action="seeker-dashboard.html"]');
    const registerForm = document.querySelector('form[action="login.html"]');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = loginForm.querySelector('input[type="email"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;

            if (validateEmail(email) && validatePassword(password)) {
                alert("Login Successful! Redirecting to Dashboard...");
                window.location.href = "seeker-dashboard.html";
            } else {
                alert("Invalid email or password (Min 6 characters).");
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Registration Successful! Please login.");
            window.location.href = "login.html";
        });
    }
});