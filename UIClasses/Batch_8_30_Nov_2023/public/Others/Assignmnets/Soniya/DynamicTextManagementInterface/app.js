var inputTxt = [];

/***
 * onclicking 'add' button we get the input value
 * making the input box empty to give input for next time
 * **/
var addText = () =>
{
    var txt = document.querySelector("#textBox").value.trim(); 
    document.querySelector("#textBox").value = "";
    showTxt(txt);
}

/**
 * 
 * @param {text- input value pass by the user} 
 * pushing the getting input values into array to know the length, with it to stop the setInterval
 * In setInterval, checking if array is empty then stop process if not call the removeAndAdd method
 */
var showTxt = (text) =>
{
    inputTxt.push(text);
    var divtag = document.createElement("div");
    divtag.innerText = text;
    document.querySelector("#leftBottomContainer").append(divtag);
    
    var removeAndAddInterval = setInterval(() =>
    {
        if (inputTxt.length == 0) 
        {
            clearInterval(removeAndAddInterval);
        }
        else
        {
        removeAndAdd(); 
        }
    },10000);
} 
/**
 * dynamically displaying the text which is removed from the leftBottomContainer by creating div tags
 * In the if block we are  removing the text that which append to the container firstly with div tag.
 */
var removeAndAdd = () =>
{
    var removedText = inputTxt.shift();
    var div = document.createElement("div");
    div.innerText = removedText;
    document.querySelector("#removedTextDispayContainer").append(div);

    var leftBottomContainer = document.querySelector("#leftBottomContainer");
    if (leftBottomContainer.children.length > 0) {
        leftBottomContainer.removeChild(leftBottomContainer.children[0]);
    }
}

/**
 * clearing all content which is dynamically generated 
 */
var clearContent = () =>
{
    inputTxt = []; //inputTXt.length = 0 - Making the array empty in two ways
    document.querySelector("#leftBottomContainer").innerHTML = "";
    document.querySelector("#removedTextDispayContainer").innerHTML="";
}

/**
 * if the container is with elements, showing else block with msg "elements not completed yet" otherwise displaying "success" message
 * 
 */
var showPopUp = () =>
{
    if(inputTxt.length == 0)
    {
        alert("Hooray! successfully completed");
    }
    else
    {
        alert("Oops! The container is not completed yet.");
    }
}








