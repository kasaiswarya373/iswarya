document.addEventListener("DOMContentLoaded", function () {
    var hourHand = document.getElementById("hourHand");
    var minHand = document.getElementById("minHand");
    var secHand = document.getElementById("secHand");

    function rotateClockHands() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();

        var secDegree = seconds * 6; 
        var minDegree = minutes * 6 ;
        var hourDegree = hours * 30 + minutes * 0.5; 

        secHand.style.transform = "rotate(" + secDegree +"deg)";
        minHand.style.transform = "rotate(" + minDegree + "deg)";
        hourHand.style.transform = "rotate(" + hourDegree + "deg)";
    }

    setInterval(rotateClockHands, 1000); 
});
