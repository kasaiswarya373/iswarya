var statesOfCountry  = {};
var districtsOfStates = {};


axios.get("http://localhost:8082/get/countriesDropDownList").then((response) =>
{
    statesOfCountry = response.data.contryStates;
    districtsOfStates = response.data.statesDistricts;
}).catch((err) =>
{
    console.log(err);
})

var stateListGeneration = () =>
{
    var stateList = $("#stateList");
    
    var selectedCountry = $("#countryList").val();
    var country = statesOfCountry[selectedCountry];
    stateList.empty().append('<option>select</option>');
     for (var i = 0; i < country.length; i++)
    {
        stateList.append('<option>' + country[i] + '</option>');
    }
}

var districtListGeneration = () =>
{
    var districtList = $("#districtList");
      
    var selectedState = $("#stateList").val();
    var state =  districtsOfStates[selectedState];
    districtList.empty().append('<option>select</option>');
    for (var j = 0; j < state.length; j++)
     {
            districtList.append('<option>' + state[j] + '</option>');
     }
}

var success = () =>
{
    document.querySelector("#successMsg").style.display = 'block';
}



