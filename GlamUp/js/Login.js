function login() {
    var username = document.getElementById("username_01").value;
    var password = document.getElementById("password_01").value;
    // for (var i = 0; i < userlist.length; i++)
    var len = userList.length


    for (var i = 0; i < len; i++) {
        if (username == userList[i].username) {
            if (userList[i].wrongpwd > 4) {
                document.getElementById("warning1").innerHTML = "Sorry! Your account has been lockced!!";
                break;
            }
            else {
                if (password == userList[i].password) {
                    var role = userList[i].role;
                    sessionStorage.setItem("role", JSON.stringify(role));
                    var userdetails = userList[i];
                    sessionStorage.setItem("userdetails", JSON.stringify(userdetails));
                    var usercompany = userList[i].company;
                    sessionStorage.setItem("usercompany", JSON.stringify(usercompany));
                    if (userList[i].role == "Super Admin")
                        window.location.href = "Home.html";
                    else if (userList[i].role == "Admin")
                        window.location.href = "User_Managemet_01.html";
                    else if (userList[i].role == "Supplier-Admin")
                        window.location.href = "CompanyManagment.html";
                    else if (userList[i].role == "Supplier-User")
                        window.location.href = "CompanyManagment.html";
                    else if (userList[i].role == "Buyer")
                        window.location.href = "ProductManagement.html";
                    else if (userList[i].role == "Buyer-Admin")
                        window.location.href = "ProductManagement.html";
                    else
                        window.location.href = "Home.html";
                }
                else {
                    userList[i].wrongpwd = userList[i].wrongpwd + 1;
                    document.getElementById("warning1").innerHTML = "Sorry! You have made " + userList[i].wrongpwd +  " unsuccessful attempt(s). The maximum retry attempts allowed for this access mode are 5. If 5 is exceeded, then you will be disabled. Please reset your Password.";
                    // userList[i].wrongpwd = userList[i].wrongpwd + 1;
                    break;
                }
            }
        }
        else {
            document.getElementById("warning1").innerHTML = "Sorry! We are unable to find your username in our records";
        }
        
    }
   
}


function verifyUserName() {
    document.getElementById("warning1").innerHTML = "";

    var username = document.getElementById("username_01").value;
    // validating email
    if (username.length < 2 || username.length > 50) {
        document.getElementById("warning1").innerHTML = "Sorry! Username must be between 2-50 characters";
        return;
    }
    // validating email format
    if (!validateEmail(username)) {
        document.getElementById("warning1").innerHTML = "Sorry! Username must be in email format";
        return;
    }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function verifyPassword() {
    document.getElementById("warning1").innerHTML = "";
    // checking pwd length

    // checking special characters
    var password = document.getElementById("password_01").value;
    if (!validatePassword(password)) {
        document.getElementById("warning1").innerHTML = "Sorry! Your password doesn't meet minimum required criteria";
    }

}

function validatePassword(newPassword) {

    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // alert(newPassword);
    if (newPassword.length < minNumberofChars || newPassword.length > maxNumberofChars) {
        return false;
    }
    if (!regularExpression.test(newPassword)) {
        // alert("password should contain atleast one number and one special character");
        return false;
    }
    return true;
}

