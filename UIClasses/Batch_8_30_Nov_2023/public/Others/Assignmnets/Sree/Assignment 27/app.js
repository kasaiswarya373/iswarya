var stateData = {
    Thailand: ["Bangkok", "Phuket", "Chiang Mai"],
    India: ["Maharashtra", "Telangana", "Karnataka"],
    USA: ["Alaska", "Hawaii", "Arizona","Texas","Georgia","Newyork"]

};
var districtData = {
    "Bangkok": ["Manhattan", "Brooklyn", "Queens"],
    "Phuket": ["Los Angeles", "San Francisco", "San Diego"],
    "Chiang Mai": ["Houston", "Dallas", "Austin"],
    "Maharashtra": ["Pune", "Mumbai", "Kolhapur"],
    "Telangana": ["VIKARABAD", "WARANGAL", "WANAPARTHY"],
    "Karnataka": ["Mysuru", "Raichur", "Ramanagara	"],
    "Alaska": ["Anchorage", "Fairbanks", "Juneau"],
    "Hawaii": ["Ketchikan", "Nome", "Maui"],
    "Arizona": ["Dallas", "Honolulu", "Kauai"],
    "Texas":["Dallas","Austin","Hosuton"],
    "Georgia":["Atlanta","Augusta","macon"],
    "Newyork":["Newyork"]
};
var updateState = () => {
    var countryDropdown = document.querySelector("#country");
    var stateDropdown = document.querySelector("#state");
    var selectedCountry = countryDropdown.value;

    stateDropdown.innerHTML = '<option value = "" disabled selected> Select State</option>';
    var states = stateData[selectedCountry];
    if (states) {
        states.forEach(state => {
            var option = document.createElement("option");
            option.value = state;
            option.textContent = state;
            stateDropdown.appendChild(option);
        });
    }
}

var updateDistrict = () => {
    var stateDropdown = document.querySelector("#state");
    var districtDropdown = document.querySelector("#district");
    var selectedState = stateDropdown.value;

    districtDropdown.innerHTML = '<option value = "" disabled selected> Select District</option>';
    var districts = districtData[selectedState];
    if (districts) {
        districts.forEach(district => {
            var option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtDropdown.appendChild(option);
        });
    }
}