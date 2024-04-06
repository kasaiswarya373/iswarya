
   // var play1 = 0;
    //var play2 = 0;

    var choices = ["rock" , "paper" , "scissor"];
    //var play1 = document.querySelector()

    var playerschoice = document.querySelectorAll(".selection");
    var play1 = document.querySelector("#user");
    var play2 = document.querySelector("#comp");
    var coment = document.querySelector("#coment")

  /*  choose.forEach((select) => {
        console.log(select)
            select.addEventListener("click" , () => {
                var selectid = select.getAttribute("id");
                    console.log("clicked" , selectid);
            })
    }) */
    console.log(playerschoice)
    var playgame = (playerschoice) => {
        var computerchoice = choices[Math.floor(Math.random() * 3)];

        //console.log(computerchoice)
    

    var result = "" ;
  

    if(playerschoice === computerchoice){
        result = "IT'S  A  TIE" ;
    }
    else{
        switch(playerschoice){
            case "rock" :
                if(computerchoice === "scissor"){
                   result =  "You Win";
                   
                } 
                else{
                    result = "You Loose";
                }
                break;

                case "paper" :
                    if(computerchoice === "rock"){
                       result =  "You Win";
                       
                    } 
                    else{
                        result = "You Loose";
                    }
                    break;
                    case "scissor" :
                        if(computerchoice === "paper"){
                           result =  "You Win";
                           
                        } 
                        else{
                            result = "You Loose";
                        }
                        break;
        }

        
    }

   // console.log(playerschoice)

   play1.textContent = `Player1 => ${playerschoice} `;
   play2.textContent = `Player2 => ${computerchoice}`
   coment.textContent = `Player => ${result}`
}

