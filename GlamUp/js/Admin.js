let user = [];
let selectIndex = -1;
let clickedUser;
let select;
let index;

function init() {
    document.getElementById('tableRow').innerHTML = '';
    //Add object if there is no sessionStorage 
    if (!sessionStorage.userRecords) {
        data();
    }
    if (sessionStorage.userRecords) {
        user = JSON.parse(sessionStorage.userRecords);
		var usercompany = JSON.parse(sessionStorage.getItem("usercompany"));
        var role = JSON.parse(sessionStorage.getItem("role"));
        for (let i in user) {
            if (user[i].Company == usercompany || role == "Super Admin")
            tablecell(
               i,
               // user[i].ID,
                user[i].FirstName,
                user[i].LastName,
                user[i].Contact,
                user[i].Email,
                user[i].UserRole,
                user[i].Company,
                user[i].Country
            );
        
		}
    }
    onUserRole();
}

//dummy object for product
function data() {
    var users = [
            { FirstName: "Vineeth", LastName: "Kesani", Contact: "+1-224-324-2174", Email: "vineeth@uhcl.edu", UserRole: "Super Admin", Company: "GlamUp", Country: "USA" },
            { FirstName: "Gur", LastName: "Simran", Contact: "+1-224-324-2174", Email: "gursimran@uhcl.edu", UserRole: "Admin", Company: "GlamUp", Country: "USA" },
            { FirstName: "Ishan", LastName: "Neema", Contact: "+1-224-324-2174", Email: "ishan@uhcl.edu", UserRole: "Admin", Company: "GlamUp", Country: "USA" },
            { FirstName: "Soni", LastName: "Makwana", Contact: "+1-224-324-2174", Email: "soni@uhcl.edu", UserRole: "Supplier", Company: "GlamUp", Country: "USA"},
            { FirstName: "Vamsi", LastName: "Balineni", Contact: "+1-224-324-2174", Email: "vamsi@uhcl.edu", UserRole: "Supplier", Company: "GlamUp", Country: "USA" },
            { FirstName: "Sai", LastName: "Vemuri", Contact: "+1-224-324-2174", Email: "sai@uhcl.edu", UserRole: "Buyer", Company: "GlamUp", Country: "USA" },
            { FirstName: "Mounica", LastName: "Sweety", Contact: "+1-224-324-2174", Email: "mounica@uhcl.edu", UserRole: "Buyer", Company: "GlamUp", Country: "USA" },
            { FirstName: "Sansa", LastName: "Stark", Contact: "+1-224-324-2174", Email: "sansa@uhcl.edu", UserRole: "Buyer", Company: "GlamUp", Country: "USA" },

            { FirstName: "Vai", LastName: "LSha", Contact: "123-223-8989", Email: "Vai@uhcl.edu", UserRole: "Super-Admin", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "John", LastName: "Doe", Contact: "281-283-2480", Email: "John@uhcl.edu", UserRole: "Supplier-Admin", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "Rick", LastName: "Fraiser", Contact: "987-283-2489", Email: "Rick@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "Reek", LastName: "Phaine", Contact: "876-277-2289", Email: "Reek@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "Jim", LastName: "Jones", Contact: "487-283-2489", Email: "Jim@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "A", LastName: "G", Contact: "457-283-0001", Email: "A@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "B", LastName: "H", Contact: "457-283-0002", Email: "B@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "C", LastName: "I", Contact: "457-283-0003", Email: "C@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "D", LastName: "J", Contact: "457-283-0004", Email: "D@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "E", LastName: "K", Contact: "457-283-0005", Email: "E@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },
            { FirstName: "F", LastName: "L", Contact: "457-283-0006", Email: "F@uhcl.edu", UserRole: "Supplier-User", Company: "Tommy Hilfiger", Country: "USA" },

            { FirstName: "Ted", LastName: "Lucifer", Contact: "123-223-2484", Email: "Ted@uhcl.edu", UserRole: "Supplier-Admin", Company: "A&F", Country: "USA" },
            { FirstName: "Bhan", LastName: "Hu", Contact: "999-223-2494", Email: "Bhan@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "Kim", LastName: "Jackson", Contact: "100-234-6666", Email: "Kim@ygmail.com", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "Seth", LastName: "Rogen", Contact: "987-983-2484", Email: "Seth@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "Ross", LastName: "Wells", Contact: "100-999-2484", Email: "Ross@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "M", LastName: "R", Contact: "100-999-0001", Email: "M@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "N", LastName: "S", Contact: "100-999-0002", Email: "N@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "O", LastName: "T", Contact: "100-999-0003", Email: "O@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "P", LastName: "U", Contact: "100-999-0004", Email: "P@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },
            { FirstName: "Q", LastName: "V", Contact: "100-999-0005", Email: "Q@uhcl.edu", UserRole: "Supplier-User", Company: "A&F", Country: "USA" },

            { FirstName: "Clint", LastName: "Eastwood", Contact: "900-283-2000", Email: "Clint@uhcl.edu", UserRole: "Buyer-Admin", Company: "Gap", Country: "USA" },
            { FirstName: "Sam", LastName: "Tarly", Contact: "456-786-2480", Email: "Sam@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "Wells", LastName: "Fargo", Contact: "456-786-2870", Email: "Wells@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "Tom", LastName: "Hilton", Contact: "456-786-2776", Email: "Tom@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "Anna", LastName: "Quin", Contact: "233-786-2480", Email: "Anna@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "W", LastName: "AB", Contact: "233-786-0001", Email: "W@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "X", LastName: "AC", Contact: "233-786-0002", Email: "X@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "Y", LastName: "AD", Contact: "233-786-0003", Email: "Y@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "Z", LastName: "AE", Contact: "233-786-0004", Email: "Z@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },
            { FirstName: "AA", LastName: "AF", Contact: "233-786-0005", Email: "AA@uhcl.edu", UserRole: "Buyer-User", Company: "Gap", Country: "USA" },

            { FirstName: "Ram", LastName: "Lal", Contact: "800-283-2000", Email: "Ram@uhcl.edu", UserRole: "Supplier-Admin", Company: "Zara", Country: "USA" },
            { FirstName: "Sarah", LastName: "Jenkins", Contact: "801-283-2000", Email: "Sarah@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "Michael", LastName: "Jordan", Contact: "802-283-2000", Email: "Michael@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "Michelle", LastName: "Goldman", Contact: "803-283-2000", Email: "Michelle@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "Tony", LastName: "Stark", Contact: "804-283-2000", Email: "Tony@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "AG", LastName: "AL", Contact: "804-283-2001", Email: "AG@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "AH", LastName: "AM", Contact: "804-283-2002", Email: "AH@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "AI", LastName: "AN", Contact: "804-283-2003", Email: "AI@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "AJ", LastName: "AO", Contact: "804-283-2004", Email: "AJ@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },
            { FirstName: "AK", LastName: "AP", Contact: "804-283-2005", Email: "AK@uhcl.edu", UserRole: "Supplier-User", Company: "Zara", Country: "USA" },

            { FirstName: "June", LastName: "Shoo", Contact: "700-283-2000", Email: "June@uhcl.edu", UserRole: "Buyer-Admin", Company: "Levis", Country: "USA" },
            { FirstName: "Anne", LastName: "Grimes", Contact: "701-283-2000", Email: "Anne@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "Regina", LastName: "Phalange", Contact: "702-283-2000", Email: "Regina@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "Stan", LastName: "Lee", Contact: "703-283-2000", Email: "Stan@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "Jackie", LastName: "Chan", Contact: "704-283-2000", Email: "Jackie@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "AQ", LastName: "AV", Contact: "704-283-2000", Email: "AQ@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "AR", LastName: "AW", Contact: "704-283-2001", Email: "AR@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "AS", LastName: "AX", Contact: "704-283-2002", Email: "AS@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "AT", LastName: "AY", Contact: "704-283-2003", Email: "AT@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },
            { FirstName: "AU", LastName: "AZ", Contact: "704-283-2004", Email: "AU@uhcl.edu", UserRole: "Buyer-User", Company: "Levis", Country: "USA" },

            { FirstName: "BA", LastName: "BK", Contact: "804-283-2001", Email: "BA@uhcl.edu", UserRole: "Supplier-Admin", Company: "H&M", Country: "USA" },
            { FirstName: "BB", LastName: "BL", Contact: "804-283-2002", Email: "BB@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BC", LastName: "BM", Contact: "804-283-2003", Email: "BC@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BD", LastName: "BN", Contact: "804-283-2004", Email: "BD@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BE", LastName: "BO", Contact: "804-283-2005", Email: "BE@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BF", LastName: "BP", Contact: "804-283-2006", Email: "BF@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BG", LastName: "BQ", Contact: "804-283-2007", Email: "BG@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BH", LastName: "BR", Contact: "804-283-2008", Email: "BH@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BI", LastName: "BS", Contact: "804-283-2009", Email: "BI@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },
            { FirstName: "BJ", LastName: "BT", Contact: "804-283-2010", Email: "BJ@uhcl.edu", UserRole: "Supplier-User", Company: "H&M", Country: "USA" },

            { FirstName: "BU", LastName: "CE", Contact: "804-283-3000", Email: "BU@uhcl.edu", UserRole: "Supplier-Admin", Company: "Banana Republic", Country: "USA" },
            { FirstName: "BV", LastName: "CF", Contact: "804-283-3001", Email: "BV@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "BW", LastName: "CG", Contact: "804-283-3002", Email: "BW@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "BX", LastName: "CH", Contact: "804-283-3003", Email: "BX@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "BY", LastName: "CI", Contact: "804-283-3004", Email: "BY@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "BZ", LastName: "CJ", Contact: "804-283-3005", Email: "BZ@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "CA", LastName: "CK", Contact: "804-283-3006", Email: "CA@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "CB", LastName: "CL", Contact: "804-283-3007", Email: "CB@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "CC", LastName: "CM", Contact: "804-283-3008", Email: "CC@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },
            { FirstName: "CD", LastName: "CN", Contact: "804-283-3009", Email: "CD@uhcl.edu", UserRole: "Supplier-User", Company: "Banana Republic", Country: "USA" },

            { FirstName: "CO", LastName: "CX", Contact: "804-283-4000", Email: "CO@uhcl.edu", UserRole: "Buyer-Admin", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CP", LastName: "CY", Contact: "804-283-4001", Email: "CP@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CQ", LastName: "CZ", Contact: "804-283-4002", Email: "CQ@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CR", LastName: "DA", Contact: "804-283-4003", Email: "CR@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CS", LastName: "DB", Contact: "804-283-4004", Email: "CS@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CT", LastName: "DC", Contact: "804-283-4005", Email: "CT@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CU", LastName: "DD", Contact: "804-283-4006", Email: "CU@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CV", LastName: "DE", Contact: "804-283-4007", Email: "CV@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },
            { FirstName: "CW", LastName: "DF", Contact: "804-283-4008", Email: "CW@uhcl.edu", UserRole: "Buyer-User", Company: "Ralph Lauren", Country: "USA" },

            { FirstName: "DG", LastName: "DQ", Contact: "804-283-5000", Email: "DG@uhcl.edu", UserRole: "Buyer-Admin", Company: "Hollister", Country: "USA" },
            { FirstName: "DH", LastName: "DR", Contact: "804-283-5001", Email: "DH@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DI", LastName: "DS", Contact: "804-283-5002", Email: "DI@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DJ", LastName: "DT", Contact: "804-283-5003", Email: "DJ@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DK", LastName: "DU", Contact: "804-283-5004", Email: "DK@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DL", LastName: "DV", Contact: "804-283-5005", Email: "DL@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DM", LastName: "DW", Contact: "804-283-5006", Email: "DM@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DN", LastName: "DX", Contact: "804-283-5007", Email: "DN@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DO", LastName: "DY", Contact: "804-283-5008", Email: "DO@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },
            { FirstName: "DP", LastName: "DZ", Contact: "804-283-5009", Email: "DP@uhcl.edu", UserRole: "Buyer-User", Company: "Hollister", Country: "USA" },

            { FirstName: "EA", LastName: "EK", Contact: "804-283-6000", Email: "EA@uhcl.edu", UserRole: "Buyer-Admin", Company: "Coach", Country: "USA" },
            { FirstName: "EB", LastName: "EL", Contact: "804-283-6001", Email: "EB@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EC", LastName: "EM", Contact: "804-283-6002", Email: "EC@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "ED", LastName: "EN", Contact: "804-283-6003", Email: "ED@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EE", LastName: "EO", Contact: "804-283-6004", Email: "EE@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EF", LastName: "EP", Contact: "804-283-6005", Email: "EF@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EG", LastName: "EQ", Contact: "804-283-6006", Email: "EG@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EH", LastName: "ER", Contact: "804-283-6007", Email: "EH@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EI", LastName: "ES", Contact: "804-283-6008", Email: "EI@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" },
            { FirstName: "EJ", LastName: "ET", Contact: "804-283-6009", Email: "EJ@uhcl.edu", UserRole: "Buyer-User", Company: "Coach", Country: "USA" }];

    sessionStorage.setItem('userRecords', JSON.stringify(users));
}

// adding user to the sessionStorage
function addUser() {

    //taking value from user
    FirstName = document.getElementById('Firstname').value;
    LastName = document.getElementById('Lastname').value;
    Contact = document.getElementById('Contact').value;
    Email = document.getElementById('Email').value;
    UserRole = document.getElementById('Role').value;
    Company = document.getElementById('Company').value;
    Country = document.getElementById('Country').value;

    //validating value and storing to the sessionStorage
    if (validateFirstName(FirstName)
        && validateLastName(LastName)
        && ValidateContact(Contact)
        && ValidateEmail(Email)
        && validateUserRole(UserRole)
        && validateCompany(Company)
        && validCountry(Country)) {

        var userobj = {
            FirstName: FirstName,
            LastName: LastName,
            Contact: Contact,
            Email: Email,
            UserRole: UserRole,
            Company: Company,
            Country: Country,
        };

        if (selectIndex === -1) {
            user.push(userobj);
        } else {
            user.slice(selectedIndex, 1, userobj);
        }
        sessionStorage.userRecords = JSON.stringify(user);
        init();
        onclear();
    }
}

//display value from sessionStorage to table
function tablecell(index, FirstName, LastName, Contact, Email, UserRole, Company, Country) {

    let table = document.getElementById('tableRow');
    let row = table.insertRow();


    //let IDcell = row.insertCell(0);
    let Firstcell = row.insertCell(0);
    let LastNamecell = row.insertCell(1);
    let Contactcell = row.insertCell(2);
    let Emailcell = row.insertCell(3);
    let UserRolecell = row.insertCell(4);
    let Companycell = row.insertCell(5);
    let Countrycell = row.insertCell(6);
    let editcell = row.insertCell(7);
    let deletecell = row.insertCell(8);

    Firstcell.innerHTML = FirstName;
    LastNamecell.innerHTML = LastName;
    Contactcell.innerHTML = Contact;
    Emailcell.innerHTML = Email;
    UserRolecell.innerHTML = UserRole;
    Companycell.innerHTML = Company;
    Countrycell.innerHTML = Country;
    editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditUserModal" onclick="onEdit(' + index + ')" value="Edit">';
    deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">';

}


//Delete value from the sessionStorage with the index
function onDelete(index) {
    var result = confirm("Are you sure you want to delete these company Info?");
    if (result) {
        user.splice(index, 1);
        sessionStorage.userRecords = JSON.stringify(user);
        init();
    }
}

// getting value form sessionStorage to edit 
function onEdit(index) {
    var currentuser= user[index];
    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editFirstName').value = currentuser.FirstName;
    document.getElementById('editLastName').value = currentuser.LastName;
    document.getElementById('editContact').value = currentuser.Contact;
    document.getElementById('editEmail').value = currentuser.Email;
    document.getElementById('editRole').value = currentuser.UserRole;
    document.getElementById('editCompany').value = currentuser.Company;
    document.getElementById('editCountry').value = currentuser.Country;
}

// saving the edit changes to sessionStorage
function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value;
    FirstName = document.getElementById('editFirstName').value;
    LastName = document.getElementById('editLastName').value;
    Contact = document.getElementById('editContact').value;
    Email = document.getElementById('editEmail').value;
    UserRole = document.getElementById('editRole').value;
    Company = document.getElementById('editCompany').value;
    Country = document.getElementById('editCountry').value;

    user[clickedArray].FirstName = FirstName;
    user[clickedArray].LastName = LastName;
    user[clickedArray].Contact = Contact;
    user[clickedArray].Email = Email;
    user[clickedArray].UserRole = UserRole;
    user[clickedArray].Company = Company;
    user[clickedArray].Country = Country;

    sessionStorage.userRecords = JSON.stringify(user);
    init();
}

function onclear() {
    document.getElementById('Firstname').value = "";
    document.getElementById('Lastname').value = "";
    document.getElementById('Contact').value = "";
    document.getElementById('Email').value = "";
    document.getElementById('Role').value = "";
    document.getElementById('Company').value = "";
    document.getElementById('Country').value = "";
}


function validateFirstName(FirstName) {
    if (FirstName != "") {
        return true;
    } else {
        alert('Enter First Name ');
        return false;
    }
}

function validateLastName(LastName) {
    if (LastName != "") {
        return true;
    } else {
        alert('Enter Second Name ');
        return false;
    }
}

function ValidateContact(Contact) {
    if (/^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(Contact)) {
        return true;
    }
    alert('Enter 10 digit number');
    return false;
}


function ValidateEmail(Email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return false;
}

function validateUserRole(UserRole) {
    if (UserRole != "") {
        return true;
    } else {
        alert('Enter a owner name ');
        return false;
    }
}

function validateCompany(Company) {
    if (Company != "") {
        return true;
    } else {
        alert('Enter Company Name ');
        return false;
    }
}

function validCountry(Country) {
    if (Country != "") {
        return true;
    } else {
        alert('Please select a country ');
        return false;
    }
}

//filter user
$(document).ready(function () {
    $("#searchBox").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tableRow tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

/* 
//display roles
function onUserRole() {

    if (document.getElementById('user').checked) {

        document.getElementById("addBtn").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }

    } else if (document.getElementById('admin').checked) {
        document.getElementById("addBtn").style.visibility = 'visible';
        var editbtnhd = document.getElementsByClassName("editbtnclass");

        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }

    } else if (document.getElementById('Gur').checked) {
        document.getElementById("addBtn").style.visibility = 'visible';
        for (var j in user) {
            if (user[j].shipper != 'Gursimran') {

                document.getElementsByClassName("deletebtnclass")[j].style.visibility = 'hidden';

                document.getElementsByClassName("editbtnclass")[j].style.visibility = 'hidden';
            }
        }
    } else {
        document.getElementById("addBtn").style.visibility = 'visible';
        var editbtnhd = document.getElementsByClassName("editbtnclass");

        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
}

*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function onUserRole() {

    userRole = JSON.parse(sessionStorage.getItem('role'));
    // user = JSON.parse(sessionStorage.getItem('userdetails'));

    if (userRole == null) {
       document.getElementById("addUser").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }

    else if (userRole == 'Super Admin') {
       document.getElementById("addUser").style.visibility = 'visible';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Supplier-Admin') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Supplier-User') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (userRole == 'Buyer-Admin') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Buyer') {
        document.getElementById("addUser").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }
}