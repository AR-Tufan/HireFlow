// js/validation.js
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6; // পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে
}