var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next) {
    var studentData = {
        name: 'bhairava',
        age:20,
        gender: 'Male'

    };

    res.send(JSON.stringify(studentData));
});

module.exports = router;