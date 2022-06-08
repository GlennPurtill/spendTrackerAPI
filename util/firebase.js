const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDzlBJLYrYkaF6iQyEqQvlC-abxD8d3HLo",
    authDomain: "spendtracker-4568c.firebaseapp.com",
    databaseURL: "https://spendtracker-4568c-default-rtdb.firebaseio.com",
    projectId: "spendtracker-4568c",
    storageBucket: "spendtracker-4568c.appspot.com",
    messagingSenderId: "83372754523",
    appId: "1:83372754523:web:0d30f71b10a232b721217e",
    measurementId: "G-2SXVPPRBNR"
  };

firebase.initializeApp(firebaseConfig); //initialize firebase app `
module.exports = { firebase }; //export the app