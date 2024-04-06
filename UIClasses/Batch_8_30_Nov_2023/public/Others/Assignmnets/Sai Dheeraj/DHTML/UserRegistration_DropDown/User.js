var countryInfo = {

    countryList : ['India', 'USA', 'Canada']
};

var stateList = { 
    "India" : ["Assam" , "Andhra Pradesh" , "Gujarat" , "Rajasthan" , "Telangana"],
    "USA" : ["New Jersey" , "Florida" , "New York"],
    "Canada" : ["Nunavut" , "British Columbia"]  

};

var DistrictList = {
    "Assam" : ['Bajali', 'Barpeta', 'Baksa', 'Dhemaji', 'Biswanath'],
    "Andhra Pradesh" : ['Bapatla', 'Chittoor', 'Guntur', 'Ananthapuramu', 'Srikakulam'],
    "Gujarat" : ['Ahmedabad', 'Amreli', 'Bhavnagar', 'Surat'],
    "Rajasthan" : ['Anupgarh', 'Ajmer', 'Alwar', 'Balotra', 'Barmer'],
    "Telangana" : ['Hanumakonda', 'Hyderabad', 'Kamareddy', 'Karimnagar', 'Medak'],
    "New Jersey" : ['Atlantic County', 'Bergen County', 'Camden County'],
    "Florida" : ['South Florida', 'SouthWest Florida', 'Central Florida'],
    "New York" : ['Manhattan', 'Brooklyn', 'Queens', 'Bronx'],
    "Nunavut" : ['Baker Lake', 'Hudson Bay', 'Cambridge Bay'],
    "British Columbia" : ['Burnaby', 'Nanaimo', 'Cariboo', 'North Coast']
};

var listcountries = () => {

var listnames = countryInfo.countryList;

    for( var x = 0 ; x < listnames.length; x++) {
    var value = document.createElement("option");
        value.innerText = listnames[x];
    document.querySelector("#CountryName").append(value);
}
}

var displayState = () => {
var selectedCountry = document.querySelector("#CountryName").value;
var stateDropdown = document.querySelector("#State");


var states = stateList[selectedCountry];
    if (states) {
    states.forEach(state => {
        var option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.append(option);
    });
}
}

var displayDistrict = () => {
var stateDropdown = document.querySelector("#State");
var districtDropdown = document.querySelector("#district");
var selectedState = stateDropdown.value;

var districts = DistrictList[selectedState];
    if (districts) {
    districts.forEach(district => {
        
        var uservalue = document.createElement("option");
        uservalue.value = district;
        uservalue.textContent = district;
        districtDropdown.append(uservalue);
    });
}
}

var end = () => {
document.querySelector("#saved").style.display = 'block';
};

listcountries();   