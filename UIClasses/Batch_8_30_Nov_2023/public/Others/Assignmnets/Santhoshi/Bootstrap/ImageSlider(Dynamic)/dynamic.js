var imageDetails = [
    {
        imageurl : "https://www.shilpakalainteriors.in/images/gallery/Kitchen/K(1).jpg",
        title : "Modular Kitchen - origination of sweet , spices ......",
        caption : "Adds flavours to your food" 
     },
     {
        imageurl : "https://88designbox.com/upload/2015/11/10/bedroom-interior-design-for-girls-01.jpg",
        title : "Little ones bedroom ",
        caption : "Dad's little Princess dreams here" 
     },
     {
         imageurl : "https://media.designcafe.com/wp-content/uploads/2023/11/12105638/pooja-room-designs-in-hall.jpg",
         title : "Place of Divine Spirituality",
         caption : "Quiet the mind and the soul will speak"
     },
     {
        imageurl : "https://i.pinimg.com/originals/17/2f/44/172f442d832472de634af2928124a77e.jpg",
        title : "Living room lives",
        caption : "Place of gatherings" 
     },
     {
        imageurl : "https://media.designcafe.com/wp-content/uploads/2023/03/10124110/study-table-designs-for-students.jpg",
        title :  "space efficient study table",
        caption : "place of Knowledge" 
     },
 
 
]


var singleSlideImageTemplate;
var singleSlideImageBtnTemplate;
document.addEventListener("DOMContentLoaded" , () => {
     singleSlideImageTemplate = Handlebars.compile($("#singleSlideImage").html());
     singleSlideImageBtnTemplate = Handlebars.compile($("#singleSlideImageBtn").html()); // don't forget error found

 
     imageDetails.forEach((item , index) => {
        
        var activeState = index == 0 ? 'active' : "" ;
        item.active_state = activeState       // careful error found
        $(".carousel-inner").append(singleSlideImageTemplate(item));

        var buttonObj = {index : index , counter : index + 1 , activeClass : activeState }; // error found be careful
        $(".carousel-indicators").append(singleSlideImageBtnTemplate(buttonObj));

    })
})

