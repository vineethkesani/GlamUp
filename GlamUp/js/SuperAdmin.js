let user_list = [];
let selectIndex = -1;
let clickedArray;
let select;
let index;
let sameCompanyUserList = [];

//var $rows = $('#data_table tr');
//$('#search').keyup(function () {
//    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();

//    $rows.show().filter(function () {
//        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
//        return !~text.indexOf(val);
//    }).hide();
//});

check_for_user_list();

function check_for_user_list() {
    if (localStorage.getItem('user_list') === null) {
        user_list = [
            {
                "firstName": "Gursimran Singh",
                "lastname": "Chawla",
                "contact": "(425) 961-3063",
                "username": "gursimran1806@gmail.com",
                "role": "super",
                "company": "GAP",
                "country": "USA",
                "administrator": "true", 
                "password": "password",
            },
            {
                "firstName": "Ishan",
                "lastname": "Neema",
                "contact": "(201) 300-6114",
                "username": "ishan@gap.com",
                "role": "supplier",
                "company": "Forever 21",
                "country": "USA",
                "administrator": "true", 
                "password": "rings",
            },
            {
                "firstName": "Mary",
                "lastname": "Williams",
                "contact": "(281) 283-6666",
                "username": "mary@oldnavy.com",
                "role": "buyer",
                "company": "Old Navy",
                "country": "USA",
                "administrator": "true", 
                "password": "squirrel",
            }]
        localStorage.setItem('user_list', JSON.stringify(user_list))
       // user_list = localStorage.getItem('user_list')
        console.log(user_list)
       // user_list = JSON.parse(user_list)
    }
    else {
        user_list = JSON.parse(localStorage.getItem('user_list'));
        console.log(user_list)
        //user_list = JSON.parse(user_list)

    }
    table();
    return user_list
}

function table() {
    document.getElementById('tableRow').innerHTML = '';

    user_list = localStorage.getItem('user_list');
    if (user_list != null) {
        user_list = JSON.parse(user_list);
        sameCompanyUserList = [];
        currentUser = JSON.parse(localStorage.getItem('logged_in_user'));
       // if (currentUser.role != "super") {
        if (false) {
            for (i = 0; i <= user_list.length; i++) {
                if (currentUser.company == user_list[i].company) {
                    sameCompanyUserList.push(user_list[i]);
                }
            }
        }
        else
            sameCompanyUserList = user_list;

        for (let i in sameCompanyUserList) {
            tablecell(
                i,
                sameCompanyUserList[i].firstName,
                sameCompanyUserList[i].lastname,
                sameCompanyUserList[i].contact,
                sameCompanyUserList[i].username,
                sameCompanyUserList[i].role,
                sameCompanyUserList[i].company,
                sameCompanyUserList[i].country
            )
        }
    }
    onUserRole(sameCompanyUserList.length);
}


function data() {

    var userListJSON = localStorage.getItem("user_list");
    if (userListJSON != null) {
        userRecords = JSON.parse(userListJSON);
    }
    return userRecords;
}

function addUser() {
    firstName = document.getElementById('firstname').value;
    lastname = document.getElementById('lastname').value;
    contact = document.getElementById('contact').value;
    userName = document.getElementById('username').value;
    role = document.getElementById('role').value;
    company = document.getElementById('company').value;
    country = document.getElementById('country').value;

    if (validName(firstName) && telephoneCheck(contact) && ValidateEmail(userName) && validRole(role) && validCompany(company)) {
        let companyobj = {
            FirstName: firstName,
            LastName: lastname,
            Contact: contact,
            userName: username,
            role: role,
            company: company,
            country: country
        };

        if (selectIndex === -1) {
            sameCompanyUserList.push(companyobj);
        } else {
            sameCompanyUserList.slice(selectedIndex, 1, companyobj);
        }
        localStorage.userRecords = JSON.stringify(sameCompanyUserList);
        table();
        onclear();
    }
}

function tablecell(ID, firstName, lastName, contact, userName, role, company, country) {

    let table = document.getElementById('tableRow');
    let row = table.insertRow();
    let compayIDcell = row.insertCell(0)
    let companyfirstnamecell = row.insertCell(1);
    let companylastnamecell = row.insertCell(2);
    let companyphonecell = row.insertCell(3);
    let companyusernamecell = row.insertCell(4);    
    let companyrolecell = row.insertCell(5);
    let companycompanyscell = row.insertCell(6);
    let companycountrycell = row.insertCell();
    let editcell = row.insertCell(8);
    let deletecell = row.insertCell(9);

    compayIDcell.innerHTML = ID;
    companyfirstnamecell.innerHTML = firstName;
    companylastnamecell.innerHTML = lastName;
    companyphonecell.innerHTML = contact;
    companyusernamecell.innerHTML = userName;
    companyrolecell.innerHTML = role;
    companycompanyscell.innerHTML = company;
    companycountrycell.innerHTML = country;

    deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">';
    editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditModal" onclick="onEdit(' + index + ')" value="Edit">';
}

function onDelete(index) {
    var result = confirm("Are you sure you want to delete this user?");
    if (result) {
        sameCompanyUserList.splice(index, 1);
        localStorage.userRecords = JSON.stringify(sameCompanyUserList);
        table();
    }
}

function onEdit(index) {
    let currentCompany = sameCompanyUserList[index];

    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editfirstname').value = currentCompany.firstName;
    document.getElementById('editlastname').value = currentCompany.lastName;
    document.getElementById('editphone').value = currentCompany.contact;
    document.getElementById('editusername').value = currentCompany.userName;
    document.getElementById('editrole').value = currentCompany.role;
    document.getElementById('editcompanys').value = currentCompany.company;
    document.getElementById('editcountry').value = currentCompany.country;
}

function onclear() {
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('contact').value = "";
    document.getElementById('username').value = "";
    document.getElementById('role').value = "";
    document.getElementById('company').value = "";
    document.getElementById('country').value = "";
}

function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value
    firstName = document.getElementById('editfirstname').value;
    lastName = document.getElementById('editlastname').value;
    contact = document.getElementById('editphone').value;
    email = document.getElementById('editusername').value;
    role = document.getElementById('editrole').value;
    company = document.getElementById('editcompanys').value;

    sameCompanyUserList[clickedArray].firstName = firstName;
    sameCompanyUserList[clickedArray].lastName = lastName;
    sameCompanyUserList[clickedArray].contact = contact;
    sameCompanyUserList[clickedArray].email = email;
    sameCompanyUserList[clickedArray].role = role;
    sameCompanyUserList[clickedArray].company = company;

    localStorage.userRecords = JSON.stringify(sameCompanyUserList);
    table();
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function telephoneCheck(number) {
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(number)) {
        return true;
    }
    alert('Enter 10 digit number');
    return false;
}

function validName(name) {
    if (name != "") {
        return true;

    } else {
        return alert('Enter first name');

    }
}

function validRole(role) {
    if ((role.toLowerCase() == "buyer") || (role.toLowerCase() == "supplier") || (role.toLowerCase() == "supplieradmin") || (role.toLowerCase() == "buyeradmin")) {
        return true;
    }
    else {
        alert('role should be either Buyer , Supplier or SupplierAdmin or BuyerAdmin');
        return false;
    }
}

function validCompany(type) {
    if (type != "") {
        return true;
    }
    else {
        alert('Should enter company name');
        return false;
    }
}

//display roles

function checkUsers() {

    //getting the loggedin user information
    loginString = sessionStorage.getItem("user_list");
    loggedinUser = JSON.parse(loginString);

    // getting the user details information
    userString = sessionStorage.getItem("user_list");
    UserDB = JSON.parse(userString);
}

function onUserRole(userLength) {

    currentUser = JSON.parse(sessionStorage.getItem('logged_in_user'));
    role = currentUser.role;
    role = "super";
    admin = currentUser.administrator
    userRole = JSON.parse(sessionStorage.getItem('role'));
    user = JSON.parse(sessionStorage.getItem('user_list'));

    if (role == 'super') {
        document.getElementById("addUser").style.visibility = 'visible';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (var i = 0; i < userLength; i++) {
            deletebtnhd[i].style.visibility = ' visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (role.toLowerCase() == 'buyer' || admin == 'false') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (role.toLowerCase() == 'buyer' || admin == 'true') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (role.toLowerCase() == 'supplier' || admin == 'true') {
        document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (role.toLowerCase() == 'supplier') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (var i = 0; i < userLength; i++) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
}

