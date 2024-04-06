var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
  response.send("hurrey i got created");
});
module.exports = router;
