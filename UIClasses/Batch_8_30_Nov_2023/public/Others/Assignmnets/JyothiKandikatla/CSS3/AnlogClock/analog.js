const handhours = document.querySelector('.hand.hourhand');
const handminutes = document.querySelector('.hand.minhand');
const handseconds = document.querySelector('.hand.sechand');
var getCurrentTime = () => {
let date = new Date();
let currentHours = date.getHours();
let currentMin = date.getMinutes();
let currentSec = date.getSeconds();
handhours.style.transform = `rotate(${currentHours * 2+ currentMin/2}deg)`;
handminutes.style.transform = `rotate(${currentMin *3}deg)`;
handseconds.style.transform = `rotate(${currentSec *3}deg)`;
}
setInterval(() =>{
    getCurrentTime();
} ,1000);
