var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var ListOfProducts = {
        "details" : [
             {
                 "name": "SYGA Children's Bag",
                 "actualPrice": 2500,
                 "discountPercent": 12,
                 "manu": "Syga Home Furnishing",
                " sellerName": "SYGA",
                 "rating": 4.5,
                 "imageUrl":
                 "https://cdn.fcglcdn.com/brainbees/images/products/438x531/14539084a.webp"
             },
             {
                 "name": "Pine Kids Casual Shoes",
                 "actualPrice": 1900,
                 "discountPercent": 12,
                 "manu": "BrainBees Solutions Pvt Ltd.",
                 "sellerName": "Pine Kids",
                 "rating": 3.5,
                 "imageUrl":
                 "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15313629a.webp"
             },
             {
                 "name": "BabyHug Party Wear Sleeveless",
                 "actualPrice": 1700,
                 "discountPercent": 2,
                 "manu": "BrainBees Solutions Pvt Ltd.",
                 "sellerName": "BabyHug",
                 "rating": 5,
                 "imageUrl":
                 "https://cdn.fcglcdn.com/brainbees/images/products/438x531/16083850c.webp"
             },
             {
                 "name": "4 in 1 Super Garden Slide Swing",
                 "actualPrice": 5100,
                 "discountPercent": 7,
                 "manu": "PlaTool PVT Ltd.",
                 "sellerName": "EHomeKart",
                 "rating": 4.5,
                 "imageUrl":
                 "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10538220a.webp"
             }
         ]
    };

    res.send(JSON.stringify(ListOfProducts));
});

module.exports = router;
