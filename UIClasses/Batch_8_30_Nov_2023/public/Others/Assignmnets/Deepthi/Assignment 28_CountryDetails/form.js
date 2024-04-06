var countryList = {
    'India': {
        countryName: 'INDIA',
        code: 'IND',
        statesInfo: [
            {
                name: 'Telangana',
                code: 'TS',
                districtInfo: ['Warangal', 'Hyderabad ','Adilabad','Karimnagar','Nalgonda']
            },
            
            {
                name : 'AndhraPradesh',
                code: 'AP',
                districtInfo: ['Kadapa','Kurnool','Visakhapatnam','Vijayawada','Chittoor']
            },
            {
                name : 'Karnataka',
                code: 'KA',
                districtInfo: ['Bengaluru','Ballari','Chikballapur','Bidar','Bagalkot']
            },
            {
                name: 'Maharashtra',
                code: 'MH',
                districtInfo:['Pune','Nashik','Nagpur','Solapur','Dhule']
                
            },
            {
                name:'UttarPradesh',
                code :'UP',
                districtInfo:['Lucknow','Varnasi','Ghazipur','Fatehpur','Allahabad']
            }
        ]  
         
    },

    'USA': {
        countryName: 'USA',
        code: 'USA',
        statesInfo: [
                {
                    name: 'NewYork',
                    code: 'NYC',
                    districtInfo: ['Bronx','Brookyln','Manhattan','StatenIsland']      
                },
                {
                    name: 'Pennsylvania',
                    code: 'PA',
                    districtInfo: ['Philadelphia','Tioga','Adams','Cumberland']

                },
                {
                    name: 'Texas',
                    code: 'TX',
                    districtInfo:['Austin','Houston','Dallas','Santonio']
                }
        ]
    },
};

var getStates = () => {
            
       document.querySelector("#states").innerHTML = '';
       var countryValue = document.querySelector("#countries").value;
       var states = countryList[countryValue].statesInfo;
       console.log(states);
      
       for(var i=0;i<states.length;i++){
        var optionTag = document.createElement("option");
        optionTag.innerText = states[i].name;
        document.querySelector("#states").append(optionTag);
    }       
}

var getDistricts = () => {
    document.querySelector("#districts").innerHTML = '';
    var stateValue = document.querySelector("#states").value;
    console.log(stateValue);
    var countryValue = document.querySelector("#countries").value;
    var states = countryList[countryValue].statesInfo;
    console.log(states);

    for(var i = 0; i < states.length; i++){
        if(stateValue == states[i].name){
            var district = states[i].districtInfo;
            break;
        }
    }
    console.log(district);

    for(var i = 0; i < district.length; i++){
        var optionTag = document.createElement("option");
        optionTag.innerText = district[i];
        document.querySelector("#districts").append(optionTag);
    }
    
}

var getRegister = () => {
    alert("Registered");
}

