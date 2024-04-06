var employee = {
    imgurl : 'https://tse4.mm.bing.net/th?id=OIP.OVyp1nRXTnhhZNiLJ5iLrQHaHa&pid=Api&P=0&h=220',
    name : 'Jyothi',
    age : 30,
    gender : 'Female',
    deparment :'It',
    BasicSalary : 100000,
    Pf : 15,
    hra : 25,


}
var productDetails = () =>{
var mainlitag =document.createElement('li');
mainlitag.setAttribute('class','mainli');
var ultag = document.createElement('ul');
mainlitag.append(ultag);
ultag.setAttribute('class','outerblock');
var imglitag = document.createElement('li');
var imgtag = document.createElement('img');
imgtag.setAttribute('src',employee.imgurl);
imglitag.append(imgtag);
ultag.append(imglitag); 
var litag2 = document.createElement('li');
litag2.innerText =  `Name: ${employee.name}`;
ultag.append(litag2);
var litag3 = document.createElement('li');
litag3.innerText =  ` price: `;
var disc = employee.Price -((employee.Price * employee.disccount) / 100);
spantag2.innerText = 'Discount price';
litag3.append(spantag2);
ultag.append(litag3);
var litag4 = document.createElement('li');        
ultag.append(litag4);
litag4.innerText = `Company : ${employee.company}`;
var litag5 = document.createElement('li');
litag5.innerText =`Rating :${employee.rating}`;
ultag.append(litag5);
console.log(mainlitag);
document.querySelector('.productDetailsContainer').append(mainlitag);
}
productDetails();