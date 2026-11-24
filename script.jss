
// Mobile navigation menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu after selecting a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Automatically display the current year
document.getElementById("year").textContent =
    new Date().getFullYear();

// Update these with your actual contact details
const email = "sonymugalkhod@gmail.com";
const linkedin = "www.linkedin.com/in/sony-mugalkhod-589bb4357";

const emailLink = document.getElementById("email-link");
const linkedinLink = document.getElementById("linkedin-link");

emailLink.href = `mailto:${email}`;
linkedinLink.href = linkedin;

// Avoid opening an empty LinkedIn link
if (linkedin === "YOUR_LINKEDIN_PROFILE_URL") {
    linkedinLink.addEventListener("click", function (event) {
        event.preventDefault();
        alert("Add your LinkedIn profile URL in script.js first!");
    });
}
