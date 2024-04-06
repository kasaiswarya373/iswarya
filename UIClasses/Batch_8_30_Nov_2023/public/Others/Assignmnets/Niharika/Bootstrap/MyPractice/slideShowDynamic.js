var images = [
    {
        imageurl : "https://images.pexels.com/photos/36753/flower-purple-lical-blosso.jpg"
    },
    {
        imageurl : "https://static.vecteezy.com/system/resources/previews/022/267/874/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg"
    },
    {
        imageurl : "https://static.vecteezy.com/system/resources/previews/022/257/312/large_2x/rose-flower-pictures-beautiful-roses-love-rose-flower-beautiful-flowers-wallpapers-ai-generated-free-photo.jpg"
    },
    {
        imageurl : "https://i.pinimg.com/236x/9d/be/47/9dbe47b8296f1f0aebea4cd3c06e4016.jpg"
    },
    {
        imageurl : "images/beautiful-flowers-12,jpg"
    }
]
var singleSlideImageTemplate;
var singleSlideImageBtnTemplate;
document.addEventListener("DOMContentLoaded", () => {
    singleSlideImageBtnTemplate = Handlebars.compile($("#singleSlideImageBtn").html());
    singleSlideImageTemplate = Handlebars.compile($(".carosuelImageSlider").html());
    images.forEach((item, index) => {
        
        var activeState = index == 0 ? 'active' : '';
        item.active_state = activeState
        $(".carousel-inner").append(singleSlideImageTemplate(item))

        var buttonObj = {index: index, counter: index + 1, activeClass: activeState }
        $(".carousel-indicators").append(singleSlideImageBtnTemplate(buttonObj));

    });
});

