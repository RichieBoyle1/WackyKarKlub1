// Run when the page loads
document.addEventListener('DOMContentLoaded', function () {

    const select = document.getElementById("filter-Merchandise");
    const cards = document.querySelectorAll(".card");
    const clearBtn = document.getElementById("product-clear");

    function filterProducts() {
        const choice = select.value;

        cards.forEach(card => {
            const category = card.dataset.merchandise;

            if (choice === "" || category === choice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Run filter when dropdown changes
    select.addEventListener("change", filterProducts);

    // Clear button
    if (clearBtn) {
        clearBtn.addEventListener("click", function () {
            select.value = "";
            filterProducts();
        });
    }

    // Run once on page load
    filterProducts();

});

// Validation for contact form submission //
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic completion validation
        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        // Check for '@' in email
        if (!email.includes("@")) {
            alert("Please enter a valid email address!");
            return;
        }

        // If all validation passes
        alert("Message sent successfully!");
        contactForm.reset(); // Clear the form
    });
}

 

