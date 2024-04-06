var statesOfCountry  =
{
    India : ["Andhra Pradesh","Telangana","Kerala","Karnataka"],
    Switzerland : ["Zurich","Geneva","Ticino"],
    "Saudi Arabia": ["Riyadh","Makkah","Madina"]
}
var districtsOfStates =
{
    "Andhra Pradesh" : ["Nellore","Kadapa","Tirupati","Kurnool"],
    Telangana : ["Hyderabad","Rangareddy","Karimnagar","Warangal"],
    Kerala : ["Thiruvananthapuram", "Ernakulam","Kozhikode"],
    Karnataka : ["Bengaluru","Mysore","Udupi"],
    Zurich :["Winterthur","Uster","Dietikon","Bulach"],
    Geneva :["Vernier","Lancy","Meyrin","Carouge"],
    Riyadh : ["Locarno","Mendrisio","Leventina"],
    Ticino : ["Lugano","Mendrisio","Leventina"],
    Makkah : ["Jeddah","Taif","Qunfudhah","Laith"],
    Madina : ["Al Hunakiyah","Mahd Al Thahab","Al-'Ula","Badr"]
}

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