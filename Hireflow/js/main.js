// js/main.js
document.addEventListener("DOMContentLoaded", () => {
    console.log("HireFlow UI Loaded Successfully!");

    // Navbar-এর Notification Bell বা Profile Pic-এ ক্লিক করলে অ্যালার্ট
    const authLinks = document.querySelectorAll('.nav-actions a');
    authLinks.forEach(link => {
        if (link.innerText.includes('Logout')) {
            link.addEventListener('click', (e) => {
                if(!confirm("Do you want to logout?")) {
                    e.preventDefault();
                }
            });
        }
    });
});