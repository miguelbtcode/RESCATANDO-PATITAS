function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: "Mensaje de ejemplo"
    };

    const serviceID = "service_ryzacvi";
    const templateID = "template_nud5j5a";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";

            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
}