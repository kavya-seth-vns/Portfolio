(function () {
emailjs.init("lyxvak6RaXRBegd5U");
})();

document
.getElementById("contact-form")
.addEventListener("submit", function (e) {

e.preventDefault();

emailjs.sendForm(
"service_e5onuol",
"template_5ulor2d",
this
).then(function () {

alert("Message Sent Successfully!");

}, function (error) {

alert("Failed: " + JSON.stringify(error));

});

});