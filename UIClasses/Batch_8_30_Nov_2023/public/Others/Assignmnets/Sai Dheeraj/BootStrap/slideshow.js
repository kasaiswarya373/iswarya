var imagescontent = [
    {
        imageurl: 'https://www.bentleymotors.com/content/dam/bentley/Master/Models/derivative-strategy-/continental-gtc/gtc-azure/24-my-v2/1920x960_hero_range_final.jpg/_jcr_content/renditions/original.image_file.1920.960.file/1920x960_hero_range_final.jpg',
        title: 'Intoducing All New Bentley',
        caption: '"Always Lead Never Follow"'
    },
    {
        imageurl: 'https://cdn.cnn.com/cnnnext/dam/assets/200831212102-the-new-rolls-royce-ghost-exlarge-169.jpg',
        title: 'RollsRoyce',
        caption: '"Rich for the Richest"'
    },
    {
        imageurl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/C-Class/10858/1690452480264/front-left-side-47.jpg',
        title: 'Benz',
        caption: '"Introducing New CL-A Class, Unlike Any Other"'
    },
    {
        imageurl: 'https://car-images.bauersecure.com/wp-images/13190/fpace_01.jpg',
        title: ' The New JagaurF',
        caption: '"The Art of Performance"'
    },
];

var  singleslidetemplateimage;
var singleslideBtntemplateimage; 

document.addEventListener("DOMContentLoaded" , () => {
    singleslideBtntemplateimage = Handlebars.compile($("#singleslideimageBtn").html())
    singleslidetemplateimage = Handlebars.compile($("#singleslideimage").html());

    imagescontent.forEach((item, index) => {
        
      /*  if (index == 0) {
            item.active_state = 'active';
        } else {
            item.active_state = '';
        } */

        var activeState = index == 0 ? 'active' : '';
        item.active_state = activeState;
        $(".carousel-inner").append(singleslidetemplateimage(item));

        var buttonObj = {index: index, counter: index + 1, activeClass: activeState}
        $(".carousel-indicators").append(singleslideBtntemplateimage(buttonObj));
    });
})



 // singleslidetemplateimage = Handlebars.compile($("#singleslideimage").html());



