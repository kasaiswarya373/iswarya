var datalist = []
var searchvalue = document.getElementById("search");
var searchbtn = document.getElementById("searchbtn");
var display = document.querySelector("#total")
var displayproduct = document.getElementById("product");
var result = document.getElementById("result")
function searchitem() {

  axios.get("/Westernwear/products", {}).then((res) => {
    datalist = res.data;

    if (searchvalue.value.trim() == '') {
      display.style.display = "block"
      productslists()
      searchvalue.value = ""
    }

    var value = searchvalue.value.trim().toLowerCase();
    datalist.filter((data) => {
      console.log(data)
      if (data.category.toLowerCase().includes(value)) {
        display.remove()
        return `
          <div class="container-fluid" id="container">
           <div class="row" id="product">
               <ul id="ultg">
               <li id="litag1"> 
               <img src="${data.image}" style="width:150px;height:150px"/>
               </li>
                <li id="litag2">${data.name}</li>
               <li id="litag3">${data.rating}</li>
               <li id="litag4">${data.price}</li>
               <li id="litag5">Shop now</li>
               </ul>
           </div>
         </div>
        `
        searchvalue.value = ""
      }
      // if (data.name.toLowerCase().includes(value)) {
      //   // display.remove()
      //   for (var item in data) {
      //     return `
      //          <div class="container-fluid" id="container">
      //          <div class="row" id="product">
      //              <ul id="ultg">
      //           <li id="litag1">
      //           <img src="${item.image}" width="150px" height="150px"/>
      //           </li>
      //           <li id="litag2">
      //           ${item.name}
      //           </li>
      //           <li id="litag3">
      //           ${item.rating}
      //           </li>
      //           <li id="litag4">
      //           ${item.price}
      //           </li>
      //           <li id="litag5">
      //           <button class="libtn" type="button">Shopnow</button>
      //           </li>
      //        </ul>
      //         </div>
      //        </div>          
      //        `
      //   }
      // }
      if (!data.category.toLowerCase().includes(value)) {
        display.style.display = "none"
        result.style.display = "block"
        searchvalue.value = ""
        setInterval(() => {
          result.style.display = "none"
        }, 2000)
      }
      // if (result.style.display == "none") {
      //   display.style.display = "block"
      // }
    })

  })
}
window.onload = function () {
  searchbtn.addEventListener('click', searchitem)
}
