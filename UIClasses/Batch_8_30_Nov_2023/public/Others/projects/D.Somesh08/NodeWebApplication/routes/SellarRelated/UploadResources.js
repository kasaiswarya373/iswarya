var express = require('express');
var router = express.Router();
// Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
// NOTE: Multer will not process any form which is not multipart (multipart/form-data).
const multer = require('multer');
var path = require('path');

var fileName = '';
const filePath = './public/images/SellerProductsImages';

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, filePath);
    },
    // By default, multer removes file extensions so let's add them back
    filename: function (req, file, cb) {
        fileName = "prod" + " _ " + Date.now() + path.extname(file.originalname);
        cb(null, fileName)
    }
});

const upload = multer({ storage: storage }).single("prodImg");

router.post('/', (req, resp) => {
    var respObj = {};
    upload(req, resp, function (err) {
        if (err) {
            respObj.msg = "ERROR"
            console.log(err);
        } else {
            respObj.file_path = filePath + '/' + fileName;
            respObj.msg = 'success';
        }
        resp.send(JSON.stringify(respObj));
    });
});

module.exports = router;