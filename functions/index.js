const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodeMailer = require('nodemailer');
const config = functions.config();
admin.initializeApp();

const transporter = nodemailer.createTransporter({});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
