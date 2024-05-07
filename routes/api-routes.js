const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

// Define the GET request for '/api/notes'
router.get("/notes", async (req, res) => {
  try {
    const dbJson = await JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
    );
    res.json(dbJson);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error reading notes from the database.");
  }
});

// Define the POST request for '/api/notes'
router.post("/notes", (req, res) => {
  try {
    const dbJson = JSON.parse(
      fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8")
    );
    const newFeedback = {
      title: req.body.title,
      text: req.body.text,
      id: uuidv4(),
    };
    dbJson.push(newFeedback);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(dbJson)
    );
    res.json(newFeedback);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving note to the database.");
  }
});

module.exports = router;
