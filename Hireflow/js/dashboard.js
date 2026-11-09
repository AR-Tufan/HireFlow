// js/dashboard.js
document.addEventListener("DOMContentLoaded", () => {
    // Shortlist / Reject / Remove বাটন
    const actionBtns = document.querySelectorAll('button');
    actionBtns.forEach(btn => {
        const text = btn.innerText.toLowerCase();
        
        if (text.includes('shortlist')) {
            btn.addEventListener('click', () => {
                alert("Candidate Shortlisted!");
                btn.innerText = "Shortlisted ✓";
                btn.style.background = "var(--secondary-color)";
                btn.style.color = "white";
            });
        }
        
        if (text.includes('reject') || text.includes('remove')) {
            btn.addEventListener('click', (e) => {
                if(confirm("Are you sure you want to do this?")) {
                    alert("Action completed successfully.");
                    btn.closest('tr').style.opacity = "0.5"; // রো টি ফ্যাকাশে করে দিবে
                }
            });
        }
    });
});