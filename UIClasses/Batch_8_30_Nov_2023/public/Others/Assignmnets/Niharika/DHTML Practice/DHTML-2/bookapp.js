var bookdetailslist = [
    {
        name : 'The Magic Of the Lost Temple',
        author : 'Sudha Murthy',
        price : 200,
        discountpercent : 12,
        publishers : 'Penguin Random House India',
        imageurl : "https://m.media-amazon.com/images/I/711gZL2yHsL._SY522_.jpg"
    },
    {
        name : 'Evergreen Stories of Tenali Raman',
        author : 'C. L. L. Jayaprada',
        price : 250,
        discountpercent : 15,
        publishers : 'Childrens Book Trust',
        imageurl : "https://bookstation.in/cdn/shop/products/45024_front.jpg?v=1683551837&width=1024"
    },
    {
        name : '365 Panchatantra Stories',
        author : 'OM KITZ',
        price : 400,
        discountpercent : 15,
        publishers : 'OM Book Service',
        imageurl : "https://m.media-amazon.com/images/I/71uLG5ah40L._SY522_.jpg"
    },
    {
        name : '101 Witty Stories of Akbar and Birbal ',
        author : 'Wonder House Books',
        price : 450,
        discountpercent : 20,
        publishers : 'Wonder House Books',
        imageurl : "https://m.media-amazon.com/images/I/71mCXZMJzEL._SY522_.jpg"
    },
    {
        name : 'Princess Fairy Tales',
        author : 'Wonder House Books',
        price : 350,
        discountpercent : 15,
        publishers : 'Wonder House Books',
        imageurl : "https://m.media-amazon.com/images/I/51MoQcxglVL._SX342_SY445_.jpg"
    }   
];
var addbookdetails = (bookdetails) => {
    var maintag = document.createElement("div");
    maintag.setAttribute("class" ,"bdetails");
    var div1 = document.createElement("div");
    div1.setAttribute("class" , "imgdetails");
    var itag = document.createElement("img");
    itag.setAttribute("class","idetails");
    itag.setAttribute("src",bookdetails.imageurl);
    div1.append(itag);
    maintag.append(div1);

    var div2 = document.createElement("div");

    var div3 = document.createElement("div");
    div3.setAttribute("class","details");
    var b1 = document.createElement("b");
    b1.innerText = "Book-Name : ";
    div3.append(b1);
    var s1= document.createElement("span");
    s1.innerText = bookdetails.name;
    div3.append(s1);
    div2.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class","details");
    var b2 = document.createElement("b");
    b2.innerText = "Author : ";
    div4.append(b2);
    var s2= document.createElement("span");
    s2.innerText = bookdetails.author;
    div4.append(s2);
    div2.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class","details");
    var b3 = document.createElement("b");
    b3.innerText = "Price : ";
    div5.append(b3);
    var sp1 = document.createElement("span");
    sp1.setAttribute("class", "actualprice");
    sp1.innerText = bookdetails.price;

    var sp2 = document.createElement("span");
    sp2.setAttribute("class","discountprice")
    sp2.innerText = bookdetails.price-(bookdetails.price*bookdetails.discountpercent)/100;
    div5.append(sp1);
    div5.append(sp2);
    div2.append(div5);

    var div6 = document.createElement("div");
    div6.setAttribute("class","details");
    var b4 = document.createElement("b");
    b4.innerText = "Publishers Name: ";
    div6.append(b4);
    var s4 = document.createElement("span");
    s4.innerText = bookdetails.publishers;
    div6.append(s4);
    div2.append(div6);

    maintag.append(div2);
    console.log(maintag);
    document.querySelector(".booksdetails").append(maintag);
}
for(var i = 0 ; i<bookdetailslist.length;i++){
    addbookdetails(bookdetailslist[i]);
}



