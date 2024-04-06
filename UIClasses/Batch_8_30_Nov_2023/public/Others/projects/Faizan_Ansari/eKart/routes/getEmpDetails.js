var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
    response.send("Hello I got Created");
});

module.exports = router;