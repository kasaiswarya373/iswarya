var countryList = {
    'c_ind': {
        countryName: 'INDIA',
        code: 'IND',
        statesInfo: [
            {
                name: 'Telangana',
                code: 'TS',
                districtInfo: ['Warangal','Hyderabad','Nizambad','Karimnagar','Medak'],
            },
            {
                name: 'Delhi',
                code: 'DL',
                districtInfo: ['East-Delhi','West-Delhi','Soulth-Delhi','New-Delhi','North-Delhi']
                    
            },
            {
                name: 'Kerala',
                code: 'KE',
                districtInfo: ['Ernakulam','Kannur','Kasaragod','Kollam','Kottayam'],
            },
            {
                name: 'Andhra-Pradesh',
                code: 'AP',
                districtInfo: ['Guntur','Bapatla','Kakinada','East-Godavari','West-Godavari'],
            },
            {
                name: 'Maharashtra',
                code: 'MH',
                districtInfo: ['Ahmednagar','Bhandra','Chandrapur','Dhule','Mumbai-city'],
            },
        ]
    },
    'c_USA': {
        countryName: 'UNITED STATES',
        code: 'USA',
        statesInfo: [
            {
                name: 'California',
                code: 'CF',
                districtInfo: ['Northern California','Central California','Southern California','Los Angeles','San-Diego'],
            },
            {
            name: 'Florida',
                code: 'CF',
                districtInfo:['Miami',' Orlando','Tampa','Jacksonville','Tallahassee']
            },
            {
                name: 'Illinois',
                code: 'CF',
                districtInfo: ['Cook County','Chicago','DuPage County','Lake County','Will County'],
            },
        ]
    },
};

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

    /*window.addEventListener('load', function () {
        for (var countrycode in countryList) {
            var code = countrycode;
            var countryObject = countryList[countrycode];
            //console.log(countryList[countrycode].statesInfo[0].name);
            //console.log(countryList..statesInfo);
            // Set the text content of the options using innerHTML
            document.getElementById(code).innerHTML = countryObject.countryName;
        }
    });
    for(var countrycode in countryList){
        var states = countryList[countrycode].statesInfo;
        for(var i=0;i<states.length;i++){
            console.log(states[i].name);
        }
    }*/


