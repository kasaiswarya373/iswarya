
var loginPage = () => {
var mainli = document.createElement('li');
var ul2 = document.createElement('ul');
ul2.setAttribute('class','login');
//litag1
var litag1 = document.createElement('li');
var imgdiv = document.createElement('div');
imgdiv.setAttribute('class','image imglogin');
litag1.append(imgdiv);
ul2.append(litag1);
//li tag2
var litag2 = document.createElement('li');
//label1
var lbtag1 = document.createElement('label');
lbtag1.setAttribute('class','setsize');
lbtag1.setAttribute('for','UserName');
lbtag1.innerText = 'UserName :';
litag2.append(lbtag1);
// input tag 1
var inputtag1 = document.createElement('input');
inputtag1.setAttribute('class','name');
inputtag1.setAttribute('type','text');
inputtag1.setAttribute('name','UserName');
inputtag1.setAttribute('maxlength','12');
litag2.append(inputtag1);
ul2.append(litag2);
//litag3
var litag3 = document.createElement('li');
//label2
var lbtag2 = document.createElement('label');
lbtag2.setAttribute('class','setsize');
lbtag2.setAttribute('for','Password');
lbtag2.innerText = 'Password:';
litag3.append(lbtag2);
// input tag 2
var inputtag2 = document.createElement('input');
inputtag2.setAttribute('class','password');
inputtag2.setAttribute('type','passowrd');
inputtag2.setAttribute('name','Passord');
inputtag2.setAttribute('maxlength','12');
litag3.append(inputtag2);
ul2.append(litag3);
//litag4
var litag4 = document.createElement('li');
// input tag 3
var inputtag3 = document.createElement('input');
inputtag3.setAttribute('class','button');
inputtag3.setAttribute('type','button');
inputtag3.setAttribute('value','Login');
litag4.append(inputtag3);
ul2.append(litag4);
//litag 5
var litag5 = document.createElement('li');
var div1 = document.createElement('div');
div1.setAttribute('class','center');
var a1 = document.createElement('a');
a1.innerText = 'Sign Up';
div1.append(a1);
litag5.append(div1);
ul2.append(litag5);
//litag6
var litag6 = document.createElement('li');
var div2 = document.createElement('div');
div2.setAttribute('class','center');
var a2 = document.createElement('a');
a2.innerText = 'Forgot Password ?';
div2.append(a2);
litag6.append(div2);
ul2.append(litag6);
mainli.append(ul2);
console.log(mainli);
document.querySelector('.mainul').append(mainli);
}
loginPage();

