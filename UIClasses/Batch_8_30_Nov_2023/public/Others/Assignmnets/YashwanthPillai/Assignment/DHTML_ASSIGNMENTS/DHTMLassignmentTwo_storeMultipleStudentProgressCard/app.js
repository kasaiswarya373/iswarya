var stdProgCardList =[];

var stdProgCard = {
    stdinfo() {
      stdProgCard.sname = document.querySelector("#Sname").value;
      stdProgCard.srollno = document.querySelector("#Sid").value;
      stdProgCard.sage = document.querySelector("#Sage").value;
      stdProgCard.sgender = document.querySelector("input[name=sgender]").value;
      stdProgCard.sclass = document.querySelector("#Sclass").value;
      stdProgCard.ssection = document.querySelector("#ssec").value;
      stdProgCard.smarks = [];
  
      for (var i = 1; i <= 5; i++) {
        var temp = "#m" + i;
        var value = parseInt(document.querySelector(temp).value);
        stdProgCard.smarks.push(value);
      }
  
      stdProgCard.getTotalAndAvg();
    },
  
    getTotalAndAvg() {
      stdProgCard.Total = 0;
  
      for (let i = 0; i < stdProgCard.smarks.length; i++) {
        stdProgCard.Total = stdProgCard.Total + stdProgCard.smarks[i];
      }
  
      stdProgCard.Avg = stdProgCard.Total / stdProgCard.smarks.length;
      stdProgCard.getGrade();
    },
  
    getGrade() {
      if (stdProgCard.Avg > 40) {
        document.querySelector(".pof").style.border = "5px solid green ";
        stdProgCard.Grade = "YOU ARE PASSED";
      } else {
        document.querySelector(".pof").style.border = "5px solid red ";
        stdProgCard.Grade = "YOU ARE FAILED";
      }
  
      stdProgCard.displayProgCard();
    },
    displayProgCard() {
      document.querySelector(".display-container").style.display = "block";
  
      document.querySelector("#s-name").innerText = stdProgCard.sname;
      document.querySelector("#s-id").innerText = stdProgCard.srollno;
      document.querySelector("#s-age").innerText = stdProgCard.sage;
      document.querySelector("#s-gender").innerText = stdProgCard.sgender;
      document.querySelector("#s-class").innerText = stdProgCard.sclass;
      document.querySelector("#s-sec").innerText = stdProgCard.ssection;
      document.querySelector("#s-total").innerText = stdProgCard.Total;
      document.querySelector("#s-avg").innerText = stdProgCard.Avg;
      document.querySelector("#s-grade").innerText = stdProgCard.Grade;

      
  
      resetfields ()
    },
};

  
  var generateProgCard = () => {
    stdProgCard.stdinfo();

    
    stdProgCardList.push(JSON.parse(JSON.stringify(stdProgCard)));
  };
  
  var resetfields = () => {
    document.querySelector("#Sname").value = "";
    document.querySelector("#Sid").value = ""
    document.querySelector("#Sage").value = ""
    document.querySelector("input[name=sgender]").value = ""
    document.querySelector("#Sclass").value = ""
    document.querySelector("#ssec").value = ""
    document.querySelector("#m1").value = ""
    document.querySelector("#m2").value = ""
    document.querySelector("#m3").value = ""
    document.querySelector("#m4").value = ""
    document.querySelector("#m5").value = ""
  };
  
  console.log(stdProgCardList);