var admin = require("firebase-admin");

var serviceAccount = require("../spendtracker-4568c-firebase-adminsdk-c7313-ecb157c385.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spendtracker-4568c-default-rtdb.firebaseio.com"
});

const db = admin.database();
module.exports = { admin, db };