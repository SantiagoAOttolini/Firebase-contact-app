const { Router } = require("express");
const router = Router();
const admin = require("firebase-admin");

var serviceAccount = require("../../fir-node-9df46-firebase-adminsdk-u2i74-c6cbdafbca.json");
//Conection with Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-node-9df46-default-rtdb.firebaseio.com/",
});

//it's like saying, of all the service i wanna connect to the database
const db = admin.database();

router.get("/", (req, res) => {
  //Bring all the data of the table contacts
  db.ref("contacts").once("value", (snapshot) => {
    const data = snapshot.val();
    res.render("index", { contacts: data });
  });
});

router.post("/new-contact", (req, res) => {
  const newContact = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  };
  //ref, with what name i gonna save. Contacts in SQL is the table and in mongo is the collection
  db.ref("contacts").push(newContact);
  res.redirect("/");
});

module.exports = router;
