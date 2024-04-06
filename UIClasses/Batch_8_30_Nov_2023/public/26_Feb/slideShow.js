
var imagesContent = [
    {
        imageurl: 'https://www.bennetts.co.uk/-/media/bikesocial/2022-december-images/top-10-ten-fastest-bikes/top-10-ten-fastest-bikes_06.ashx?h=493&w=740&la=en&hash=1A152F018E9DC26838574E4BD657DEAC60B30EFC',
        title: 'Super Bike',
        caption: 'Good one to Ride'
    },
    {
        imageurl: 'https://imgd.aeplcdn.com/476x268/n/cw/ec/129571/v302c-right-front-three-quarter.gif?isig=0',
        title: 'The Redddd',
        caption: 'Bulky one to ride'
    },
    {
        imageurl: 'https://bd.gaadicdn.com/processedimages/suzuki/hayabusa/640X309/hayabusa6433f99fc006a.jpg',
        title: 'Suzuki Ones',
        caption: 'Go with this'
    },
    {
        imageurl: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-153772,resizemode-75,msid-104818819/top-trending-products/toys-and-games/best-electric-bikes-for-kids-in-india-for-an-adventurous-experience-for-your-kids.jpg',
        title: 'The Little Rider',
        caption: 'Fo for this'
    }
];


var singleSlideImageTemplate;
var singleSlideImageBtnTemplate;
document.addEventListener("DOMContentLoaded", () => {
    singleSlideImageBtnTemplate = Handlebars.compile($("#singleSlideImageBtn").html());
    singleSlideImageTemplate = Handlebars.compile($("#singleSlideImage").html());

    // Image template generation and button
    imagesContent.forEach((item, index) => {
        
        /*if (index == 0) {
            item.active_state = 'active';

        } else {
            item.active_state = '';
        } */ 
        var activeState = index == 0 ? 'active' : '';
        item.active_state = activeState
        $(".carousel-inner").append(singleSlideImageTemplate(item))

        var buttonObj = {index: index + 1, activeClass: activeState }
        $(".carousel-indicators").append(singleSlideImageBtnTemplate(buttonObj));

    });
})





