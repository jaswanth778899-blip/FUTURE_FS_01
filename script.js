/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const visitorEmail =
        document.getElementById("visitorEmail").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !visitorEmail || !subject || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    const emailBody = `
Hello Jaswanth,

You received a new message from your portfolio website.

Name:
${name}

Email:
${visitorEmail}

Subject:
${subject}

Message:
${message}
    `;


    const mailtoLink =
        `mailto:jaswanth778899@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;


    window.location.href = mailtoLink;


    formMessage.textContent =
        "Opening your email application...";


    setTimeout(() => {

        contactForm.reset();

    }, 1000);

});


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();