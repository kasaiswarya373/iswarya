// http://localhost:8082/Others/Assignmnets/YashwanthPillai/Assignment/AJAX_Calls_Practise/prac1/Data/productDetails.json 

// const { response } = require("express")

var productData =[]
var templateContent1
 



var pDetails = (productData) =>{

    productData.discountPrice =( productData.actualPrice - (productData.actualPrice*productData.discountPercent/100))


       $(".container").append(templateContent1(productData))

}


 templateContent1 = Handlebars.compile($("#firstProductContainer").html());





setTimeout(() => {
    axios.get("http://localhost:8082/Others/Assignmnets/YashwanthPillai/Assignment/AJAX_Calls_Practise/prac1/Data/productDetails.json").then((response)=>{
        console.log("SUCCESSFUL");
        $(".loader").hide()
        console.log(response);
        
        productData = response.data.details
        for(let i = 0 ; i<productData.length ; i++){
            pDetails(productData[i]);
        }
        }).catch((reject)=>{
        $(".loader").hide()
        $(".error-msg").show()

            console.log("ERROR");
        
        }) 
  }, 3000);
  

