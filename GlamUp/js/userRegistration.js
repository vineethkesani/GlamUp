function User(username, password, firstname, lastnamae, contact, role, company, country, pwdQuestionArray) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastnamae = lastnamae;
    this.contact = contact;
    this.role = role;
    this.company = company;
    this.country = country;
    this.pwdQuestionArray = pwdQuestionArray;
}
var userArray = [];
var localUsrArry;

localUsrArry = $.parseJSON(localStorage.getItem("userArray"));

function validatepassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

function validatecontact(contact) {
    var Ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return Ph.test(contact);
}


function Register() {
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    contact = document.getElementById("contact").value;
    username = document.getElementById("email").value;
    reemail = document.getElementById("reemail").value;
    role = document.getElementById("role").value;
    company = document.getElementById("company").value;
    country = document.getElementById("country").value;
    password = document.getElementById("password").value;
    //pwdQuestionArray = document.getElementById("pwdQuestionArray").value;
    if (firstname == "") {
        document.form.firstname.focus();
        //document.getElementById("errorBox").value = "*enter the first name";
        alert("Enter the first name");
        return false;

    }
    if (lastname == "") {
        document.form.lastname.focus();
        alert("Enter the Last name");
        //document.getElementById("errorBox").innerHTML = "*enter the last name";
        return false;
    }
    if (!validatecontact(contact_reg.value)) {
        alert("Enter the telephopne number in valid American format! for eg: 123-456-7890");
        //document.getElementById("errorBox").innerHTML = "Enter the telephopne number in valid American format! <br/> for eg: 123-456-7890";
        return false;
    }

    if (username == "") {
        document.form.email.focus();
        alert("*enter the email");
        //    document.getElementById("errorBox").innerHTML = "*enter the email";
        return false;
    } else if (!emailRegex.test(username)) {
        document.form.email.focus();
        alert("*enter the valid email");
        // document.getElementById("errorBox").innerHTML = "*enter the valid email";
        return false;
    }
    if (reemail == "") {
        document.form.reemail.focus();
        alert("*Re-enter the email");
        //document.getElementById("errorBox").innerHTML = "*Re-enter the email";
        return false;
    } else if (!emailRegex.test(reemail)) {
        document.form.reemail.focus();
        alert("*Re-enter the valid email");
        document.getElementById("errorBox").innerHTML = "*Re-enter the valid email";
        return false;
    }
    if (reemail != username) {
        //document.form.email.focus();
        alert("*emails are not matching, re-enter again");
        // document.getElementById("errorBox").innerHTML = "*emails are not matching, re-enter again";
        return false;
    }
    if (password == "") {
        document.form.password.focus();
        alert("*enter the password");
        //document.getElementById("errorBox").innerHTML = "*enter the password";
        return false;
    }

    if (!validatepassword(password)) {
        alert("Password must contain at least one lower letter, <br /> One up letter, One number, and one special character from the following 7 characters: !@#\$ %\^&\*");
        document.getElementById("errorBox").innerHTML = "Password must contain at least one lower letter, <br /> One up letter, One number, and one special character from the following 7 characters: !@#\$ %\^&\*";
        return false;
    }

    if (company == "") {
        document.form.company.focus();
        alert("*select a Company Name");
        //document.getElementById("errorBox").innerHTML = "*select a Company Name";
        return false;
    }
    if (role == "") {
        document.form.role.focus();
        alert("*select your Role");
        //document.getElementById("errorBox").innerHTML = "*select your Role";
        return false;
    }

    if (country == "") {
        document.form.country.focus();
        alert("*select a Country");
        //document.getElementById("errorBox").innerHTML = "*select a Company Name";
        return false;
    }
    if (firstname != '' && lastname != '' && email != '' && reemail != '' && password != '') {
        document.getElementById("errorBox").innerHTML = "*form submitted successfully";

        var locuser = new User(username, password, firstname, lastname, contact, role, company, '', []);

        // var localUsrArry = $.parseJSON(localStorage.getItem("userList"));
        userList.push(locuser);
        localStorage.setItem('userList', JSON.stringify(userList));

        userRecords.push(locuser);
        sessionStorage.setItem('userRecords', JSON.stringify(userRecords));
        location.href = "login_admin.html";
    }
}
 