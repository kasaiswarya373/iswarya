var stdProgCardList = [];

var stdProgCard = {
  stdinfo() {
    stdProgCard.sname = document.querySelector("#Sname").value;
    stdProgCard.sname = stdProgCard.sname.trim();
    if (stdProgCard.sname == "") {
      document.querySelector("#SNAME").style.display = "block";
      return;
    } else {
      document.querySelector("#SNAME").style.display = "none";
    }

    stdProgCard.srollno = document.querySelector("#Sid").value;
    stdProgCard.srollno = stdProgCard.srollno.trim();
    if (stdProgCard.srollno == "") {
      document.querySelector("#SID").style.display = "block";
      return;
    } else {
      document.querySelector("#SID").style.display = "none";
    }

    stdProgCard.sage = document.querySelector("#Sage").value;
    stdProgCard.sage = stdProgCard.sage.trim();
    if (stdProgCard.sage == "") {
      document.querySelector("#SAGE").style.display = "block";
      return;
    } else {
      document.querySelector("#SAGE").style.display = "none";
    }
    stdProgCard.sgender = document.querySelector("input[name=sgender]").value;
    stdProgCard.sclass = document.querySelector("#Sclass").value;
    stdProgCard.ssection = document.querySelector("#ssec").value;
    stdProgCard.smarks = [];

    for (var i = 1; i <= 5; i++) {
      var temp = "#m" + i;
      var val = "#M" + i;
      var value = document.querySelector(temp).value;
      value = value.trim();
      if (stdProgCard.smarks == "") {
        document.querySelector("val").style.display = "block";
        return;
      } else {
        document.querySelector("val").style.display = "none";
      }
      value = parseInt(value);
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

    resetfields();
  },
};

var generateProgCard = () => {
  stdProgCard.stdinfo();

  stdProgCardList.push(JSON.parse(JSON.stringify(stdProgCard)));
};

var resetfields = () => {
  document.querySelector("#Sname").value = "";
  document.querySelector("#Sid").value = "";
  document.querySelector("#Sage").value = "";
  document.querySelector("input[name=sgender]").value = "";
  document.querySelector("#Sclass").value = "";
  document.querySelector("#ssec").value = "";
  document.querySelector("#m1").value = "";
  document.querySelector("#m2").value = "";
  document.querySelector("#m3").value = "";
  document.querySelector("#m4").value = "";
  document.querySelector("#m5").value = "";
};

var validateName = (event) => {
  // document.querySelector("#Sname").value

  stdProgCard.sname = document.querySelector("#Sname").value;
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    return true;
  } else {
    return false;
  }
};

var validateIdAndAge = (event) => {
  // document.querySelector("#Sname").value

  stdProgCard.sage = document.querySelector("#Sage").value;
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    return true;
  } else {
    return false;
  }
};

var validateMarks = (event) => {
  // document.querySelector("#Sname").value

  stdProgCard.sage = document.querySelector("#Sage").value;
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    return true;
  } else {
    return false;
  }
};


console.log(stdProgCardList);
