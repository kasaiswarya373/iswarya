let userData = {}

let usersData = [];

let count = 0;

let setSNo = () => {
    $('#SNo').val(usersData.length + 1);
}

let checkChildNodes = () => {

    let bodyEl = document.querySelector('#tBodyEl');

    if (bodyEl.hasChildNodes()) {

        // Remove all the rows within the tbody
        while (bodyEl.firstChild) {
            bodyEl.removeChild(bodyEl.firstChild);
        }
    }
}

let editUser = (index) => {
    // Implement the logic to edit the user data using the index
    // You can access usersData[index] to get the data for editing
    // For example, you can open a modal with the user data for editing

    document.querySelector("#update").style.display = 'block';
    document.querySelector("#save").style.display = 'none';

    let userData = usersData[index];
    console.log('userData', userData);


    $('#SNo').val(userData.SNo);
    $('#name').val(userData.userName);
    $('#age').val(userData.age);
    $('input[name="gender"][value="' + userData.gender + '"]').prop('checked', true);
    $('#country').val(userData.country);

}

let showSaveBtn = () => {
    let sNumber = parseInt($('#SNo').val()) - 1;
    let userData = usersData[sNumber];
    usersData.splice(sNumber, 1);

    userData.SNo = userData.SNo;
    userData.userName = $('#name').val();
    userData.age = $('#age').val();
    userData.gender = $('input[type=radio]:checked').val();
    userData.country = document.querySelector('#country').value;

    console.log('userData', userData);

    usersData.splice(sNumber, 0, JSON.parse(JSON.stringify(userData)));
    console.log('usersData a', usersData);

    checkChildNodes();
    displayUserData();
    resetFilelds();
    document.querySelector("#update").style.display = 'none';
    document.querySelector("#save").style.display = 'block';
}

let deleteUser = (index) => {

    let confirmm = confirm('do you wanna delete this record..!!');

    if (!confirmm) {
        return;
    } else {

        // Implement the logic to delete the user data using the index
        // You can use usersData.splice(index, 1) to remove the user at the specified index
        usersData.splice(index, 1);

        checkChildNodes(); // Update the table after deletion
        displayUserData(); // Update the table after deletion
        console.log('Delete user at index:', index);
        console.log('usersData: ', usersData);

        setSNo();
    }
}

let displayUserData = () => {

    let userTable = $('#userInfo');

    for (let i = 0; i < usersData.length; i++) {

        let newTableRow = document.createElement('tr');
        newTableRow.setAttribute('class', 'tableRow')

        let sNoData = document.createElement('td');
        sNoData.innerText = usersData[i].SNo;
        newTableRow.append(sNoData);

        let nameData = document.createElement('td');
        nameData.innerText = usersData[i].userName;
        newTableRow.append(nameData);

        let ageData = document.createElement('td');
        ageData.innerText = usersData[i].age;
        newTableRow.append(ageData);

        let genderData = document.createElement('td');
        genderData.innerText = usersData[i].gender;
        newTableRow.append(genderData);

        let countryData = document.createElement('td');
        countryData.innerText = usersData[i].country;
        newTableRow.append(countryData);

        let editButton = document.createElement('button');
        editButton.innerText = 'edit';
        editButton.setAttribute('class', 'editButton');
        editButton.setAttribute('data-index', i);
        console.log("editButton ", editButton)
        newTableRow.append(editButton);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.setAttribute('class', 'deleteButton');
        deleteButton.setAttribute('data-index', i);
        newTableRow.append(deleteButton);

        $('#tBodyEl').append(newTableRow);

    }
    // Add event listeners for dynamically created edit buttons
    $('.editButton').on('click', function () {
        console.log("this", this)
        let index = $(this).data('index');

        editUser(index);
    });

    $('.deleteButton').on('click', function () {
        let index = $(this).data('index');
        deleteUser(index);
    });

}

let resetFilelds = () => {
    $('#name').val('');
    $('#age').val('');
    $('input[name="gender"][value=male]').prop('checked', true);
    $('#country').val('Ind');
}


let saveUserDetails = () => {

    checkChildNodes();

    userData.SNo = count + 1;
    userData.userName = $('#name').val();
    userData.age = $('#age').val();
    userData.gender = $('input[type=radio]:checked').val();
    userData.country = document.querySelector('#country').value;

    usersData.push(JSON.parse(JSON.stringify(userData)));
    count++;

    displayUserData();
    resetFilelds();
    setSNo();

}

// document.querySelector('#tBodyEl').addEventListener('click', function (event) {
//     console.log(event.target);
// });


