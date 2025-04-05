//1--------------------------------header
const toggleSwitch = document.getElementById("darkModeToggle");

// Check if dark mode is saved in local storage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleSwitch.checked = true;
}

// Toggle dark mode on click
toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference to local storage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    hamburger.classList.toggle('open');
});

// Optional: Add animation to hamburger icon
hamburger.addEventListener('click', () => {
    hamburger.querySelectorAll('span')[0].style.transform =
        hamburger.classList.contains('open') ? "rotate(45deg) translate(5px, 5px)" : "none";
    hamburger.querySelectorAll('span')[1].style.opacity =
        hamburger.classList.contains('open') ? "0" : "1";
    hamburger.querySelectorAll('span')[2].style.transform =
        hamburger.classList.contains('open') ? "rotate(-45deg) translate(5px, -5px)" : "none";
});

//2--------------------------- Hero Section Text Loop

const textLoop = [
    "A passionate Web Developer",
    "Responsive Websites",
    "Transforming Ideas into Reality"
];

let index = 0;
const textContainer = document.getElementById("text-loop");

function updateText() {
    // Create a fade-out effect before changing text
    textContainer.style.opacity = 0;

    setTimeout(() => {
        textContainer.innerHTML = `<span class="text-slide">${textLoop[index]}</span>`;
        textContainer.style.opacity = 1; // Fade in new text
        index = (index + 1) % textLoop.length;
    }, 500); // Wait 0.5s before changing text
}

// Run the function every 3 seconds
setInterval(updateText, 3000);

// Initial text setup
updateText();

//3--------------------------- Skills Section
document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.querySelector(".about-container");

    function revealSection() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
            aboutSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", revealSection);
    revealSection(); // Run on page load
});



//-------------------project section 


document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show"); // Add animation class
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% visible
    );

    projectCards.forEach((card) => observer.observe(card));
});


//---------------skill section 

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.classList.contains("html") ? "95%" :
                                               entry.target.classList.contains("css") ? "90%" :
                                               entry.target.classList.contains("js") ? "85%" :
                                               entry.target.classList.contains("react") ? "80%" :
                                               entry.target.classList.contains("php") ? "75%" :
                                               entry.target.classList.contains("node") ? "70%" :
                                               entry.target.classList.contains("tailwind") ? "85%" :
                                               entry.target.classList.contains("bootstrap") ? "80%" :
                                               entry.target.classList.contains("git") ? "90%" :
                                               entry.target.classList.contains("vscode") ? "85%" :
                                               entry.target.classList.contains("figma") ? "75%" : "0%";
                }
            });
        },
        { threshold: 0.5 }
    );

    skillBars.forEach((bar) => {
        observer.observe(bar);
    });
});

//motion slide for skill section
document.addEventListener("DOMContentLoaded", function () {
    const skillCategories = document.querySelectorAll(".skill-category");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    skillCategories.forEach((category) => {
        observer.observe(category);
    });
});


//--------------------------------Contact section
// Scroll Animation for Contact Section
document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.querySelector(".contact-section");

    function showContact() {
        const sectionPos = contactSection.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            contactSection.classList.add("show");
        }
    }

    window.addEventListener("scroll", showContact);
});

// Contact Form Submission Alert
document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
