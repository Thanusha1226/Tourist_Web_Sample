// ============================
// HEADER SCROLL
// ============================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ============================
// MOBILE MENU
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close menu after link click

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ============================
// SEARCH
// ============================

const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

    const destination =
        document.getElementById("destinationSelect").value;

    const travelDate =
        document.getElementById("travelDate").value;

    const travelers =
        document.getElementById("travelerSelect").value;


    if (!destination) {

        alert("Please select a destination.");

        return;

    }


    if (!travelDate) {

        alert("Please select your travel date.");

        return;

    }


    alert(
        "Great choice!\n\n" +
        "Destination: " + destination +
        "\nDate: " + travelDate +
        "\nTravelers: " + travelers +
        "\n\nPlease send us an inquiry below."
    );


    document
        .getElementById("contact")
        .scrollIntoView({
            behavior: "smooth"
        });

});


// ============================
// CONTACT FORM VALIDATION
// ============================

const contactForm =
    document.getElementById("contactForm");

const submitButton =
    document.getElementById("submitButton");

const submitText =
    document.getElementById("submitText");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    // Browser validation
    if (!contactForm.checkValidity()) {

        event.preventDefault();

        contactForm.reportValidity();

        formMessage.style.color = "#d9534f";

        formMessage.textContent =
            "Please complete all required fields.";

        return;

    }


    // Extra validation

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const subject =
        document.getElementById("subject").value;

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        subject === "" ||
        message === ""
    ) {

        event.preventDefault();

        formMessage.style.color = "#d9534f";

        formMessage.textContent =
            "All fields are required.";

        return;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        event.preventDefault();

        formMessage.style.color = "#d9534f";

        formMessage.textContent =
            "Please enter a valid email address.";

        return;

    }


    // Show sending state

    submitButton.disabled = true;

    submitText.textContent =
        "Sending...";

    formMessage.style.color = "#356859";

    formMessage.textContent =
        "Sending your inquiry...";

});


// ============================
// TESTIMONIALS
// ============================

const testimonials = [

    {
        text:
            `"Everything was perfectly organized.
            Our guide was incredibly knowledgeable and friendly.
            Sri Lanka exceeded every expectation."`,

        name:
            "James Mitchell",

        country:
            "United Kingdom",

        initials:
            "JM"
    },

    {
        text:
            `"The entire journey was beautiful.
            From Ella to the southern coast,
            every day was something special."`,

        name:
            "Sophie Martin",

        country:
            "France",

        initials:
            "SM"
    },

    {
        text:
            `"We loved the personal service
            and local experiences.
            I would absolutely visit Sri Lanka again."`,

        name:
            "Daniel Walker",

        country:
            "Australia",

        initials:
            "DW"
    }

];


let testimonialIndex = 0;


const testimonialText =
    document.getElementById("testimonialText");

const testimonialName =
    document.getElementById("testimonialName");

const testimonialCountry =
    document.getElementById("testimonialCountry");

const testimonialAvatar =
    document.getElementById("testimonialAvatar");


function showTestimonial(index) {

    testimonialText.textContent =
        testimonials[index].text;

    testimonialName.textContent =
        testimonials[index].name;

    testimonialCountry.textContent =
        testimonials[index].country;

    testimonialAvatar.textContent =
        testimonials[index].initials;

}


document
    .getElementById("nextTestimonial")
    .addEventListener("click", () => {

        testimonialIndex++;

        if (
            testimonialIndex >=
            testimonials.length
        ) {

            testimonialIndex = 0;

        }

        showTestimonial(testimonialIndex);

    });


document
    .getElementById("prevTestimonial")
    .addEventListener("click", () => {

        testimonialIndex--;

        if (testimonialIndex < 0) {

            testimonialIndex =
                testimonials.length - 1;

        }

        showTestimonial(testimonialIndex);

    });


// ============================
// COUNTER
// ============================

const counters =
    document.querySelectorAll("[data-target]");


const counterObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                const counter =
                    entry.target;

                const target =
                    Number(
                        counter.getAttribute(
                            "data-target"
                        )
                    );


                let count = 0;

                const duration = 1500;

                const increment =
                    Math.max(
                        1,
                        Math.ceil(
                            target /
                            (duration / 20)
                        )
                    );


                const timer =
                    setInterval(() => {

                        count += increment;


                        if (count >= target) {

                            counter.textContent =
                                target.toLocaleString();

                            clearInterval(timer);

                        } else {

                            counter.textContent =
                                count.toLocaleString();

                        }

                    }, 20);


                counterObserver.unobserve(counter);

            });

        },

        {
            threshold: 0.5
        }

    );


counters.forEach(counter => {

    counterObserver.observe(counter);

});


// ============================
// GALLERY LIGHTBOX
// ============================

const galleryItems =
    document.querySelectorAll(".gallery-item");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxClose =
    document.getElementById("lightboxClose");


galleryItems.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow =
            "hidden";

    });

});


function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow =
        "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeLightbox();

        }

    }
);


// ============================
// BACK TO TOP
// ============================

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (
        window.scrollY > 500
    ) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


// ============================
// CURRENT YEAR
// ============================

document.getElementById(
    "currentYear"
).textContent =
    new Date().getFullYear();


// ============================
// DATE MINIMUM
// ============================

const travelDateInput =
    document.getElementById("travelDate");


if (travelDateInput) {

    const today =
        new Date();

    today.setMinutes(
        today.getMinutes() -
        today.getTimezoneOffset()
    );

    travelDateInput.min =
        today
            .toISOString()
            .split("T")[0];

}


// ============================
// SCROLL ANIMATION
// ============================

const revealItems =
    document.querySelectorAll(
        ".destination-card, .tour-card, .feature, .contact-detail"
    );


revealItems.forEach(item => {

    item.classList.add("fade-in");

});


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealItems.forEach(item => {

    revealObserver.observe(item);

});