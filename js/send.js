function send(){
    let name = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('objet').value;
    let message = document.getElementById('message').value;
    let nameError = document.getElementById('name_error');
    let emailError = document.getElementById('email_error');
    let subjectError = document.getElementById('object_error');
    let messageError = document.getElementById('message_error');


    // Validation du formulaire
    if(name == ''){
        nameError.innerHTML = 'Veuillez renseigner ce champ'; 
        console.log('nameError');
        return false;
    }else{
        nameError.innerHTML = '';
    }

    if(email == ''){
        emailError.innerHTML = 'Veuillez renseigner ce champ';
        console.log('mailError');
        return false;
    }else{
        nameError.innerHTML = '';
    }

    if(subject == ''){
        subjectError.innerHTML = 'Veuillez renseigner ce champ';
        console.log('subjectError');
        return false;
    }else{
        subjectError.innerHTML = '';
    }

    if(message == ''){
        messageError.innerHTML = 'Veuillez renseigner ce champ';
        console.log('messageError');
        return false;
    }else{
        messageError.innerHTML = '';
    }

    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('objet').value = '';
    document.getElementById('message').value = '';

    const date = new Date();

    var hook = new XMLHttpRequest();

      hook.open('POST', 'https://discord.com/api/webhooks/1309449787422277672/zZ_PtZ4HfG8diWSifkjj6didPOybXmRYMbdFBFHP1l7_7BPkRvyya3guphJ2nlKm_H1U');

      hook.setRequestHeader('Content-type', 'application/json');

      var content = {
        content: "Un message à été envoyer depuis le portfolio :",
        embeds: [
            {
            title: "Message de la part de " + name,
            color: 10682623,
            fields: [
                {
                name: "Nom",
                value: name
                },
                {
                name: "Email",
                value: email
                },
                {
                name: "Objet",
                value: subject
                },
                {
                name: "Message",
                value: message
                }
            ],
            timestamp: date
            }
        ],
        username: 'Message Portfolio',
        avatar_url: 'https://www.institut-g4.fr/wp-content/uploads/2022/11/G4-couleur-2.png',
      }

      hook.send(JSON.stringify(content));
      alert("Message envoyer avec succès");
}