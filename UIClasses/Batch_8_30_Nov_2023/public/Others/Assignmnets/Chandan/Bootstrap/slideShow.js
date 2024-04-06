var imagesContent = [
    {
        imageurl: 'https://wallpapers.com/images/hd/black-ducati-diavel-1260-motor-bike-vfd28436b4rg4snd.jpg',
        title: 'Ducati bike',
        caption: 'Best to ride',
    },
    {
       imageurl:'https://3.bp.blogspot.com/--MYZ-fRxcLQ/Vh40QV-xEoI/AAAAAAAAKrc/eh4WYZ902_k/s1600/new-latest-aprilia-bike-images-hd.jpg',
       title: 'super bike',
       caption: 'best to ride',
    },
    {
        imageurl:'https://besthqwallpapers.com/Uploads/21-11-2019/112445/thumb2-aprilia-rsv4-rr-raceway-2019-bikes-hdr-superbikes.jpg',
        title:'super bike',
        caption:'best to ride',
    },
    {
        imageurl:'https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2F3_Honda_X_Blade_19afdfda76.png&w=640&q=75',
        title:'new one ',
        caption:'bulky to ride',
    }, 
];

var singleSlideImageTemplate;
var singleSlideImageBtnTemplate;  

document.addEventListener("DOMContentLoaded", () => {
    singleSlideImageBtnTemplate = Handlebars.compile($("#singleSlideImageBtn").html());
    singleSlideImageTemplate = Handlebars.compile($("#singleSlideImage").html());
   

    // image template generation and button
    imagesContent.forEach((item,index) => {
       /* if(index == 0){
            item.active_static = 'active';
        } else {
            item.active_static = '';
        } */

        item.activeState = index == 0 ? 'active': '';
        item.active_state = activestate
        $(".carousel-inner").append(singleSlideImageTemplate(item))
       

        var buttonObj = {index,counter: index + 1, activeClass:  activestate }
        $(".carousel-indicators").append(singleSlideImageBtnTemplate(buttonObj));
    });
});