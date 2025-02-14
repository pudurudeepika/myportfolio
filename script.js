document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let formMessage = document.getElementById("formMessage");

    if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
        formMessage.innerHTML = "All fields are required!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerHTML = "Message sent successfully!";
    formMessage.style.color = "green";

    name.value = "";
    email.value = "";
    message.value = "";
});
