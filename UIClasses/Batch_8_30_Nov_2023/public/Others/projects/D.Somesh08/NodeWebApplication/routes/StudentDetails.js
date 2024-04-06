const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    var data = {
        id: 2,
        name: 'Someshwar Reddy'
    }
    response.send(JSON.stringify(data));
})

module.exports = router;