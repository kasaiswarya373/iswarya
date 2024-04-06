var arrbooktitle = ['The bee sting','Chain gangall-Stars','Eastbound', 'The fraud','North woods', 'The best mind','Fire weather','Fourth wing'];
var aarr = [2000, 4000, 5000, 6000, 6000];
var arrBookDetail = [
    {Name : "The bee sting", Author:"Paul Murray", Published : 2003, img : "imges/71b0Sq1XKHL._AC_UF1000,1000_QL80_.jpg", Referance_link : "https://en.wikipedia.org/wiki/The_Bee_Sting"},
    {Name : "Chain gangall-Stars", Author:"Nana Kwame Adjei-Brenyah", Published : 2023, img : "imges/81RyrRSy+eL._AC_UF1000,1000_QL80_.jpg", Referance_link : "https://en.wikipedia.org/wiki/The_Bee_Sting"},
    {Name : "Eastbound", Author:"Maylis de Kerangal", Published : 2022, img : "imges/eastbound.jpg", Referance_link : "https://www.nytimes.com/2023/02/07/books/review/maylis-de-kerangal-eastbound.html"},
    {Name : "The fraud", Author:" Zadie Smith", Published : 2023, img : "imges/thefraud.PNG", Referance_link : "https://www.nytimes.com/2023/08/28/books/review/zadie-smith-the-fraud.html"},
    {Name : "North woods", Author:" Daniel Mason", Published : 2023, img : "imges/northwood.PNG", Referance_link : "https://www.nytimes.com/2023/09/19/books/review/daniel-mason-north-woods.html"},
    {Name : "The best mind", Author:"Jonathan Rosen", Published : 2023, img : "imges/theBestMind.PNG", Referance_link : "https://www.nytimes.com/2023/04/19/books/review/the-best-minds-jonathan-rosen.html"},
    {Name : "Fire weather", Author:"John Vaillant", Published : 2023, img : "imges/fireweather.PNG", Referance_link : "https://www.nytimes.com/2023/06/06/books/review/fire-weather-john-vaillant.html"},
    {Name : "Fourth wing", Author:"Rebecca Yarros", Published : 2023, img : "imges/fourthwing.PNG", Referance_link : "https://en.wikipedia.org/wiki/Fourth_Wing"}
]
function showBookDetail(){
    var input = document.getElementById('userinput').value;
    document.getElementById('dropdowndiv').innerHTML =""
    // console.log(input);
    document.getElementById('mainContainer').style.display = "block";
    document.getElementById('mainContainer').style.zIndex = "1";

    var result = arrBookDetail.find(function(detail){
        return detail.Name == input;
    })
    // console.log(result);
    document.getElementById('bookName').innerHTML = result.Name;
    document.getElementById('bookAuthor').innerHTML = result.Author;
    document.getElementById('publiceDate').innerHTML = result.Published;
    document.getElementById('bookReferance').innerHTML = result.Referance_link;
    document.getElementById('imgcontent').src = result.img;
}
function suggest(value){
    document.getElementById('dropdowndiv').innerHTML ='';
    var ltfirst = value.charAt(0).toUpperCase();
    var alleter = value.substring(1,).toLowerCase();
    var reqletter = ltfirst + alleter;
   var result = filsuggest(reqletter);
   var count = 0;
    for(var dis of result){
        var div = document.createElement('div');
        div.innerHTML = dis;
        div.setAttribute('id',`m${count}`)
        div.addEventListener('click', function(){
            showBook(this.id);
        });
        document.getElementById('dropdowndiv').append(div);
        count++;
    } 
}
function filsuggest(title){
    var result = arrbooktitle.filter(function(detail){
                return detail.match(title);
            })
     return result
}
function showBook(res){
    var rest = document.getElementById(`${res}`).innerHTML;
    document.getElementById('userinput').value = rest;
}