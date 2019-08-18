const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// const cors = require('cors')({ origin: true });

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().sendgrid.key);


exports.httpEmail = functions.https.onRequest((req, res) => {
    return Promise.resolve()
        .then(() => {
            if (req.method !== "POST") {
                const error = new Error("Only POST requests accepted");
                error.code = 405;
                throw error;
            }


            // return client.API(client.emptyRequest({
            //     method: "POST",
            //     path: '/v3/mail/send',
            //     body: parseBody(req.body)
            // }))


            const toName = req.body.toName;
            const toEmail = req.body.toEmail;

            const msg = {
                to: toEmail,
                from: 'JJ@enkeldigital.com',
                subject: 'New Follower',
                text: `Hey ${toName}. You have a new follower!!! `,
                // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

                // custom templates
                // templateId: '300e1045-5b30-4f15-8c43-41754b73fe4f',
                // substitutionWrappers: ['{{', '}}'],
                // substitutions: {
                //     name: toName
                //     // and other custom properties here
                // }
            };

            return sgMail.send(msg)
                .then(() => res.status(200).send('email sent!'))
                .catch(err => res.status(400).send(err))
        })
        .then((response) => {
            if (response.body)
                res.end(response.body);
            else
                res.end();
        })
        .catch((err) => {
            console.error(err);
            return Promise.reject(err);
        })
})
