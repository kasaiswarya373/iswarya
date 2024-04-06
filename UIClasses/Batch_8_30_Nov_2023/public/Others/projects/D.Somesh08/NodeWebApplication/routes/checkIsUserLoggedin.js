var express = require('express');
var router = express.Router();

router.get('/', (req, resp) => {
    var respObj = {
        isLoggedInUser: req.session.isValidUser,
        accountId: req.session.accountId
    }
    resp.send(JSON.stringify(respObj));
    // resp.json(respObj);
});

module.exports = router;