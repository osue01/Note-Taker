const router = require("express").Router();
const path = require("path");

// Define the route to send 'index.html' as a response to a client on GET request
router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending index.html.");
  }
});

// Define the route to send 'notes.html' as a response to a client on GET request
router.get("/notes", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending notes.html.");
  }
});

module.exports = router;
