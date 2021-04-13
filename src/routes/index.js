const { Router } = require("express");
const router = Router();
const admin = require("firebase-admin");

//Conection with Firebase
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://fir-node-9df46-default-rtdb.firebaseio.com/",
});

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/new-contact", (req, res) => {
  console.log(req.body);
  res.send("Recived");
});

module.exports = router;
