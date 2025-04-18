document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".toggle-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const details = this.nextElementSibling; 

            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block"; 
                this.textContent = "Hide Details";
            } else {
                details.style.display = "none"; 
                this.textContent = "Show Details"; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        clearErrors();

        let isValid = true;

        const name = document.getElementById("name");
        const nameError = document.getElementById("name-error");
        if (name.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameError.style.display = "block";
            isValid = false;
        }

        const email = document.getElementById("email");
        const emailError = document.getElementById("email-error");
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value.trim() === "") {
            emailError.textContent = "Email is required.";
            emailError.style.display = "block";
            isValid = false;
        } else if (!emailPattern.test(email.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            emailError.style.display = "block";
            isValid = false;
        }

        const message = document.getElementById("message");
        const messageError = document.getElementById("message-error");
        if (message.value.trim() === "") {
            messageError.textContent = "Message is required.";
            messageError.style.display = "block";
            isValid = false;
        } else if (message.value.trim().length < 10) {
            messageError.textContent = "Message should be at least 10 characters long.";
            messageError.style.display = "block";
            isValid = false;
        }

        if (isValid) {
            const messageSent = document.getElementById("message-sent");
            messageSent.textContent = "Message Sent";
            messageSent.style.display = "block";

            setTimeout(() => {
                messageSent.style.display = "none";
            }, 3000);

            form.reset();
        }

    });

    function clearErrors() {
        document.querySelectorAll(".error-message").forEach(function(error) {
            error.style.display = "none";
        });
    }
    const projectButtons = document.querySelectorAll(".button");
projectButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (index < 2) { 
            window.location.href = `project${index + 1}.html`;
        } else {
            alert('This project page does not exist.');
        }
    });
});


    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


});