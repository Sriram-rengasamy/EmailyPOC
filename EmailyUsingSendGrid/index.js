const express = require('express');
const app = express();

const sgMail = require('@sendgrid/mail');
const sendGridKey =  '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';
app.get('/', (req,res)=> {

    sgMail.setApiKey(sendGridKey);
    const msg = {
      to: 'sriram.renga@gmail.com, javiyaprashant@gmail.com',
      from: 'no-reply@emaily.com',
      subject: 'Testing Email using SendGrid',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>Welcome Prashant..Just an test email sent using SendGrid by Sriram :-) :-) </strong>',
    };
    sgMail.send(msg);

    res.send({hi: 'Your email is sent'});
});

app.listen(5000);