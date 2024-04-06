/*for (var countrycode in countryList) {
    var code = countrycode;
    var countryObject = countryList[countrycode];
    
    // Set the text content of the options using innerHTML
    document.getElementById(code).innerHTML = countryObject.countryName;
}*/

//console.log(countryList['c_ind'].countryName);
//console.log(countryList.c_ind.countryName);
   /* for (var countrycode in countryList) {
        var code = countrycode;
        console.log(code);
        var countryObject = countryList[countrycode];
        console.log(countryObject.countryName); 
        document.getElementById(code).innerText = countryObject;
    }*/
   /* for (var countrycode in countryList) {
        var code = countrycode;
        console.log(code);
        var countryObject = countryList[countrycode];
        console.log(countryObject.countryName); 
        // Set the text of the options directly using value property
        document.getElementById(code).innerHTML = countryObject.countryName;
    }*/

    var loadCountryDetails = () => {

  
        for (var countrycode in countryList) {
            var code = countrycode;
            var countryObject = countryList[countrycode];
            //console.log(countryList[countrycode].statesInfo[0].name);
            //console.log(countryList..statesInfo);
            // Set the text content of the options using innerHTML
            
            var optionTag = document.createElement("option");
            optionTag.setAttribute("value", code)
            optionTag.innerText = countryObject.countryName;
            document.querySelector("#displayCountries").append(optionTag)
        }
    }
    //var states = 0;
    var updateStates = () => {
        document.querySelector("#displaystates").innerHTML = "";
        var selectedCountry = document.querySelector("#displayCountries").value;
        var states = countryList[selectedCountry].statesInfo;
       // console.log(states);
        for(var i=0;i<states.length;i++){
            //console.log(states[i].name);
            var optionTag = document.createElement("option");
            optionTag.innerText = states[i].name;
            document.querySelector("#displaystates").append(optionTag);
        }
    }
    var updatedistricts  = () => {
        document.querySelector("#displaydistricts").innerHTML = "";
      var selectedState = document.querySelector("#displaystates").value;
      console.log(selectedState);
      var selectedCountry = document.querySelector("#displayCountries").value;
        var states = countryList[selectedCountry].statesInfo;
      var district;
      for(var i = 0; i<states.length;i++){
        if(selectedState==states[i].name){
            district = states[i].districtInfo;
            break;
        }
      }
      console.log(district);
        displayDistricts(district);
      }
      var displayDistricts = (district) => {
            for(var i = 0 ; i <district.length;i++ ){
                var optionTag = document.createElement("option");
                optionTag.innerText = district[i];
                document.querySelector("#displaydistricts").append(optionTag);
            }
      }
      var displayMsg = () => {
        document.querySelector(".container").style.display = 'none';
        document.querySelector(".msgblock").style.display ='block';
      }

    document.addEventListener("DOMContentLoaded", () => {
        loadCountryDetails();
    })
  