const SendMail = () => {
  (function () {
    emailjs.init({
      publicKey: "it8pio47YfQL-owQI",
    });
  })();

  var params = {
    name: document.querySelector("#fullName").value,
    email_id: document.querySelector("#email_id").value,
    message: document.querySelector("#message").value,
  };

  let serviceID = "service_zo8c893";
  let templateID = "template_g85jebi";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      alert("Sent successfully!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};
