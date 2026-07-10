// ==============================
// SkyNest Smart Homes
// script.js
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // =============================
    // Sticky Header Shadow
    // =============================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // =============================
    // Smooth Scroll
    // =============================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // =============================
    // Active Navigation Link
    // =============================
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {

        if (link.href === window.location.href) {

            link.classList.add("active");

        }

    });

    // =============================
    // Fade In Animation
    // =============================
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll(".card, .feature, .member, .info-card")
        .forEach(el => observer.observe(el));

    // =============================
    // Button Ripple Effect
    // =============================
    document.querySelectorAll("button,.btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth, this.clientHeight);

            circle.style.width = circle.style.height = diameter + "px";

            circle.style.left = e.offsetX - diameter / 2 + "px";

            circle.style.top = e.offsetY - diameter / 2 + "px";

            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

    // =============================
    // Enquiry Form Validation
    // =============================
    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            const name = document.querySelector('input[name="name"]');

            const email = document.querySelector('input[name="email"]');

            const phone = document.querySelector('input[name="phone"]');

            if (name && name.value.trim().length < 3) {

                alert("Please enter a valid name.");

                e.preventDefault();

                return;

            }

            if (phone && phone.value.length < 10) {

                alert("Please enter a valid phone number.");

                e.preventDefault();

                return;

            }

            if (email && !email.value.includes("@")) {

                alert("Please enter a valid email address.");

                e.preventDefault();

                return;

            }

            alert("Thank you! Your enquiry has been submitted.");

        });

    }

});

// =============================
// Scroll To Top Button
// =============================
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};