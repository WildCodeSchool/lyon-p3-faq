exports.mailOptions = {
  newUser: (mail, name) => {
    return {
      from: '"Pierre Freelances lyonnais 👻" <pierre@ammeloot.fr >', // sender address
      to: mail, // list of receivers
      subject: `Bonjour ${name}, bienvenue sur la plateforme FAQ ✔ `, // Subject line
      text: " merci de cliquer sur le lien-suivant pour créer un mot de passe", // plain text body
      html:
        '<b>Veuillez cliquer sur ce clien pour créer un mot de passe : <a href ="http://localhost:6001/#/renewpassword"> Création mot de passe</a> </b>',
    };
  },

  renewPassword: (login) => {
    return {
      from: '"Pierre Freelances lyonnais 👻" <pierre@ammeloot.fr >', // sender address
      to: login, // list of receivers
      subject: "Hello ✔, vous avez oublié votre mot de passe ?", // Subject line
      text: "Hello world ?", // plain text body
      html:
        '<b>Veuillez cliquer sur ce clien pour créer un nouveau mot de passe : <a href ="http://localhost:6001/#/renewpassword">Nouveau mot de passe</a> </b>',
    };
  },

  newPost: (recipient, idQuestion) => {
    return {
      // Send an email confirmation when a post is published
      from: '"Pierre Freelances lyonnais 👻" <pierre@ammeloot.fr >', // sender address
      to: recipient, // list of receivers
      subject: " Hello ✔, votre question a été publiée et a reçue une réponse ", // Subject line
      html: `<b>Vous pouvez consulter le post au lien suivant  : <a href = "http://localhost:3001/question-${idQuestion}">Lien du post</a> </b>`, //TODO Mettre à jour le lien de la ref
    };
  },
};
