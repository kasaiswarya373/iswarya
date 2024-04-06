var countryData = {
        countryname : [ 'India' , 'USA' , 'Australia', 'Africa']
};

var stateData = { 
       "India" : ["AndhraPradesh" , "Telangana" , "TamilNadu", "Kerala" ],
       "USA" : ["california" , "Texas" , "Florida" , "Alaska"],
       "Australia" : ["Queensland" , " Newsouthwales" , "Tasmania" , "Victoria" ],
       "Africa" : ["Benin","Botswana"," Burkina Faso"]

};

var Districtdata = {
    "AndhraPradesh" : ["EastGodavari" , "Vishakapatnam" , "Kakinada" , "Tirupati" , "Guntur"],
    "Telangana" : ["Hyderabad" , "Warangal" , "Adilabad" , "Suryapet" , "Rangareddy" , "Malkajgiri"],
    "TamilNadu" : ["Chengalpattu" , "Coimbatore"," Dharmapuri", "Erode", "Karur" , "Nagapattinam", "Nilgiris"],
    "Kerala" : ["Kasaragod", "Kannur", "Wayanad", "Kozhikode", "Malappuram"],
    "california" : [" North California", "Silicon Valley", "Central California", "West California" ,"South California"],
    "Texas" : ["Houston" , "San Antonio" , " Dallas" , " Austin"],
    "Florida" : ["miami","Tampa" ,"orlando"],
    "Alaska" : [" Anchorage ", "Juneau", "Fairbanks"],
    "Queensland" : ["Brisbane" , " Cairns" , "Ipswich"],
    "Newsouthwales" : ["Sydney" , "Coffs Harbour" , "Broken Hill"],
    "Tasmania" : ["Hobart" , "Launceston " , "Burnie"],
    "Victoria" : ["Melbourne" , "Geelong" , "Ballarat"],
    "Benin" : ["Porto-Novo " , "Abomey" , "Bohicon "],
    "Botswana" : ["Maun" , "Gaborone" , "Molepolole"],
    "BurkinaFaso" : ["Ouagadougou" , "Wagadugu ", "Banfora " ]
};

/*var updatecountry = ( ) => {
    var countryDropdown = document.querySelector("#countryname");
    var stateDropdown = document.querySelector("#state");
    var selectedCountry = countryDropdown.value;

  //  countryDropdown.innerHTML = ;
} */
//console.log(countryData.countryname);
//console.log(stateData)
//console.log(stateData.Africa[2]); 


var seecountries = () => {

var seenames = countryData.countryname;
for( var i = 0 ; i < seenames.length; i++){
    var optiontag = document.createElement("option");
    optiontag.innerText = seenames[i];
    document.querySelector("#countryname").append(optiontag);
}
}

//console.log(countryData.value)


/*var seestates = () => {
    var countryDropdown = document.querySelector("#countryname").value;
   var stateDropdown = document.querySelector("#state");
   
   
    var states = stateData[selectedCountry]; */

    var updateState = () => {
        var selectedCountry = document.querySelector("#countryname").value;
        var stateDropdown = document.querySelector("#state");
      
       
        var states = stateData[selectedCountry];
        if (states) {
            states.forEach(state => {
                var option = document.createElement("option");
                option.value = state;
                option.textContent = state;
                stateDropdown.append(option);
            });
        }
    }

    var updateDistrict = () => {
        var stateDropdown = document.querySelector("#state");
        var districtDropdown = document.querySelector("#district");
        var selectedState = stateDropdown.value;
        
        var districts = Districtdata[selectedState];
        if (districts) {
            districts.forEach(district => {
                var option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtDropdown.append(option);
            });
        }
    }

    var last = () => {
        document.querySelector("#saved").style.display = 'block';
    }
   
    
    seecountries() 
  








