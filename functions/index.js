const functions = require('firebase-functions');
const nodemailer = require('nodemailer')
const admin = require('firebase-admin')

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.sendWelcomeMail = functions.firestore.document('/users/{userId}')
    .onCreate((snap, context)=>{
        console.log(snap.data())
        const user = snap.data()

        const transport = nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:functions.config().gmail.email,
                pass:functions.config().gmail.password
            }
        })

        const sendMail=()=>{
            transport.sendMail({
                from:'Oswaldinho',
                to:user.email,
                subject:`Welcome to the google planing app`,
                html:`<h2>Ya eres parte 🍕🍕🍕</h2>`
            }).then(r=>{
                console.log(r)
                return r
            }).catch(e=>{
                console.log(e)
                throw e
            })
        }
        return sendMail()
    })

    exports.newContentMail=functions.firestore.document('/contents/{contentId}')
        .onCreate((snap, context)=>{
            const content = snap.data()
            const transport = nodemailer.createTransport({
                service:'Gmail',
                auth:{
                    user:functions.config().gmail.email,
                    pass:functions.config().gmail.password
                }
            })
            const sendMail=()=>{
                transport.sendMail({
                    from:'Oswaldinho',
                    to:content.userEmail,
                    subject:`You created a new content`,
                    html:`<h2>You created ${content.text}</h2>
                        <img src="${content.imageURL}"/>    
                    `
                }).then(r=>{
                    console.log(r)
                    return r
                }).catch(e=>{
                    console.log(e)
                    throw e
                })
            }

            return sendMail()
        })

