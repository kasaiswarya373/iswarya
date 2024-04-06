var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var onLoadDetails = {
    sliderImages: [
      "/images/onLoadImages/slider_img1.jpg",
      "/images/onLoadImages/slider_img2.webp",
      "/images/onLoadImages/slider_img3.jpg",
      "/images/onLoadImages/slider_img4.jpg",
      "/images/onLoadImages/slider_img5.jpg",
      "/images/onLoadImages/slider_img6.jpg",
      "/images/onLoadImages/slider_img7.jpg",
      "/images/onLoadImages/slider_img8.jpg",
    ],
  };

  res.send(JSON.stringify(onLoadDetails.sliderImages));
});

module.exports = router;
