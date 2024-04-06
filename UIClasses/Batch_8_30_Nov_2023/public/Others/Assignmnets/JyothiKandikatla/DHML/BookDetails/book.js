var bookdetails = [
<<<<<<< HEAD
     {
=======
  b1={
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
        imageUrl:'https://m.media-amazon.com/images/I/91b7tm523VL._SY466_.jpg',
        name : 'The Covenant of Water',
        author : 'Abraham Verghese',
        price : '$15' ,
        rating : 4.2 
    },
<<<<<<< HEAD
    {
=======
    b2={
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
        imageUrl:'https://m.media-amazon.com/images/I/91lUa7PChXL._AC_UL480_QL65_.jpg',
        name : 'The Wager: A Tale of Shipwreck, Mutiny and Murder',
        author : 'David Grann',
        price : '$11' ,
        rating : 3.9 
    },
<<<<<<< HEAD
    {
=======
    b3={
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
        imageUrl:'https://m.media-amazon.com/images/I/61pZ0M900BL._AC_UL480_QL65_.jpg',
        name : 'Yellowface: A Reese`s Book Club Pick',
        author : 'R. F Kuang',
        price : '$10' ,
        rating : 4 
    },
<<<<<<< HEAD
  {
=======
  b4={
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
        imageUrl:'https://m.media-amazon.com/images/I/91CQZ+V4ypL._AC_UL480_QL65_.jpg',
        name : "Hello Bethisautiful (Oprah's Book Club): A Novel",
        author : 'Ann Napolitano',
        price : '$9.99' ,
        rating : 4.4 
    },

];
<<<<<<< HEAD
var s = ['The Covenant of Water', 'Yellowface: A Reese`s Book Club Pick',
'The Wager: A Tale of Shipwreck, Mutiny and Murder', "Hello Bethisautiful (Oprah's Book Club): A Novel"]; 

console.table(s)
=======
var s = ['The Covenant of Water','The Wager', 'Yellowface',
 "Hello Bethisautiful"]; 

  var autofill = () =>{
    var serachvalue = document.getElementById('searchBox').value;
    serachvalue = serachvalue.trim();
    serachvalue = serachvalue.toUpperCase(serachvalue);
    var a = '';
    for(var i = 0; i < s.length;i++){
      if(s[i].substring(0,serachvalue.length) == serachvalue){
          var div = document.createElement('div');
          div.setAttribute('id',`a1`);
          document.querySelector('.autofillContainer').append(div);
          document.querySelector('.autofillContainer').style.display = 'block';
          a += s[i]+'<br>';   
          document.getElementById('a1').innerHTML = a;
          }
        }
        
      }
      
    /*  s = s.filter((value)=>{
        var serachvalue = document.getElementById('searchBox').value;
        serachvalue = serachvalue.trim();
        serachvalue = serachvalue.toUpperCase(serachvalue);
        for(var i = 0 ; i < 3;i++){
          if(value.substring(0,serachvalue.length) == serachvalue){
          var div = document.createElement('div');
          div.setAttribute('id',`a${i+1}`);
          document.querySelector('.autofillContainer').append(div);
          document.querySelector('.autofillContainer').style.display = 'block';
          document.getElementById(`a${i+1}`).innerText =value;
          }
        }
      });*/
  


 var display = () =>{
  document.querySelector('#a1').style['background-color'] = 'cornflowerblue';

 }
  var none = () =>{
      document.querySelector('#a1').style['background-color'] = 'white';

  } 
    
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
  


var displayBookDetails = (book) =>{
<<<<<<< HEAD
=======
  
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
    var mainlitag =document.createElement('li');
    mainlitag.setAttribute('class','mainli');
    var ultag = document.createElement('ul');
    mainlitag.append(ultag);
    ultag.setAttribute('class','outerblock');
    var imglitag = document.createElement('li');
    var imgtag = document.createElement('img');
    imgtag.setAttribute('src',book.imageUrl);
    imglitag.append(imgtag);
    ultag.append(imglitag); 
    var litag2 = document.createElement('li');
    litag2.innerText =  ` ${book.name}`;
    ultag.append(litag2);
    var litaga = document.createElement('li');
    litaga.setAttribute('class','author');
<<<<<<< HEAD

=======
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
    litaga.innerText =  `by  ${book.author}`;
    ultag.append(litaga);
    var litag3 = document.createElement('li');
    litag3.innerText =  ` price: `;
    var spantag1 = document.createElement('span');
    spantag1.setAttribute('class','price');
    spantag1.innerText = book.price;
    litag3.append(spantag1);
<<<<<<< HEAD
   
=======
>>>>>>> 9422c9bbe1732ac30445ad9857e2734ac8147b24
    ultag.append(litag3);
    var litag5 = document.createElement('li');
    litag5.innerText =`Rating :${book.rating}`;
    ultag.append(litag5);
    console.log(mainlitag);
    document.querySelector('.bookdetails').append(mainlitag);
    }
   // displayBookDetails(bookdetails);

