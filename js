document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    if(name && email && phone && message) {
        document.getElementById("formMessage").innerHTML = 
        "Thank you " + name + "! Your message has been received.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").innerHTML = 
        "Please fill in all fields.";
    }
});
