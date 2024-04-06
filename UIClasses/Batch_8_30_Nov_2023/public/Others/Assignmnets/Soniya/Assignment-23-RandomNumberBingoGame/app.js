var randomNum;
var uniqueRandomNumsArray = [];
var player1List = [12,53,86,25,7,64,39,20,78,3,47,59,16,35,72,2,89,10,45,27,68,5,81,30,74,1,58,22,65,37,84,8,43,67,17,49,11,76,32,60,14,55,29,70,6];
var player2List = [41,19,75,50,33,80,4,54,24,69,36,87,9,46,62,26,61,18,51,42,77,21,52,34,73,15,57,28,71,13,56,31,79,38,88,23,48,63,44,85,40,82,66,90,83];
var player1Count = 0,player2Count = 0;
var randomNumsGeneraion = () =>
{
    do
    {
        randomNum = (Math.floor(Math.random() * 90) ) + 1;
    }
    while(uniqueRandomNumsArray.includes(randomNum))
    uniqueRandomNumsArray.push(randomNum);
    return randomNum;  
}

var uniqueRandomNumbers = () =>
{
    var uniqueNum = randomNumsGeneraion();
    $("#callerNumber").text(uniqueNum);
    bubblingAndWinnerFinding(uniqueNum);
    
}

var bubblingAndWinnerFinding = (randomValue) =>
{
    var  id = "#"+randomValue;
    var winner;
    $(id).css("background-color","rgb(98, 98, 240)");
    if(player1List.includes(randomValue))
    {
        
        if(player1Count == 44)
        {
            findingWinner("Player 1");
        }
        player1Count++;
    }
    else
    {
        
        if(player2Count == 44)
        {
            findingWinner("Player 2");
        }
        player2Count++;
      
    }
} 

var findingWinner = (winnerPlayer) =>
{
    $(".callerContainer").css("display","none");
    $("#winner").css("display","block");
    $("#winner").text(winnerPlayer +" Bingo!")
}