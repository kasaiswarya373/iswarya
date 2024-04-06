var kidsBooks = ['Sleeping Beauty','Hansel and Gretel','Pinocchio', 'Snow White and the Seven Dwarfs','Rapunzel','The Adventures of Captain UnderPants','Harry Potter','BedTime Stories','Grandmas Bag of Stories','Panchatantra Stories','Chandamama Stories','Tenali Raman Stories','The Ant and the GrassHopper','Gullivar and Liliputs','The Hare and Tortoise'];

var displayBooks = (event) => {
    var query = event.target.value.toLowerCase();
    var books = document.querySelector(".resultsBox");
    books.style.display = query.trim() === '' ? 'none' : 'block';
    books.innerHTML = '';
    if (query.trim() === '') {
        return;
    }
    var matchingBooks = kidsBooks.filter(anybook => anybook.toLowerCase().startsWith(query));

    for (var i = 0; i < matchingBooks.length; i++) {
        var book = matchingBooks[i];
        var id = "book" + i;
        var div = document.createElement("div");

        div.setAttribute("id", id);
        div.setAttribute("class", 'individualBlock');
        div.innerText = book;
        div.setAttribute("data-book", book);

        div.onclick = function () {
            // Retrieve the book information from the custom attribute
            var clickedBook = this.getAttribute("data-book");
            displayOnSearch(id, clickedBook);
        };
        books.appendChild(div);
    }
}

var displayOnSearch = ( id , book) => {
    console.log("Clicked on book:", book);
    document.querySelector("#searchbar").value = book;
    document.querySelector(".resultsBox").style.display = 'none';
}
var displayBook = () =>{
    var bookname = document.querySelector("#searchbar").value;
    //console.log(bookname);
    //var bookInfo = null;
    var bookInfo = '';
    for(var i = 0 ; i<booksList.length;i++){
        if(bookname == booksList[i].name){
            bookInfo = booksList[i];
            break;
        }
    }
    console.log(bookInfo);
    document.querySelector(".displayingBook").innerHTML = '';

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class","maindiv");

    var div1 = document.createElement("div");
    div1.setAttribute("class","imgclass");
    var imgtag = document.createElement("img");
    imgtag.setAttribute("class","img");
    imgtag.setAttribute("src",bookInfo.imageurl);
    div1.append(imgtag);
    maindiv.append(div1);

    var detailsdiv = document.createElement("div");
    detailsdiv.setAttribute("class","bookdetails");

    var div2 = document.createElement("div");
    div2.setAttribute("class","indblock");
    var b1 = document.createElement("b");
    b1.innerText = 'BOOK-NAME : ';
    var s1 = document.createElement("span");
    s1.innerText = bookInfo.name;
    div2.append(b1);
    div2.append(s1);
    detailsdiv.append(div2);

    var div3 = document.createElement("div");
    div3.setAttribute("class","indblock");
    var b2 = document.createElement("b");
    b2.innerText = 'AUTHOR : ';
    var s2 = document.createElement("span");
    s2.innerText = bookInfo.author;
    div3.append(b2);
    div3.append(s2);
    detailsdiv.append(div3);

    var div4 = document.createElement("div");
    div4.setAttribute("class","indblock");
    var b3 = document.createElement("b");
    b3.innerText = 'PUBLISHERS : ';
    var s3 = document.createElement("span");
    s3.innerText = bookInfo.publishers;
    div4.append(b3);
    div4.append(s3);
    detailsdiv.append(div4);

    var div5 = document.createElement("div");
    div5.setAttribute("class","indblock");
    var b4 = document.createElement("b");
    b4.innerText = 'READING-AGE : ';
    var s4 = document.createElement("span");
    s4.innerText = bookInfo.Readingage;
    div5.append(b4);
    div5.append(s4);
    detailsdiv.append(div5);
    maindiv.append(detailsdiv);
    document.querySelector(".displayingBook").append(maindiv);
}
