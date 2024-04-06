


    
// var onloadImageDetails = []
// var onloadTemplate1


$(()=>{

    axios.get("/get/sliderImages").then((response)=>{
        // console.log(response);
        // console.log(response.data);
        let arr = response.data;
        $.each(arr,(index,val)=>{
              if(index == 0){
                state = "active"    
            }else{
                    state = ""
                }
            // console.log(val);
                $(`
                    <div class= 'carousel-item ${state}'  >
                    <img
                    src=${val}
                    class="d-block w-100"
                    alt="..."
                    />
                    </div>
        
           `).appendTo("#cara-container")
        })
        
    });
    axios.get("/get/cateogryDetails").then((response)=>{
        // console.log(response);
        // console.log(response.data);

        let catArr = response.data
        // var cateogryTemplate = $("#cateogry-card").html()
        // console.log(cateogryTemplate);
        // var compliecateogryTemplate = Handlebars.compile(cateogryTemplate)
        // var resultOnloadcateogry = compliecateogryTemplate(catArr)
        $.each(catArr,(index,val)=>{
            
        //   console.log(val);
              $(`
              <div class="card" id="cateogry-card">
              <li class="card-items">
                <img src=${val.image} alt="" />
              </li>
              <h4 class="lower-head">${val.cateogry}</h4>
            </div>
      
         `).appendTo("#cateogry-container")
      })

    })
    
    axios.get("/get/BrandImages").then((response)=>{
        // console.log(response.data);

        let brandsArr = response.data
        $.each(brandsArr,(index,val)=>{
            
              // console.log(val);
            //       $(`
            //       <div class="brand-card swiper-slide" id="brand-temp-slide">
            //     <div class="image-box" id="brand-temp-slide">
            //       <img src=${val.image} alt="" />
            //     </div>
            //     <div class="brand-details">
            //       <button type="button" class="btn btn-dark shop-now">${val.btn-txt}</button>

            //     </div>
            //   </div>
          
            //  `).appendTo("#brand-temp-container")
          })
    })

    
        
    })


   

  
  
