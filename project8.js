function sendMail(){
    var params = {
        from_name: document.getElementById("fullname").value ,
        email_id: document.getElementById("email_id").value ,
        message: document.getElementById("message").value ,
    };

const serviceID = "service_xrvj7vz";
const  templateID ="template_dxmgogc"

emailjs.send(serviceID,templateID, params).then(res =>{
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("message").value = "";

        console.log(res);
        alert("your message sent successfully")
    })
    .catch((error) => console.log(error));
}
