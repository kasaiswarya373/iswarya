var countryList = {
    c_ind: {
        countryName: 'INDIA',
        code: 'IND',
        latlng: '',
        statesInfo: [
            {
                stateName: 'Telangana',
                code: 'TS',
                districtInfo: [
                    {
                        distName: 'Warangal',
                        distCode: 'WN'
                    },
                    {
                        distName: 'Khammam',
                        distCode: 'KM'
                    }
                ]
            },
            {
                stateName: 'Andrapradesh',
                code: 'TS',
                districtInfo: [
                    {
                        distName: 'Nellore',
                        distCode: 'Nlr'
                    },
                    {
                        distName: 'vijayawada',
                        distCode: 'vj'
                    }
                ]
            }
        ]
    },
    c_USA: {
        countryName: 'USA',
        code: 'US',
        latlng: '',
        statesInfo: [
            {
                stateName: 'california',
                code: 'CL',
                districtInfo: [
                    {
                        distName: 'Central Tehama (Los Molinas)',
                        distCode: 'CT'
                    },
                    {
                        distName: 'Corning',
                        distCode: 'Co'
                    },
                    ,
                    {
                        distName: 'East Redding',
                        distCode: 'ER'
                    }
                ]
            },
            {
                stateName: 'Alabama',
                code: 'AL',
                districtInfo: [
                    {
                        distName: 'Texas',
                        distCode: 'TX'
                    },
                    {
                        distName: 'Mexico',
                        distCode: 'MX'
                    },
                    ,
                    {
                        distName: 'Floorida',
                        distCode: 'FL'
                    }
                ]
            }

        ]
    }
}

let count = 0;


let showCountries = (value) => {
    let countrySlct = document.querySelector('#countrySelect');

    if (count === 0) {

        for (let key in countryList) {

            let optionTag = document.createElement('option');
            optionTag.value = countryList[key].countryName;
            optionTag.innerText = countryList[key].countryName;
            countrySlct.append(optionTag);
        }
        countrySlct.selectedIndex = 0;
        showStates(countrySlct.options[0].value);
        count++;
    } else {
        showStates(value);
    }
}

let showStates = (selectedValueInCountry) => {

    let stateSlct = document.querySelector('#stateSelect');
    if (stateSlct.hasChildNodes) {
        clearChildNodes();
    }

    for (let key in countryList) {
        if (countryList[key].countryName === selectedValueInCountry) {
            for (let i = 0; i < countryList[key].statesInfo.length; i++) {
                let stateOption = document.createElement('option');
                stateOption.value = countryList[key].statesInfo[i].stateName;
                stateOption.innerText = countryList[key].statesInfo[i].stateName;

                stateSlct.append(stateOption);

            }
        }
    }

    showDist(selectedValueInCountry, stateSlct.value);

}

let showDist = (selectedValueInCountry, selectedValueInState) => {
    let districtSelectTag = document.querySelector('#districts');
    
    if (districtSelectTag.hasChildNodes) {
        clearChildNodesOfDist();
    }

    for (const key in countryList) {

        if (countryList[key].countryName === selectedValueInCountry) {

            for (let i = 0; i < countryList[key].statesInfo.length; i++) {

                if (countryList[key].statesInfo[i].stateName === selectedValueInState) {

                    for (let j = 0; j < countryList[key].statesInfo[i].districtInfo.length; j++) {

                        let distOption = document.createElement('option');

                        distOption.value = countryList[key].statesInfo[i].districtInfo[i].distName;
                        distOption.innerText = countryList[key].statesInfo[i].districtInfo[i].distName;
                        districtSelectTag.append(distOption);
                    }
                 
                }

            }
        }
    }
}


let OnChangeOfCountry = (countryValue) => {
    console.log('countryValue', countryValue);
    showCountries(countryValue);
}

let onChagneOfState = () => {
    let countrySlct = document.querySelector('#countrySelect');
    showStates(countrySlct.value);
}


let clearChildNodes = function () {
    let dom_slctTag = document.querySelector('#stateSelect');
    while (dom_slctTag.lastElementChild) {
        dom_slctTag.removeChild(dom_slctTag.lastElementChild);
    }
}

let clearChildNodesOfDist = function () {
    let dom_slctTag = document.querySelector('#districts');
    while (dom_slctTag.lastElementChild) {
        dom_slctTag.removeChild(dom_slctTag.lastElementChild);
    }
}


