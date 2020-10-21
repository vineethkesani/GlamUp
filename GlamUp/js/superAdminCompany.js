
var company = [];
var selectIndex = -1;
var clickedArray;
var select;
var index;

function init() {

    document.getElementById('tableRow').innerHTML = '';
    if (!sessionStorage.companyRecords) {
        data();
    }
    if (sessionStorage.companyRecords) {
        company = JSON.parse(sessionStorage.companyRecords);
        for (var i in company) {
            tablecell(
                i,
                company[i].name,
                company[i].email,
                company[i].phone,
                company[i].owner,
                company[i].street,
                company[i].city,
                company[i].state,
                company[i].country,
                company[i].duns,
                company[i].type
            )
        }
    }

    onUserRole();
}

function data() {
    var companydata = [
        {  //Regular admin Database-->vamsi,darya,kenny,peter
            name: "GlamUp", email: "vineeth@uhcl.edu", phone: "224-324-2174", owner: "Vineeth Kesani", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Super-Admin"
        },
        { name: "Tommy Hilfiger", email: "gursimran@uhcl.edu", phone: "224-324-2175", owner: "Gur Simran", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Admin" },
        { name: "A&F", email: "ishan@uhcl.edu", phone: "224-324-2176", owner: "Ishan Neema", street: "El Camino", city: "New York City", state: "Albany", country: "USA", duns: "123", type: "Admin" },
        { name: "Gap", email: "soni@uhcl.edu", phone: "224-324-2177", owner: "Soni Makwana", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Supplier" },
        { name: "Zara", email: "vamsi@uhcl.edu", phone: "224-324-2178", owner: "Vamsi Balineni", street: "El Camino", city: "New York City", state: "Albany", country: "USA", duns: "123", type: "Supplier" },
        { name: "Hollister", email: "sai@uhcl.edu", phone: "224-324-2179", owner: "Sai Vemuri", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Buyer" },
        { name: "Levis", email: "mounica@uhcl.edu", phone: "224-324-2173", owner: "Mounica Sweety", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Buyer" },
        { name: "Banana Republic", email: "sujitha@uhcl.edu", phone: "224-324-2172", owner: "Sujitha", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Buyer" },
        { name: "Ralph Lauren", email: "Bhagyasree@uhcl.edu", phone: "281-283-2471", owner: "Bhagyasree", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-Admin" },
        { name: "Coach", email: "Sansa@ygmail.com", phone: "100-234-6666", owner: "SansaJackson", street: "South Shore", city: "Houston", state: "Texas", country: "USA", duns: "159", type: "Supplier-User" },

    ];
    sessionStorage.setItem('companyRecords', JSON.stringify(companydata));
}

function addCompany() {

    //clickedArray = document.getElementById('hiddentValue').value;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    phone = document.getElementById('phone').value;
    owner = document.getElementById('owner').value;
    street = document.getElementById('street').value;
    city = document.getElementById('city').value;
    state = document.getElementById('state').value;
    country = document.getElementById('country').value;
    duns = document.getElementById('duns').value;
    type = document.getElementById('type').value;

    if (validname(name) && ValidateEmail(email) && telephoneCheck(phone) && validowner(owner) && validstreet(street) && validcity(city) && validstate(state) && validcountry(country) && validduns(duns) && validtype(type)) {

        var companyobj = {
            name: name,
            email: email,
            phone: phone,
            owner: owner,
            street: street,
            city: city,
            state: state,
            country: country,
            duns: duns,
            type: type
        };

        if (selectIndex === -1) {
            company.push(companyobj);
        } else {
            company.slice(selectedIndex, 1, companyobj);
        }

        sessionStorage.companyRecords = JSON.stringify(company);

        init();
        onclear();
    }
}

function tablecell(index, name, email, phone, owner, street, city, state, country, duns, type) {

    var table = document.getElementById('tableRow');
    var row = table.insertRow();

    var companynamecell = row.insertCell(0);
    var companyemailcell = row.insertCell(1);
    var companyphonecell = row.insertCell(2);
    var companyownercell = row.insertCell(3);
    var companystreetcell = row.insertCell(4);
    var companycitycell = row.insertCell(5);
    var companystatecell = row.insertCell(6);
    var companycountrycell = row.insertCell(7);
    var companydunscell = row.insertCell(8);
    var companytypecell = row.insertCell(9);
    var editcell = row.insertCell(10);
    var deletecell = row.insertCell(11);

    companynamecell.innerHTML = name;
    companyemailcell.innerHTML = email;
    companyphonecell.innerHTML = phone;
    companyownercell.innerHTML = owner;
    companystreetcell.innerHTML = street;
    companycitycell.innerHTML = city;
    companystatecell.innerHTML = state;
    companycountrycell.innerHTML = country;
    companydunscell.innerHTML = duns;
    companytypecell.innerHTML = type;


    userRole = JSON.parse(sessionStorage.getItem('role'));
    user = JSON.parse(sessionStorage.getItem('userdetails'));

    if (userRole == "Super Admin") {
        editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditModal" onclick="onEdit(' + index + ')" value="Edit">';
        deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">';
        document.getElementById("addComp").style.visibility = 'visible';

    }
    if (userRole == "Supplier-Admin") {
        if (name == user.company) {
            editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditModal" onclick="onEdit(' + index + ')" value="Edit">';
        }
    }
    //if (userRole == "Supplier-User") {
    //    if (name == user.company)              
    //}
    if (userRole == "Buyer-Admin") {
        if (name == user.company) {
            editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditModal" onclick="onEdit(' + index + ')" value="Edit">';
        }
    }
    //if (userRole == "Buyer-User") {
    //    if (name == user.company)              
    //}
    //deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">'

}

function onDelete(index) {
    var result = confirm("Are you sure you want to delete these company Info?");
    if (result) {
        company.splice(index, 1);
        sessionStorage.companyRecords = JSON.stringify(company);
        init();
    }
}

function onEdit(index) {
    var currentCompany = company[index];
    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editName').value = currentCompany.name;
    document.getElementById('editEmail').value = currentCompany.email;
    document.getElementById('editPhone').value = currentCompany.phone;
    document.getElementById('editOwner').value = currentCompany.owner;
    document.getElementById('editStreet').value = currentCompany.street;
    document.getElementById('editCity').value = currentCompany.city;
    document.getElementById('editState').value = currentCompany.state;
    document.getElementById('editCountry').value = currentCompany.country;
    document.getElementById('editDuns').value = currentCompany.duns;
    document.getElementById('editType').value = currentCompany.type;

}


function onclear() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('owner').value = "";
    document.getElementById('street').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('country').value = "";
    document.getElementById('duns').value = "";
    document.getElementById('type').value = "";
}

function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value;
    //if (validname(name) && ValidateEmail(email) && telephoneCheck(phone) && validowner(owner) && validstreet(street) && validcity(city) && validstate(state) && validcountry(country) && validduns(duns) && validtype(type)) {
    name = document.getElementById('editName').value;
    email = document.getElementById('editEmail').value;
    phone = document.getElementById('editPhone').value;
    owner = document.getElementById('editOwner').value;
    street = document.getElementById('editStreet').value;
    city = document.getElementById('editCity').value;
    state = document.getElementById('editState').value;
    country = document.getElementById('editCountry').value;
    duns = document.getElementById('editDuns').value;
    type = document.getElementById('editType').value;
    //}

    company[clickedArray].name = name;
    company[clickedArray].email = email;
    company[clickedArray].phone = phone;
    company[clickedArray].owner = owner;
    company[clickedArray].street = street;
    company[clickedArray].city = city;
    company[clickedArray].state = state;
    company[clickedArray].country = country;
    company[clickedArray].duns = duns;
    company[clickedArray].type = type;

    sessionStorage.companyRecords = JSON.stringify(company);
    init();
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return false;
}

function telephoneCheck(number) {
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(number)) {
        return true;
    }
    alert('Enter 10 digit number');
    return false;
}

function validname(name) {
    if (name != "") {
        return true;
    } else {
        alert('Enter a company name ');
        return false;
    }
}

function validowner(owner) {
    if (owner != "") {
        return true;
    } else {
        alert('Enter a owner name ');
        return false;
    }
}

function validstreet(street) {
    if (street != "") {
        return true;
    } else {
        alert('Enter a street name ');
        return false;
    }
}

function validcity(city) {
    if (city != "") {
        return true;
    } else {
        alert('enter a city');
        return false;
    }
}

function validstate(state) {
    if (state != "") {
        return true;
    } else {
        alert('please select a state');
        return false;
    }
}

function validduns(duns) {
    if (duns != "") {
        return true;
    } else {
        alert('enter a valid duns');
        return false;
    }
}

function validcountry(country) {
    if (country != "") {
        return true;
    } else {
        alert('Please select a country ');
        return false;
    }
}

function validtype(type) {
    if (type != "") {
        return true;
    } else {
        alert('please select a type');
        return false;
    }
}

function validtype(type) {
    if (type != "") {
        return true;
    } else {
        alert('please select a type');
        return false;
    }
}

function checkUsers() {

    //getting the loggedin user information
    loginString = sessionStorage.getItem("user_list");
    loggedinUser = JSON.parse(loginString);

    // getting the user details information
    userString = sessionStorage.getItem("user_list");
    UserDB = JSON.parse(userString);
}

function onUserRole() {

    userRole = JSON.parse(sessionStorage.getItem('role'));
    user = JSON.parse(sessionStorage.getItem('userdetails'));

    if (userRole == null) {
        document.getElementById("addComp").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
    
    else if (userRole == 'Super Admin') {
        document.getElementById("addComp").style.visibility = 'visible';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Supplier-Admin') {
        document.getElementById("addComp").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Supplier-User') {
        document.getElementById("addComp").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (userRole == 'Buyer-Admin') {
        document.getElementById("addComp").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Buyer') {
        document.getElementById("addComp").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
}