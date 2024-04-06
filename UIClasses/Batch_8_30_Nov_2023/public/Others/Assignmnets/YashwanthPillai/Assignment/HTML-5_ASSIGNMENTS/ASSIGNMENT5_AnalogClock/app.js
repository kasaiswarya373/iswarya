setInterval(() => {
  CurrentDate = new Date();
  hrs = CurrentDate.getHours();
  min = CurrentDate.getMinutes();
  sec = CurrentDate.getSeconds();

  hrs_rotation =( 30*hrs + (min/2));
  min_rotation = 6*min
  sec_rotation = 6*sec

  document.querySelector(".hrs").style.transform = `rotate(${hrs_rotation}deg)`
  document.querySelector(".min").style.transform = `rotate(${min_rotation}deg)`
  document.querySelector(".sec").style.transform = `rotate(${sec_rotation}deg)`
}, 1000);
