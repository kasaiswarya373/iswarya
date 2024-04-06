var productTemplate = '';
document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement("div");
    div.setAttribute("class", "loadDiv");
    var imgtag = document.createElement("img");
    imgtag.setAttribute("class","loadImg")
    imgtag.setAttribute("src", "https://img.freepik.com/free-psd/super-offer-creative-sale-banner-design-template_47987-13073.jpg");
    div.appendChild(imgtag);
    document.body.appendChild(div);

    // Calculate top and left positions for centering
    var topPos = (window.innerHeight - div.clientHeight) / 2;
    var leftPos = (window.innerWidth - div.clientWidth) / 2;

    // Set the position of the div
    div.style.position = "fixed";
    div.style.top = topPos + "px";
    div.style.left = leftPos + "px";
    document.querySelector("header").classList.add("blur");
    document.querySelector("main").classList.add("blur");
    document.querySelector("footer").classList.add("blur");

    setTimeout(function() {
        div.remove(); // Remove the div after 2 seconds
        document.querySelector("header").classList.remove("blur");
        document.querySelector("main").classList.remove("blur");
        document.querySelector("footer").classList.remove("blur");
    
    }, 2000);
});
document.addEventListener("DOMContentLoaded", function() {
    axios.get('/onloadImageCarosuel')
        .then(res => {
           carosuelData = res.data.slider;
           var img1 = Math.round(Math.random() *carosuelData.length);
           var img2 = Math.round(Math.random() *carosuelData.length);
           var img3 = Math.round(Math.random() *carosuelData.length);
           document.getElementById("image1").src = carosuelData[img1];
           document.getElementById("image2").src = carosuelData[img2];
           document.getElementById("image3").src = carosuelData[img3];
        })
        .catch(error => {
           // console.error('Error fetching data:', error);
        });
});

