// js/jobs.js
document.addEventListener("DOMContentLoaded", () => {
    // Apply Now বাটন হ্যান্ডলিং
    const applyBtns = document.querySelectorAll('.btn-outline, .btn-primary');
    applyBtns.forEach(btn => {
        if (btn.innerText.includes('Apply')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                alert("Application Submitted Successfully (Demo)!");
            });
        }
        if (btn.innerText.includes('Save')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.innerText = "Saved ✓";
                btn.style.color = "var(--secondary-color)";
                btn.style.borderColor = "var(--secondary-color)";
            });
        }
    });

    // Search Box
    const searchBox = document.querySelector('.search-box input');
    if (searchBox) {
        searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                alert("Searching for: " + searchBox.value);
            }
        });
    }
});