// ===============================
// Welcome Message
// ===============================

window.addEventListener("load", function () {
    console.log("Welcome to RenuBrew Café!");
});

// ===============================
// Reservation Form
// ===============================

const reservationForm = document.querySelector(".reservation-form form");

if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Your table has been booked successfully!\n\nThank you for choosing RenuBrew Café.");

        reservationForm.reset();
    });
}

// ===============================
// Contact Form
// ===============================

const contactForm = document.querySelector(".contact-form form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("📩 Thank you! Your message has been sent successfully.");

        contactForm.reset();
    });
}

// ===============================
// Login Form
// ===============================

const loginForm = document.querySelector(".login-box form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("☕ Welcome to RenuBrew Café!");

        loginForm.reset();
    });
}

// ===============================
// Menu Search
// ===============================

const searchInput = document.querySelector(".search-box input");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".menu-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

}

// ===============================
// Order Buttons
// ===============================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

    button.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🛒 Item added to cart!");

    });

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (href && href.startsWith("#")) {

            e.preventDefault();

            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});