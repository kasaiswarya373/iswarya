var applianceslist = []

function loadproducts(data) {
  var ultag = document.createElement('ul');
  ultag.setAttribute('id', 'ultg');
  var litag1 = document.createElement('li');
  litag1.setAttribute('id', 'litag1');
  var imagetag = document.createElement('img');
  imagetag.setAttribute('src', data.image);
  imagetag.setAttribute('id', 'pimg')
  imagetag.style.width = "150px";
  imagetag.style.height = "150px";
  litag1.appendChild(imagetag);
  ultag.appendChild(litag1);
  var breaktag = document.createElement('br');
  ultag.appendChild(breaktag);
  var litag2 = document.createElement('li');
  litag2.setAttribute('id', 'litag2');
  litag2.innerText = data.name;
  ultag.appendChild(litag2);
  var breaktag = document.createElement('br');
  ultag.appendChild(breaktag);
  var litag3 = document.createElement('li');
  litag3.setAttribute('id', 'litag3');
  litag3.setAttribute('class', 'rating');
  litag3.innerText = data.rating;
  var itag = document.createElement('i');
  itag.setAttribute('class', 'bi bi-star');
  itag.setAttribute('id', 'star');
  litag3.appendChild(itag)
  ultag.appendChild(litag3);
  var breaktag = document.createElement('br');
  ultag.appendChild(breaktag);
  var litag4 = document.createElement('li');
  litag4.setAttribute('id', 'litag4');
  litag4.innerText = "₹:" + data.price
  ultag.appendChild(litag4)
  var breaktag = document.createElement('br');
  ultag.appendChild(breaktag);
  var litag5 = document.createElement('li');
  litag5.setAttribute('id', 'litag5');
  litag5.setAttribute('type', 'button')
  litag5.setAttribute('class', 'libtn')
  litag5.innerText = "Buy now"
  ultag.appendChild(litag5);
  var main = document.querySelector('#Pappliances');
  main.appendChild(ultag)

}

function appliancesproducts() {
  axios.get('/appliances', {}).then((response) => {
    // console.log(response.data)
    applianceslist = response.data;
    for (var i = 0; i < applianceslist.length; i++) {
      loadproducts(applianceslist[i]);
    }

  })
}


var display = document.querySelector("#total")
var appliances = document.getElementById("appliances");
// WesternWear
appliances.addEventListener("click", () => {
  if (document.getElementById("login").style.display == "none" || document.getElementById("signup").style.display == "none") {
    display.remove()
    appliancesproducts()
  }
  else {
    alert("please login/signup your details")
  }
})
