class StdProgCard {
    constructor(obj){
      this.sname = obj.sname
      this.srollno = obj.srollno
      this.sage = obj.sage;
      this.sgender = obj.sgender;
      this.sclass = obj.sclass;
      this.ssection = obj.ssection;
      this.smarks = obj.smarks;
  
      
     this.getTotalAndAvg()

    }
    getTotalAndAvg() {
        this.Total = 0;
    
        for (let i = 0; i < this.smarks.length; i++) {
          this.Total = this.Total + this.smarks[i];
        }
    
        this.Avg = this.Total / this.smarks.length;
        this.getGrade();
      }
      getGrade() {
        if (this.Avg > 40) {
          document.querySelector(".pof").style.border = "5px solid green ";
          this.Grade = "YOU ARE PASSED";
        } else {
          document.querySelector(".pof").style.border = "5px solid red ";
          this.Grade = "YOU ARE FAILED";
        }
    
        this.displayProgCard();
      }
      displayProgCard() {
        document.querySelector(".display-container").style.display = "block";
    
        document.querySelector("#s-name").innerText = this.sname;
        document.querySelector("#s-id").innerText = this.srollno;
        document.querySelector("#s-age").innerText = this.sage;
        document.querySelector("#s-gender").innerText = this.sgender;
        document.querySelector("#s-class").innerText = this.sclass;
        document.querySelector("#s-sec").innerText = this.ssection;
        document.querySelector("#s-total").innerText = this.Total;
        document.querySelector("#s-avg").innerText = this.Avg;
        document.querySelector("#s-grade").innerText = this.Grade;
  
        
    
        
      }
}



var stdProgCardList =[];


var stdinfo = () =>{
    var stdProgCard = {}
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


    var std = new StdProgCard(stdProgCard)
    std.displayProgCard()
    stdProgCardList.push(std)
    //   employeeDetailsList.push(JSON.parse(JSON.stringify(employeeData)));
}


var resetfields = () => {
    
        document.querySelector(".display-container").style.display = "none"
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




