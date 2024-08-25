require('dotenv').config({ path: '../.env' });
const nodemailer = require('nodemailer');
// const ef = require('./emailformat');
const path = require('path');
const fs = require('fs');


// // Function to read and replace placeholders in the email template
// function getHtmlTemplate() {
//     const templatePath = path.join(__dirname, 'mail_template.html');
//     let htmlTemplate = fs.readFileSync(templatePath, 'utf8');

//     // Generate a unique token
//     // const token = uuidV4();
//     // Store the token and roomId in a secure way (e.g., in-memory or database)
//     // tokenStore[token] = roomId;

//     // const link = `http://localhost:8080/auth-redirect/${token}`;
    
//     // Replace placeholders with the actual link
//     // htmlTemplate = htmlTemplate.replace(/%%LINK%%/g, link);

//     return htmlTemplate;
// }

async function sendMail(userDetails) {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_APP_PASSWORD,
        }
    });
    // ef.emailFormat();
    // console.log('hello', userDetails);
    // const content = ef.emailFormat(userDetails);
    const templatePath = path.join(__dirname, 'mail_template.html');
    const content = fs.readFileSync(templatePath, 'utf8');
    let info = await transporter.sendMail({
        from: process.env.MAIL_USER, // sender address
        to: userDetails.userEmail, // list of receivers
        subject: "Hello, you have a meeting scheduled!", // Subject line
        text: "Hello, you have a meeting scheduled! ", // plain text body
        html: content, // html body
    });

    console.log(`Message sent`.bgMagenta);

}

module.exports = { sendMail };