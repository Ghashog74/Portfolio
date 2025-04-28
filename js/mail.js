const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE,
);

const request = mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "quentinmontreuil06@gmail.com",
                Name: "Portfolio"
              },
              To: [
                {
                  Email: "quentinmontreuil06@gmail.com",
                  Name: "quentinmontreuil06@gmail.com"
                }
              ],
              Subject: "Message venant du portfolio",
              HTMLPart: "<p>Quelqu'un à envoyer un message</p>"
            }
          ]
        })

request
    .then((result) => {
        console.log(result.body)
    })
    .catch((err) => {
        console.log(err.statusCode)
    })

function send(){
    request.post;
}