var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var onLoadCateogry = {
    cateogryImages: [
      {
        image: "/images/onLoadImages/cat_men.jpg",
        cateogry: "MEN SHOES",
      },
      {
        image: "/images/onLoadImages/cat_women.webp",
        cateogry: "WOMEN SHOES",
      },
      {
        image: "/images/onLoadImages/cat_kids.jpg",
        cateogry: "KIDS SHOES",
      },
      {
        image: "/images/onLoadImages/cat_ACCESSORIES.webp",
        cateogry: "ACCESSORIES",
      },
    ],
  };

  res.send(JSON.stringify(onLoadCateogry.cateogryImages));
});

module.exports = router;
