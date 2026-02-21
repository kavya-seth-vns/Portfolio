
// EMAIL JS

(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm(
"Yservice_e5onuol",
"template_5ulor2d",
this
).then(() => {

alert("Message Sent!");

});

});