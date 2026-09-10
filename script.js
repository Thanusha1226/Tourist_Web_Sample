/* =========================================
   ROOT
========================================= */

:root {

    --primary: #d66b35;
    --primary-dark: #b65324;

    --dark: #17231d;
    --dark-2: #26362d;

    --cream: #f8f5ef;
    --cream-dark: #eee9df;

    --white: #ffffff;
    --text: #536057;
    --light-text: #8b968f;

    --border: #e4e0d8;

    --heading-font: "Playfair Display", serif;
    --body-font: "DM Sans", sans-serif;

    --container: 1180px;

    --shadow:
        0 20px 50px rgba(23, 35, 29, 0.10);

    --transition:
        all 0.35s ease;
}


/* =========================================
   RESET
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--body-font);
    color: var(--dark);
    background: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input,
textarea,
select {
    font-family: inherit;
}

img {
    width: 100%;
    display: block;
}

button {
    cursor: pointer;
    border: none;
}


/* =========================================
   GLOBAL
========================================= */

.container {
    width: min(var(--container), calc(100% - 40px));
    margin: auto;
}

.section {
    padding: 110px 0;
}

.section-label {
    display: block;
    color: var(--primary);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 2.5px;
    margin-bottom: 16px;
}

.section-label.light {
    color: #ffd4b9;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 50px;
    margin-bottom: 55px;
}

.section-heading.center {
    align-items: center;
}

.section-heading h2,
.why-content h2,
.contact-info h2 {
    font-family: var(--heading-font);
    font-size: clamp(40px, 5vw, 62px);
    line-height: 1.05;
    font-weight: 600;
    color: var(--dark);
}

.section-heading h2 span,
.why-content h2 span,
.contact-info h2 span,
.booking-content h2 span {
    color: var(--primary);
}

.section-heading > p {
    max-width: 400px;
    color: var(--text);
}


/* =========================================
   BUTTONS
========================================= */

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;

    padding: 15px 25px;

    border-radius: 4px;

    font-size: 14px;
    font-weight: 700;

    transition: var(--transition);
}

.btn i {
    transition: var(--transition);
}

.btn:hover i {
    transform: translateX(4px);
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
}

.btn-outline {
    color: white;
    border: 1px solid rgba(255,255,255,.7);
}

.btn-outline:hover {
    background: white;
    color: var(--dark);
}

.btn-dark {
    background: var(--dark);
    color: white;
}

.btn-dark:hover {
    background: var(--primary);
}


/* =========================================
   HEADER
========================================= */

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    z-index: 1000;

    padding: 22px 0;

    color: white;

    transition: var(--transition);
}

.header.scrolled {
    background: rgba(23,35,29,.97);
    padding: 13px 0;
    box-shadow: 0 5px 25px rgba(0,0,0,.12);
}

.nav-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;

    font-family: var(--heading-font);
    font-size: 22px;
    font-weight: 700;

    line-height: 1;
}

.logo small {
    display: block;
    font-family: var(--body-font);
    font-size: 7px;
    letter-spacing: 3px;
    margin-top: 4px;
}

.logo-icon {
    width: 42px;
    height: 42px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(255,255,255,.6);
    border-radius: 50%;

    color: white;
    font-size: 16px;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-link {
    position: relative;

    font-size: 13px;
    font-weight: 600;

    color: rgba(255,255,255,.85);

    transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
    color: white;
}

.nav-link::after {
    content: "";

    position: absolute;
    left: 0;
    bottom: -8px;

    width: 0;
    height: 2px;

    background: var(--primary);

    transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-book-btn {
    padding: 12px 20px;

    background: var(--primary);

    font-size: 13px;
    font-weight: 700;

    border-radius: 3px;

    transition: var(--transition);
}

.nav-book-btn:hover {
    background: var(--primary-dark);
}

.menu-toggle {
    display: none;

    width: 42px;
    height: 42px;

    background: transparent;

    color: white;

    font-size: 20px;
}


/* =========================================
   HERO
========================================= */

.hero {
    min-height: 850px;

    position: relative;

    display: flex;
    align-items: center;

    background-image:
        url("https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2000&q=90");

    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    color: white;
}

.hero-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(7,17,12,.82) 0%,
            rgba(7,17,12,.50) 45%,
            rgba(7,17,12,.12) 100%
        );
}

.hero-content {
    position: relative;
    z-index: 2;

    padding-top: 100px;
}

.hero-small-title {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    font-size: 13px;
    font-weight: 700;

    letter-spacing: 2px;
    text-transform: uppercase;

    color: #ffd5bd;

    margin-bottom: 25px;
}

.hero h1 {
    max-width: 760px;

    font-family: var(--heading-font);

    font-size: clamp(58px, 8vw, 100px);

    line-height: .98;

    font-weight: 600;
}

.hero h1 span {
    color: #f08a4b;
    font-style: italic;
}

.hero-content > p {
    max-width: 580px;

    margin: 30px 0;

    color: rgba(255,255,255,.82);

    font-size: 17px;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.hero-scroll {
    position: absolute;

    bottom: 35px;
    left: 50%;

    transform: translateX(-50%);

    z-index: 2;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 8px;

    color: rgba(255,255,255,.75);

    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
}

.hero-scroll i {
    animation: scrollArrow 1.5s infinite;
}

@keyframes scrollArrow {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(7px);
    }
}


/* =========================================
   SEARCH
========================================= */

.trip-search {
    position: relative;
    z-index: 10;

    margin-top: -45px;
}

.search-card {
    background: white;

    padding: 20px 25px;

    display: grid;

    grid-template-columns:
        1fr
        1fr
        1fr
        auto;

    align-items: center;

    box-shadow: var(--shadow);

    border-radius: 6px;
}

.search-item {
    display: flex;
    align-items: center;
    gap: 15px;

    padding: 8px 20px;

    border-right: 1px solid var(--border);
}

.search-item > i {
    color: var(--primary);
    font-size: 22px;
}

.search-item label {
    display: block;

    color: var(--light-text);

    font-size: 11px;
    font-weight: 600;

    text-transform: uppercase;
    letter-spacing: 1px;
}

.search-item select,
.search-item input {
    border: none;
    outline: none;

    color: var(--dark);

    background: transparent;

    font-size: 14px;
    font-weight: 600;

    width: 100%;
}

.search-btn {
    display: flex;
    align-items: center;
    gap: 10px;

    padding: 17px 25px;

    margin-left: 15px;

    background: var(--primary);
    color: white;

    border-radius: 4px;

    font-weight: 700;

    transition: var(--transition);
}

.search-btn:hover {
    background: var(--primary-dark);
}


/* =========================================
   DESTINATIONS
========================================= */

.destination-grid {
    display: grid;

    grid-template-columns: 1.4fr 1fr 1fr;

    gap: 18px;
}

.destination-card {
    position: relative;

    height: 460px;

    overflow: hidden;

    border-radius: 5px;
}

.destination-card::after {
    content: "";

    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            to top,
            rgba(5,12,8,.78),
            transparent 55%
        );
}

.destination-card img {
    height: 100%;

    object-fit: cover;

    transition: transform .7s ease;
}

.destination-card:hover img {
    transform: scale(1.07);
}

.destination-info {
    position: absolute;

    z-index: 2;

    bottom: 30px;
    left: 30px;

    color: white;
}

.destination-info span {
    color: #ffd0b5;

    font-size: 11px;
    font-weight: 700;

    letter-spacing: 2px;
    text-transform: uppercase;
}

.destination-info h3 {
    font-family: var(--heading-font);

    font-size: 36px;

    margin: 5px 0 8px;
}

.destination-info div {
    font-size: 12px;
    opacity: .85;
}


/* =========================================
   WHY
========================================= */

.why-section {
    background: var(--cream);
    padding: 120px 0;
}

.why-grid {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 100px;

    align-items: center;
}

.why-image {
    position: relative;
}

.why-image > img {
    height: 650px;

    object-fit: cover;

    border-radius: 5px;
}

.experience-badge {
    position: absolute;

    right: -35px;
    bottom: 40px;

    width: 155px;
    height: 155px;

    background: var(--primary);
    color: white;

    border-radius: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

    box-shadow: 0 15px 40px rgba(214,107,53,.25);
}

.experience-badge strong {
    font-family: var(--heading-font);

    font-size: 48px;

    line-height: 1;
}

.experience-badge span {
    font-size: 11px;

    margin-top: 5px;

    line-height: 1.4;
}

.why-content > p {
    color: var(--text);

    margin: 25px 0;

    max-width: 560px;
}

.features {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 28px;

    margin-top: 40px;
}

.feature {
    display: flex;

    gap: 15px;
}

.feature-icon {
    flex-shrink: 0;

    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: white;

    color: var(--primary);

    box-shadow: 0 5px 20px rgba(0,0,0,.05);
}

.feature h4 {
    margin-bottom: 3px;

    font-size: 14px;
}

.feature p {
    color: var(--light-text);

    font-size: 12px;

    line-height: 1.5;
}


/* =========================================
   TOURS
========================================= */

.tours {
    background: white;
}

.tour-grid {
    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 25px;
}

.tour-card {
    background: white;

    border: 1px solid var(--border);

    border-radius: 5px;

    overflow: hidden;

    transition: var(--transition);
}

.tour-card:hover {
    transform: translateY(-8px);

    box-shadow: var(--shadow);
}

.tour-image {
    position: relative;

    height: 260px;

    overflow: hidden;
}

.tour-image img {
    height: 100%;

    object-fit: cover;

    transition: transform .6s ease;
}

.tour-card:hover .tour-image img {
    transform: scale(1.06);
}

.tour-tag {
    position: absolute;

    top: 18px;
    left: 18px;

    padding: 7px 12px;

    background: var(--primary);

    color: white;

    font-size: 10px;
    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 1px;
}

.tour-content {
    padding: 25px;
}

.tour-meta {
    display: flex;

    gap: 18px;

    color: var(--light-text);

    font-size: 11px;

    margin-bottom: 12px;
}

.tour-meta i {
    color: var(--primary);

    margin-right: 4px;
}

.tour-content h3 {
    font-family: var(--heading-font);

    font-size: 27px;

    line-height: 1.15;

    margin-bottom: 12px;
}

.tour-content > p {
    color: var(--text);

    font-size: 13px;

    min-height: 63px;
}

.tour-bottom {
    display: flex;

    align-items: center;
    justify-content: space-between;

    margin-top: 22px;

    padding-top: 20px;

    border-top: 1px solid var(--border);
}

.price {
    color: var(--light-text);

    font-size: 10px;

    display: flex;
    flex-direction: column;
}

.price strong {
    color: var(--dark);

    font-size: 20px;
}

.tour-link {
    color: var(--primary);

    font-size: 12px;
    font-weight: 700;
}

.tour-link i {
    margin-left: 5px;

    transition: var(--transition);
}

.tour-link:hover i {
    transform: translateX(5px);
}

.center-btn {
    text-align: center;

    margin-top: 50px;
}


/* =========================================
   STATS
========================================= */

.stats-section {
    background: var(--dark);

    padding: 70px 0;

    color: white;
}

.stats-grid {
    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    text-align: center;
}

.stat {
    border-right: 1px solid rgba(255,255,255,.1);
}

.stat:last-child {
    border-right: none;
}

.stat strong {
    display: block;

    font-family: var(--heading-font);

    font-size: 52px;

    color: #f08a4b;

    line-height: 1;
}

.stat span {
    display: block;

    color: rgba(255,255,255,.6);

    font-size: 12px;

    margin-top: 8px;
}


/* =========================================
   GALLERY
========================================= */

.gallery-section {
    background: var(--cream);
}

.gallery-grid {
    display: grid;

    grid-template-columns:
        1.3fr
        1fr
        1fr;

    grid-template-rows:
        280px
        280px;

    gap: 15px;
}

.gallery-item {
    position: relative;

    overflow: hidden;

    border-radius: 4px;

    cursor: pointer;
}

.gallery-item.gallery-tall {
    grid-row: span 2;
}

.gallery-item img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    transition: transform .6s ease;
}

.gallery-item:hover img {
    transform: scale(1.07);
}

.gallery-overlay {
    position: absolute;

    inset: 0;

    background: rgba(0,0,0,.3);

    display: grid;
    place-items: center;

    opacity: 0;

    transition: var(--transition);
}

.gallery-overlay i {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: white;

    color: var(--dark);
}

.gallery-item:hover .gallery-overlay {
    opacity: 1;
}


/* =========================================
   TESTIMONIAL
========================================= */

.testimonial-section {
    padding: 100px 0;

    background: white;
}

.testimonial-box {
    position: relative;

    max-width: 900px;

    margin: auto;

    padding: 70px 90px;

    background: var(--cream);

    border-radius: 5px;

    display: flex;

    gap: 40px;
}

.quote-icon {
    flex-shrink: 0;

    font-size: 48px;

    color: var(--primary);
}

.testimonial-content {
    flex: 1;
}

.stars {
    color: var(--primary);

    letter-spacing: 3px;

    margin-bottom: 20px;
}

.testimonial-content > p {
    font-family: var(--heading-font);

    font-size: 25px;

    line-height: 1.5;

    color: var(--dark);

    margin-bottom: 30px;
}

.testimonial-author {
    display: flex;

    align-items: center;

    gap: 12px;
}

.author-avatar {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--primary);

    color: white;

    font-size: 12px;
    font-weight: 700;
}

.testimonial-author strong,
.testimonial-author span {
    display: block;
}

.testimonial-author strong {
    font-size: 13px;
}

.testimonial-author span {
    color: var(--light-text);

    font-size: 11px;
}

.testimonial-controls {
    position: absolute;

    right: 35px;
    bottom: 35px;

    display: flex;

    gap: 8px;
}

.testimonial-controls button {
    width: 40px;
    height: 40px;

    border: 1px solid var(--border);

    background: white;

    color: var(--dark);

    transition: var(--transition);
}

.testimonial-controls button:hover {
    background: var(--primary);
    color: white;
}


/* =========================================
   BOOKING
========================================= */

.booking-section {
    position: relative;

    min-height: 550px;

    display: flex;
    align-items: center;

    background:
        url("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=2000&q=90")
        center / cover fixed;

    color: white;
}

.booking-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(15,29,21,.90),
            rgba(15,29,21,.48)
        );
}

.booking-content {
    position: relative;
    z-index: 2;

    text-align: center;
}

.booking-content h2 {
    font-family: var(--heading-font);

    font-size: clamp(45px, 6vw, 75px);

    line-height: 1.05;

    max-width: 800px;

    margin: auto;
}

.booking-content > p {
    color: rgba(255,255,255,.75);

    margin: 25px auto 35px;

    max-width: 550px;
}


/* =========================================
   CONTACT
========================================= */

.contact-section {
    background: var(--cream);
}

.contact-grid {
    display: grid;

    grid-template-columns: .85fr 1.15fr;

    gap: 100px;
}

.contact-info > p {
    max-width: 480px;

    color: var(--text);

    margin: 25px 0 40px;
}

.contact-details {
    display: flex;

    flex-direction: column;

    gap: 22px;
}

.contact-detail {
    display: flex;

    align-items: center;

    gap: 15px;
}

.contact-icon {
    width: 48px;
    height: 48px;

    display: grid;
    place-items: center;

    background: white;

    color: var(--primary);

    border-radius: 50%;
}

.contact-detail span,
.contact-detail strong {
    display: block;
}

.contact-detail span {
    color: var(--light-text);

    font-size: 11px;

    margin-bottom: 2px;
}

.contact-detail strong {
    font-size: 14px;
}

.contact-form {
    background: white;

    padding: 40px;

    box-shadow: 0 15px 40px rgba(0,0,0,.05);

    border-radius: 5px;
}

.form-row {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;

    font-size: 11px;
    font-weight: 700;

    margin-bottom: 7px;

    color: var(--dark);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--border);

    outline: none;

    background: white;

    color: var(--dark);

    font-size: 13px;

    border-radius: 3px;

    transition: var(--transition);
}

.form-group textarea {
    resize: vertical;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--primary);

    box-shadow:
        0 0 0 3px rgba(214,107,53,.08);
}

.submit-btn {
    width: 100%;
}

.form-message {
    margin-top: 15px;

    text-align: center;

    font-size: 12px;
}


/* =========================================
   FOOTER
========================================= */

.footer {
    background: #111b15;

    color: white;

    padding-top: 75px;
}

.footer-grid {
    display: grid;

    grid-template-columns: 2fr 1fr 1fr 1fr;

    gap: 50px;

    padding-bottom: 60px;
}

.footer-about {
    max-width: 330px;
}

.footer-logo {
    margin-bottom: 20px;
}

.footer-about p {
    color: rgba(255,255,255,.55);

    font-size: 13px;

    line-height: 1.7;
}

.social-links {
    display: flex;

    gap: 8px;

    margin-top: 25px;
}

.social-links a {
    width: 38px;
    height: 38px;

    display: grid;
    place-items: center;

    border: 1px solid rgba(255,255,255,.15);

    border-radius: 50%;

    color: rgba(255,255,255,.7);

    font-size: 13px;

    transition: var(--transition);
}

.social-links a:hover {
    background: var(--primary);

    border-color: var(--primary);

    color: white;
}

.footer-column h4 {
    font-size: 13px;

    margin-bottom: 20px;
}

.footer-column a {
    display: block;

    color: rgba(255,255,255,.55);

    font-size: 12px;

    margin-bottom: 12px;

    transition: var(--transition);
}

.footer-column a:hover {
    color: white;

    transform: translateX(4px);
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,.08);

    padding: 20px 0;
}

.footer-bottom .container {
    display: flex;

    align-items: center;
    justify-content: space-between;

    gap: 20px;
}

.footer-bottom p {
    color: rgba(255,255,255,.4);

    font-size: 10px;
}


/* =========================================
   WHATSAPP
========================================= */

.whatsapp-btn {
    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 55px;
    height: 55px;

    z-index: 900;

    display: grid;
    place-items: center;

    background: #25d366;

    color: white;

    border-radius: 50%;

    font-size: 25px;

    box-shadow: 0 10px 30px rgba(0,0,0,.18);

    transition: var(--transition);
}

.whatsapp-btn:hover {
    transform: scale(1.08);
}


/* =========================================
   BACK TO TOP
========================================= */

.back-to-top {
    position: fixed;

    right: 25px;
    bottom: 95px;

    width: 42px;
    height: 42px;

    z-index: 899;

    display: grid;
    place-items: center;

    background: var(--dark);

    color: white;

    opacity: 0;
    visibility: hidden;

    transition: var(--transition);
}

.back-to-top.show {
    opacity: 1;
    visibility: visible;
}


/* =========================================
   LIGHTBOX
========================================= */

.lightbox {
    position: fixed;

    inset: 0;

    z-index: 2000;

    background: rgba(0,0,0,.92);

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 30px;

    opacity: 0;
    visibility: hidden;

    transition: var(--transition);
}

.lightbox.active {
    opacity: 1;
    visibility: visible;
}

.lightbox img {
    max-width: 1000px;
    max-height: 85vh;

    object-fit: contain;
}

.lightbox-close {
    position: absolute;

    top: 25px;
    right: 30px;

    width: 45px;
    height: 45px;

    background: white;

    color: var(--dark);

    border-radius: 50%;

    font-size: 18px;
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {

    .nav-menu {
        gap: 18px;
    }

    .hero {
        min-height: 750px;
    }

    .why-grid {
        gap: 60px;
    }

    .experience-badge {
        right: -15px;
    }

    .testimonial-box {
        padding: 55px;
    }

}


@media (max-width: 850px) {

    .section {
        padding: 80px 0;
    }

    .section-heading {
        flex-direction: column;

        align-items: flex-start;

        gap: 20px;
    }

    /* Mobile menu */

    .menu-toggle {
        display: block;
    }

    .nav-menu {
        position: fixed;

        top: 0;
        right: -100%;

        width: 300px;
        height: 100vh;

        background: var(--dark);

        display: flex;
        flex-direction: column;

        align-items: flex-start;

        padding: 100px 35px;

        gap: 25px;

        transition: right .35s ease;

        box-shadow: -10px 0 30px rgba(0,0,0,.2);
    }

    .nav-menu.open {
        right: 0;
    }

    .nav-link {
        font-size: 15px;
    }

    .nav-book-btn {
        margin-top: 10px;
    }

    /* Hero */

    .hero {
        background-attachment: scroll;
    }

    .hero h1 {
        font-size: clamp(50px, 12vw, 75px);
    }

    /* Search */

    .search-card {
        grid-template-columns: 1fr 1fr;

        gap: 10px;
    }

    .search-item {
        border: none;

        border-bottom: 1px solid var(--border);

        padding: 12px 5px;
    }

    .search-btn {
        margin: 10px 0 0;

        justify-content: center;

        grid-column: span 2;
    }

    /* Destinations */

    .destination-grid {
        grid-template-columns: 1fr 1fr;
    }

    .destination-large {
        grid-column: span 2;
    }

    /* Why */

    .why-grid {
        grid-template-columns: 1fr;

        gap: 60px;
    }

    .why-image > img {
        height: 500px;
    }

    /* Tours */

    .tour-grid {
        grid-template-columns: 1fr 1fr;
    }

    .tour-card:last-child {
        grid-column: span 2;
        max-width: 50%;
        margin: auto;
    }

    /* Stats */

    .stats-grid {
        grid-template-columns: 1fr 1fr;

        gap: 40px;
    }

    .stat:nth-child(2) {
        border-right: none;
    }

    /* Gallery */

    .gallery-grid {
        grid-template-columns: 1fr 1fr;

        grid-template-rows:
            300px
            220px
            220px;
    }

    .gallery-item.gallery-tall {
        grid-row: span 1;
        grid-column: span 2;
    }

    /* Contact */

    .contact-grid {
        grid-template-columns: 1fr;

        gap: 60px;
    }

    /* Footer */

    .footer-grid {
        grid-template-columns: 1fr 1fr;
    }

}


@media (max-width: 600px) {

    .container {
        width: min(var(--container), calc(100% - 30px));
    }

    .section {
        padding: 65px 0;
    }

    .section-heading h2,
    .why-content h2,
    .contact-info h2 {
        font-size: 43px;
    }

    /* Header */

    .header {
        padding: 15px 0;
    }

    .logo {
        font-size: 18px;
    }

    .logo-icon {
        width: 36px;
        height: 36px;
    }

    /* Hero */

    .hero {
        min-height: 700px;
    }

    .hero-content {
        padding-top: 70px;
    }

    .hero h1 {
        font-size: 54px;
    }

    .hero-content > p {
        font-size: 14px;
    }

    .hero-scroll {
        display: none;
    }

    /* Search */

    .trip-search {
        margin-top: -25px;
    }

    .search-card {
        grid-template-columns: 1fr;
        padding: 18px;
    }

    .search-btn {
        grid-column: auto;
    }

    /* Destination */

    .destination-grid {
        grid-template-columns: 1fr;
    }

    .destination-large {
        grid-column: auto;
    }

    .destination-card {
        height: 390px;
    }

    /* Why */

    .why-image > img {
        height: 450px;
    }

    .experience-badge {
        width: 125px;
        height: 125px;

        right: 10px;
        bottom: 20px;
    }

    .experience-badge strong {
        font-size: 38px;
    }

    .features {
        grid-template-columns: 1fr;
    }

    /* Tours */

    .tour-grid {
        grid-template-columns: 1fr;
    }

    .tour-card:last-child {
        grid-column: auto;
        max-width: none;
    }

    /* Stats */

    .stats-grid {
        grid-template-columns: 1fr 1fr;

        gap: 25px;
    }

    .stat {
        border: none !important;
    }

    .stat strong {
        font-size: 40px;
    }

    /* Gallery */

    .gallery-grid {
        grid-template-columns: 1fr 1fr;

        grid-template-rows:
            240px
            180px
            180px;
    }

    /* Testimonial */

    .testimonial-box {
        padding: 35px 25px;

        flex-direction: column;

        gap: 15px;
    }

    .testimonial-content > p {
        font-size: 19px;
    }

    .testimonial-controls {
        position: static;

        margin-top: 20px;
    }

    /* Booking */

    .booking-section {
        min-height: 500px;

        background-attachment: scroll;
    }

    .booking-content h2 {
        font-size: 48px;
    }

    /* Form */

    .contact-form {
        padding: 25px 20px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    /* Footer */

    .footer-grid {
        grid-template-columns: 1fr 1fr;

        gap: 40px 25px;
    }

    .footer-about {
        grid-column: span 2;
    }

    .footer-bottom .container {
        flex-direction: column;

        text-align: center;
    }

    /* Floating */

    .whatsapp-btn {
        width: 50px;
        height: 50px;

        right: 15px;
        bottom: 15px;
    }

    .back-to-top {
        right: 15px;
        bottom: 78px;
    }

}


/* =========================================
   ANIMATIONS
========================================= */

.fade-in {
    opacity: 0;
    transform: translateY(25px);

    transition:
        opacity .7s ease,
        transform .7s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}