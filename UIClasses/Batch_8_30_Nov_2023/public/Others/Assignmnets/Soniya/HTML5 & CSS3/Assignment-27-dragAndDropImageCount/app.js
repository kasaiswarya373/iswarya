var imgSrc;
var count = 0;

var onElementDragStart = (event) =>
{
   imgSrc = event.target.getAttribute("src");
   console.log(imgSrc);
}

var onElementDrop = (event) =>
{
    
    if(count == 0)
    {
    event.preventDefault();
    var divtag = document.createElement("div");
    divtag.setAttribute("id","imageDiv");
    var img = document.createElement("img");
    img.setAttribute("src",imgSrc);
    divtag.append(img);
    var span = document.createElement("span");
    span.innerText = "X";
    divtag.append(span);
    document.querySelector("#imgContainer").append(divtag);
    span.addEventListener("click",(event)=>
    {
        event.target.parentElement.remove();
        document.querySelector("#count").style.display = "none";
    })
    }
    else
    {
       var isimgDivExists = document.querySelector("#imageDiv");
       if(isimgDivExists)
       {
       var countSpan =  document.querySelector("#count");
       countSpan.style.display = "inline";
       countSpan.innerText = count;
       }
       
    }
    count++;
}

var onElementDragOver = (event) => 
{
    event.preventDefault();
    console.log("Element drag over");
    
}