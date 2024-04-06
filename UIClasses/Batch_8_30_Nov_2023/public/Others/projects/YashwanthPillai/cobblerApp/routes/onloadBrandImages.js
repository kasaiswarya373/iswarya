var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
    var onLoadBrandImages ={ 
        "brandImages" : [ 
            {"image" :"/images/brands/adidas.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/nike.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/puma.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/reebok.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/fila.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/asian.jpeg",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/bata.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/mochi.jpeg",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/newBalance.png",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/skechers.jpeg",
              "btn-txt" : "SHOP NOW"
            },
            {"image" :"/images/brands/dior.png",
              "btn-txt" : "SHOP NOW"
            }
            ]
        }

    res.send(JSON.stringify(onLoadBrandImages))
});

module.exports = router;
