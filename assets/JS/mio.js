document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const messaggio = document.getElementById("messaggio").value;

    
    if (!nome || !email  || !messaggio) {
        alert("Per favore compila tutti i campi richiesti.");
        return;
    }

    const params = {
        user_name: nome, 
        user_email: email,
        user_messaggio: messaggio, 
    };

    const serviceID = "service_e46sjhm"; 
    const templateID = "template_vx9y51g"; 

    console.log("Parametri inviati:", params);

    emailjs.send(serviceID, templateID, params)
        .then((response) => {
            console.log("Email inviata con successo:", response);
            alert("Messaggio inviato con successo!");
            document.getElementById("contactForm").reset(); 
        })
        .catch((error) => {
            console.error("Errore durante l'invio:", error);
            alert(`Errore durante l'invio: Status ${error.status}, Messaggio: ${error.text}`);
        });
});
