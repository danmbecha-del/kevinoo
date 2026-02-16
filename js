// Load profile image using JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const profileImage = document.getElementById("profileImage");
    profileImage.src = "profile.jpeg.jpeg";
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").innerHTML =
        "Thank you, " + name + "! Your message has been sent successfully.";

    this.reset();
});
