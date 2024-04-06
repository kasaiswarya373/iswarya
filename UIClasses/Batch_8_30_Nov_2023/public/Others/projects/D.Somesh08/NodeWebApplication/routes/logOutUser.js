var express = require('express');
var router = express.Router();

router.get('/', (req, resp) => {
    req.session.destroy();
    resp.send(JSON.stringify({ msg: 'User Session Destroyed' }));
});

module.exports = router;