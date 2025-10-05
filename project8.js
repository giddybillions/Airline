  (function(){
    emailjs.init({
      publicKey: "9jQZsAWGI_e-3DAWu", // 🔹 Your public key
    });
  })();

  // Send Mail Function
  function sendMail(event) {
    event.preventDefault(); // Prevent page reload

    var params = {
      name: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_xrvj7vz";     // 🔹 Your EmailJS service ID
    const templateID = "template_dxmgogc";   // 🔹 Your EmailJS template ID

    emailjs.send(serviceID, templateID, params)
      .then(function(response) {
        alert("✅ Your message was sent successfully!");
        console.log("SUCCESS!", response.status, response.text);

        // Clear form fields
        document.getElementById("fullname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch(function(error) {
        console.error("FAILED...", error);
        alert("❌ Failed to send message. Please try again later.");
      });
  }
