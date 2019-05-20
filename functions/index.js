const functions = require('firebase-functions');
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const gmailEmail = functions.config().gmail.mail;
const gmailPassword = functions.config().gmail.password;
exports.sendEmailToNewUser = functions.firestore.document('/users/{userId}').onCreate((snap, context) => {
    
    const val = snap.data();
    console.log(val)

    const transport = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:gmailEmail,
            pass:gmailPassword
        }
    })
    const sendMail = () => {
        transport.sendMail({
            from:'Oswaldinho',
            to:val.email,
            subject:`Welcome ${val.username}`,
            text:'Bienvenido a la plataforma de Google planning'
        })
        .then(r=>{
            console.log(r)
            return r
        })
        .catch(e=>{
            console.log(e)
            throw e
        })
    }
    return sendMail()
            .then(r=>{
                console.log(r)
                return r
            })
            .catch(e=>{
                console.log(e)
                throw e
            })
  
  });