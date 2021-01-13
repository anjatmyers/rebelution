const express = require("express");
const router = express.Router();

router.get("/chat", (req, res) => {
  res.render("chat", {
      pageID:  "chat",
      pageTitle: 'Chat Room'
  });
});
module.exports = router;