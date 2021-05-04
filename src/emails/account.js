const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {

    sgMail.send({
        to: email,
        from: 'aditya.gupta.me21@gmail.com',
        subject: 'Thanks for Joining in! ',
        text: `Welcome to the Task app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'aditya.gupta.me21@gmail.com',
        subject: 'Sorry to see you go!',
        text: `GoodBye, ${name}. I hope to see back you soon.`
    })
}
module.exports = {
    sendWelcomeMail,
    sendCancelMail
}