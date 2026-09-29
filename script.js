// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const formMessage = document.getElementById("formMessage");

        formMessage.textContent =
            "Thank you, " + name + "! Your message has been submitted.";

        contactForm.reset();

    });

}


