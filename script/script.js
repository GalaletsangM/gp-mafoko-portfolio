function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "preciousmafoko@gmail.com",
    Password: "G@li.1234",
    To: "preciousmafoko@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Inquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
