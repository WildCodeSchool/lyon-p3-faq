const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: parseInt(process.env.MAILER_SSL) === 0 ? 587:465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: "aurelien.chiren@gmail.com",
        pass: "Chir24aur"
    }
});

/**
 *
 * @param mailOptions
 * @param next
 */
module.exports = function(mailOptions, next) {

    // mailOptions = {
    // from: '"Fred Foo 👻" <foo@blurdybloop.com>', // sender address
    // to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    // subject: 'Hello ✔', // Subject line
    // text: 'Hello world ?', // plain text body
    // html: '<b>Hello world ?</b>' // html body
    // };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, next);
};