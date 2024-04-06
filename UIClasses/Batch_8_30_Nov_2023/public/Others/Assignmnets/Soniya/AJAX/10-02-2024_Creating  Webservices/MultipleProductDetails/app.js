var productDetails = [];

var allProducts = (products) =>
        {

        var  ul = document.createElement("ul");
        ul.setAttribute("class","mainUlTag");
        var imgLi = document.createElement("li");
        imgLi.setAttribute("id","imgLiTag");
        var imgTag = document.createElement("img");
        imgTag.setAttribute("src",products.img);
        imgLi.append(imgTag);
        ul.append(imgLi);
        
        var nameLi = document.createElement("li");
        nameLi.innerText = `Name : ${products.name}`;
        ul.append(nameLi);

        var companyLi =document.createElement("li");
        companyLi.innerText = `Manufacture : ${products.manufacture}`;
        ul.append(companyLi);

        var priceLi =document.createElement("li");
        priceLi.innerText = `Price : ${products.price}`;
        ul.append(priceLi);

        var parentProductsContainer = document.querySelector(".allProductsContainer");
        parentProductsContainer.append(ul);
        console.log(parentProductsContainer);

        }

        $(document).ready(()=>
        {
            //using js default method fetch we implement ajax call but it is some lengthy to avoid this we use external library in next steps
            // fetch("http://localhost:8082/Class%20Room/AJAX/10-02-2024_Creating%20Fake%20Webservice/MultipleProductDetails/productDetails.json")
            //         .then(response => response.json())
            //             .then((response) => 
            //             {
            //                 productDetails = response.productsinfo;
            //                 for(var i = 0;i < productDetails.length;i++)
            //                 {
            //                     allProducts(productDetails[i]);
            //                 }
            //             })
            //                 .catch((error)=> {console.log(error)});


            //implementing ajax call with jquery library

            // $.ajax(
            //     {
            //         url : "http://localhost:8082/Class%20Room/AJAX/10-02-2024_Creating%20Fake%20Webservice/MultipleProductDetails/productDetails.json",
            //         mehtod : 'Get',
            //         datatype : 'JSON',
            //         success : (response) =>
            //         {
            //             productDetails = response.productsinfo;
            //             for(var i = 0;i < productDetails.length;i++)
            //             {
            //                 allProducts(productDetails[i]);
            //             }
            //         },
            //         error : (err)=>
            //         {
            //             console.log(err);
            //         }
            //     }
            // )

            //implementing  ajax call with js external library "axios" where all are now using
            axios.get("http://localhost:8082/get/productsDataList").then((response) => 
            {
                console.log(response);
                productDetails = response.data.productsinfo;

                        for(var i = 0;i < productDetails.length;i++)
                       {
                             allProducts(productDetails[i]);
                       }
            }).catch((err) =>
            {
                console.log(err);
            })


        })


