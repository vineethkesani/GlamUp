function resetpwd() {
    // check the username
    var username = document.getElementById("reset_username").value;
    var answer = document.getElementById("reset_answer").value;
    var newpwd = document.getElementById("reset_pwd").value;
    var renewpwd = document.getElementById("reset_repwd").value;

    var len = userList.length

    for (var i = 0; i < len; i++) {
        if (username == userList[i].username) {
            // redirect to home html page
            if (answer == userList[i].answer) {
                if (validatepassword(newpwd)) {
                    if (newpwd == renewpwd) {
                        userList[i].password = newpwd;
                        localStorage.setItem('userList', JSON.stringify(userList));
                        document.getElementById("warning1").innerHTML = " ";
                        document.getElementById("successful").innerHTML = "Congratulation!!! Your password is changed";
                    }
                    else
                        document.getElementById("warning1").innerHTML = "Your Passwords doesn't match";
                }
                else
                    document.getElementById("warning1").innerHTML = "Your Passwords doesn't meet minimum required criteria";
            }
            else {
                document.getElementById("warning1").innerHTML = "Sorry! Your answer doesn't match our records"
            }
            break;
        }
        else
            document.getElementById("warning1").innerHTML = "Sorry! Unable to find your username in our records";
    }
}
                