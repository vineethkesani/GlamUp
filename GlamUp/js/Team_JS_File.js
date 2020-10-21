/*******************Login Page ***************************/

var userList = [];

function createUsers() {
    var user1 = new user("vineeth@uhcl.edu", "123abc@D", "Vineeth", "Kesani", "dog", "+1-224-324-2174", "Super Admin", " ", 0);
    var user2 = new user("gursimran@uhcl.edu", "123abc@D", "Gur", "Simran", "dog", "+1-224-324-2174", "Supplier-Admin", "    ", 0);
    var user3 = new user("ishan@uhcl.edu", "123abc@D", "Ishan", "Neema", "dog", "+1-224-324-2174", "Buyer-Admin", "A&F", 0);
    var user4 = new user("soni@uhcl.edu", "123abc@D", "Soni", "Makwana", "dog", "+1-224-324-2174", "Supplier-Admin", "Gap", 0);
    var user5 = new user("vamsi@uhcl.edu", "123abc@D", "Vamsi", "Balineni", "dog", "+1-224-324-2174", "Supplier-User", "Zara", 0);
    var user6 = new user("sai@uhcl.edu", "123abc@D", "Sai", "Vemuri", "dog", "+1-224-324-2174", "Buyer", "Hollister", 0);
    var user7 = new user("mounica@uhcl.edu", "123abc@D", "Mounica", "Sweety", "dog", "+1-224-324-2174", "Buyer-Admin", "Levis", 0);
    var user8 = new user("sujitha@uhcl.edu", "123abc@D", "Sujitha", "Chowdary", "dog", "+1-224-324-2174", "Buyer", "Banana Republic", 0);
    var user9 = new user("bhagyasree@uhcl.edu", "123abc@D", "Bhagyasree", "Marri", "reset", "123-223-8989", "Buyer", "Ralph Lauren", 0);
    var user10 = new user("sansa@uhcl.edu", "123abc@D", "Sansa", "Stark", "reset", "281-283-2480", "Buyer", "Coach", 0);
    var user11 = new user("Rick@uhcl.edu", "Rick123", "Rick", "Fraiser", "reset", "987-283-2489", "Supplier-User", "Tommy Hilfiger", 0);
    var user12 = new user("Reek@uhcl.edu", "Reek123", "Reek", "Phaine", "reset", "876-277-2289", "Supplier-User", "Tommy Hilfiger", 0);
    var user13 = new user("Jim@uhcl.edu", "Jim123", "Jim", "Jones", "reset", "487-283-2489", "Supplier-User", "Tommy Hilfiger", 0);
    var user14 = new user("A@uhcl.edu", "A123", "A", "G", "reset", "457-283-0001", "Supplier-User", "Tommy Hilfiger", 0);
    var user15 = new user("B@uhcl.edu", "B123", "B", "H", "reset", "457-283-0002", "Supplier-User", "Tommy Hilfiger", 0);
    var user16 = new user("C@uhcl.edu", "C123", "C", "I", "reset", "457-283-0003", "Supplier-User", "Tommy Hilfiger", 0);
    var user17 = new user("D@uhcl.edu", "D123", "D", "J", "reset", "457-283-0004", "Supplier-User", "Tommy Hilfiger", 0);
    var user18 = new user("E@uhcl.edu", "E123", "E", "K", "reset", "457-283-0005", "Supplier-User", "Tommy Hilfiger", 0);
    var user19 = new user("F@uhcl.edu", "F123", "F", "L", "reset", "457-283-0006", "Supplier-User", "Tommy Hilfiger", 0);

    var user20 = new user("Ted@uhcl.edu", "Ted123", "Ted", "Lucifer", "reset", "123-223-2484", "Supplier-Admin", "A&F", 0);
    var user21 = new user("Bhan@uhcl.edu", "Bhan123", "Bhan", "Hu", "reset", "999-223-2494", "Supplier-User", "A&F", 0);
    var user22 = new user("Kim@ygmail.com", "Kim123", "Kim", "Jackson", "reset", "100-234-6666", "Supplier-User", "A&F", 0);
    var user23 = new user("Seth@uhcl.edu", "Seth123", "Seth", "Rogen", "reset", "987-983-2484", "Supplier-User", "A&F", 0);
    var user24 = new user("Ross@uhcl.edu", "Ross123", "Ross", "Wells", "reset", "100-999-2484", "Supplier-User", "A&F", 0);
    var user25 = new user("M@uhcl.edu", "M123", "M", "R", "reset", "100-999-0001", "Supplier-User", "A&F", 0);
    var user26 = new user("N@uhcl.edu", "N123", "N", "S", "reset", "100-999-0002", "Supplier-User", "A&F", 0);
    var user27 = new user("O@uhcl.edu", "O123", "O", "T", "reset", "100-999-0003", "Supplier-User", "A&F", 0);
    var user28 = new user("P@uhcl.edu", "P123", "P", "U", "reset", "100-999-0004", "Supplier-User", "A&F", 0);
    var user29 = new user("Q@uhcl.edu", "Q123", "Q", "V", "reset", "100-999-0005", "Supplier-User", "A&F", 0);

    var user30 = new user("Clint@uhcl.edu", "Clint123", "Clint", "Eastwood", "reset", "900-283-2000", "Buyer-Admin", "Gap", 0);
    var user31 = new user("Sam@uhcl.edu", "Sam123", "Sam", "Tarly", "reset", "456-786-2480", "Buyer-User", "Gap", 0);
    var user32 = new user("Wells@uhcl.edu", "Wells123", "Wells", "Fargo", "reset", "456-786-2870", "Buyer-User", "Gap", 0);
    var user33 = new user("Tom@uhcl.edu", "Tom123", "Tom", "Hilton", "reset", "456-786-2776", "Buyer-User", "Gap", 0);
    var user34 = new user("Anna@uhcl.edu", "Anna123", "Anna", "Quin", "reset", "233-786-2480", "Buyer-User", "Gap", 0);
    var user35 = new user("W@uhcl.edu", "W123", "W", "AB", "reset", "233-786-0001", "Buyer-User", "Gap", 0);
    var user36 = new user("X@uhcl.edu", "X123", "X", "AC", "reset", "233-786-0002", "Buyer-User", "Gap", 0);
    var user37 = new user("Y@uhcl.edu", "Y123", "Y", "AD", "reset", "233-786-0003", "Buyer-User", "Gap", 0);
    var user38 = new user("Z@uhcl.edu", "Z123", "Z", "AE", "reset", "233-786-0004", "Buyer-User", "Gap", 0);
    var user39 = new user("AA@uhcl.edu", "AA123", "AA", "AF", "reset", "233-786-0005", "Buyer-User", "Gap", 0);

    var user40 = new user("Ram@uhcl.edu", "Ram123", "Ram", "Lal", "reset", "800-283-2000", "Supplier-Admin", "Zara", 0);
    var user41 = new user("Sarah@uhcl.edu", "Sarah123", "Sarah", "Jenkins", "reset", "801-283-2000", "Supplier-User", "Zara", 0);
    var user42 = new user("Michael@uhcl.edu", "Michael123", "Michael", "Jordan", "reset", "802-283-2000", "Supplier-User", "Zara", 0);
    var user43 = new user("Michelle@uhcl.edu", "Michelle123", "Michelle", "Goldman", "reset", "803-283-2000", "Supplier-User", "Zara", 0);
    var user44 = new user("Tony@uhcl.edu", "Tony123", "Tony", "Stark", "reset", "804-283-2000", "Supplier-User", "Zara", 0);
    var user45 = new user("AG@uhcl.edu", "AG123", "AG", "AL", "reset", "804-283-2001", "Supplier-User", "Zara", 0);
    var user46 = new user("AH@uhcl.edu", "AH123", "AH", "AM", "reset", "804-283-2002", "Supplier-User", "Zara", 0);
    var user47 = new user("AI@uhcl.edu", "AI123", "AI", "AN", "reset", "804-283-2003", "Supplier-User", "Zara", 0);
    var user48 = new user("AJ@uhcl.edu", "AJ123", "AJ", "AO", "reset", "804-283-2004", "Supplier-User", "Zara", 0);
    var user49 = new user("AK@uhcl.edu", "AK123", "AK", "AP", "804-283-2005", "Supplier-User", "Zara", 0);

    var user50 = new user("June@uhcl.edu", "June123", "June", "Shoo", "reset", "700-283-2000", "Buyer-Admin", "Levis", 0);
    var user51 = new user("Anne@uhcl.edu", "Anne123", "Anne", "Grimes", "reset", "701-283-2000", "Buyer-User", "Levis", 0);
    var user52 = new user("Regina@uhcl.edu", "Regina123", "Regina", "Phalange", "reset", "702-283-2000", "Buyer-User", "Levis", 0);
    var user53 = new user("Stan@uhcl.edu", "Stan123", "Stan", "Lee", "reset", "703-283-2000", "Buyer-User", "Levis", 0);
    var user54 = new user("Jackie@uhcl.edu", "Jackie123", "Jackie", "Chan", "reset", "704-283-2000", "Buyer-User", "Levis", 0);
    var user55 = new user("AQ@uhcl.edu", "AQ123", "AQ", "AV", "reset", "704-283-2000", "Buyer-User", "Levis", 0);
    var user56 = new user("AR@uhcl.edu", "AR123", "AR", "AW", "reset", "704-283-2000", "Buyer-User", "Levis", 0);
    var user57 = new user("AS@uhcl.edu", "AS123", "AS", "AX", "reset", "704-283-2000", "Buyer-User", "Levis", 0);
    var user58 = new user("AT@uhcl.edu", "AT123", "AT", "AY", "reset", "704-283-2000", "Buyer-User", "Levis", 0);
    var user59 = new user("AU@uhcl.edu", "AU123", "AU", "AZ", "reset", "704-283-2000", "Buyer-User", "Levis", 0);

    var user60 = new user("BA@uhcl.edu", "BA123", "BA", "BK", "reset", "804-283-2001", "Supplier-Admin", "H&M", 0);
    var user61 = new user("BB@uhcl.edu", "BB123", "BB", "BL", "reset", "804-283-2002", "Supplier-User", "H&M", 0);
    var user62 = new user("BC@uhcl.edu", "BC123", "BC", "BM", "reset", "804-283-2003", "Supplier-User", "H&M", 0);
    var user63 = new user("BD@uhcl.edu", "BD123", "BD", "BN", "reset", "804-283-2004", "Supplier-User", "H&M", 0);
    var user64 = new user("BE@uhcl.edu", "BE123", "BE", "BO", "reset", "804-283-2005", "Supplier-User", "H&M", 0);
    var user65 = new user("BF@uhcl.edu", "BF123", "BF", "BP", "reset", "804-283-2006", "Supplier-User", "H&M", 0);
    var user66 = new user("BG@uhcl.edu", "BG123", "BG", "BQ", "reset", "804-283-2007", "Supplier-User", "H&M", 0);
    var user67 = new user("BH@uhcl.edu", "BH123", "BH", "BR", "reset", "804-283-2008", "Supplier-User", "H&M", 0);
    var user68 = new user("BI@uhcl.edu", "BI123", "BI", "BS", "reset", "804-283-2009", "Supplier-User", "H&M", 0);
    var user69 = new user("BJ@uhcl.edu", "BJ123", "BJ", "BT", "reset", "804-283-2010", "Supplier-User", "H&M", 0);

    var user70 = new user("BU@uhcl.edu", "BU123", "BU", "CE", "reset", "804-283-3000", "Supplier-Admin", "Banana Republic", 0);
    var user71 = new user("BV@uhcl.edu", "BV123", "BV", "CF", "reset", "804-283-3001", "Supplier-User", "Banana Republic", 0);
    var user72 = new user("BW@uhcl.edu", "BW123", "BW", "CG", "reset", "804-283-3002", "Supplier-User", "Banana Republic", 0);
    var user73 = new user("BX@uhcl.edu", "BX123", "BX", "CH", "reset", "804-283-3003", "Supplier-User", "Banana Republic", 0);
    var user74 = new user("BY@uhcl.edu", "BY123", "BY", "CI", "reset", "804-283-3004", "Supplier-User", "Banana Republic", 0);
    var user75 = new user("BZ@uhcl.edu", "BZ123", "BZ", "CJ", "reset", "804-283-3005", "Supplier-User", "Banana Republic", 0);
    var user76 = new user("CA@uhcl.edu", "CA123", "CA", "CK", "reset", "804-283-3006", "Supplier-User", "Banana Republic", 0);
    var user77 = new user("CB@uhcl.edu", "CB123", "CB", "CL", "reset", "804-283-3007", "Supplier-User", "Banana Republic", 0);
    var user78 = new user("CC@uhcl.edu", "CC123", "CC", "CM", "reset", "804-283-3008", "Supplier-User", "Banana Republic", 0);
    var user79 = new user("CD@uhcl.edu", "CD123", "CD", "CN", "reset", "804-283-3009", "Supplier-User", "Banana Republic", 0);

    var user80 = new user("CO@uhcl.edu", "CO123", "CO", "CX", "reset", "804-283-4000", "Buyer-Admin", "Ralph Lauren", 0);
    var user81 = new user("CP@uhcl.edu", "CP123", "CP", "CY", "reset", "804-283-4001", "Buyer-User", "Ralph Lauren", 0);
    var user82 = new user("CQ@uhcl.edu", "CQ123", "CQ", "CZ", "reset", "804-283-4002", "Buyer-User", "Ralph Lauren", 0);
    var user83 = new user("CR@uhcl.edu", "CR123", "CR", "DA", "reset", "804-283-4003", "Buyer-User", "Ralph Lauren", 0);
    var user84 = new user("CS@uhcl.edu", "CS123", "CS", "DB", "reset", "804-283-4004", "Buyer-User", "Ralph Lauren", 0);
    var user85 = new user("CT@uhcl.edu", "CT123", "CT", "DC", "reset", "804-283-4005", "Buyer-User", "Ralph Lauren", 0);
    var user86 = new user("CU@uhcl.edu", "CU123", "CU", "DD", "reset", "804-283-4006", "Buyer-User", "Ralph Lauren", 0);
    var user87 = new user("CV@uhcl.edu", "CV123", "CV", "DE", "reset", "804-283-4007", "Buyer-User", "Ralph Lauren", 0);
    var user88 = new user("CW@uhcl.edu", "CW123", "CW", "DF", "reset", "804-283-4008", "Buyer-User", "Ralph Lauren", 0);

    var user89 = new user("DG@uhcl.edu", "DG123", "DG", "DQ", "reset", "804-283-5000", "Buyer-Admin", "Hollister", 0);
    var user90 = new user("DH@uhcl.edu", "DH123", "DH", "DR", "reset", "804-283-5001", "Buyer-User", "Hollister", 0);
    var user91 = new user("DI@uhcl.edu", "DI123", "DI", "DS", "reset", "804-283-5002", "Buyer-User", "Hollister", 0);
    var user92 = new user("DJ@uhcl.edu", "DJ123", "DJ", "DT", "reset", "804-283-5003", "Buyer-User", "Hollister", 0);
    var user93 = new user("DK@uhcl.edu", "DK123", "DK", "DU", "reset", "804-283-5004", "Buyer-User", "Hollister", 0);
    var user94 = new user("DL@uhcl.edu", "DL123", "DL", "DV", "reset", "804-283-5005", "Buyer-User", "Hollister", 0);
    var user95 = new user("DM@uhcl.edu", "DM123", "DM", "DW", "reset", "804-283-5006", "Buyer-User", "Hollister", 0);
    var user96 = new user("DN@uhcl.edu", "DN123", "DN", "DX", "reset", "804-283-5007", "Buyer-User", "Hollister", 0);
    var user97 = new user("DO@uhcl.edu", "DO123", "DO", "DY", "reset", "804-283-5008", "Buyer-User", "Hollister", 0);
    var user98 = new user("DP@uhcl.edu", "DP123", "DP", "DZ", "reset", "804-283-5009", "Buyer-User", "Hollister", 0);

    var user99 = new user("EA@uhcl.edu", "EA123", "EA", "EK", "reset", "804-283-6000", "Buyer-Admin", "Coach", 0);
    var user100 = new user("EB@uhcl.edu", "EB123", "EB", "EL", "reset", "804-283-6001", "Buyer-User", "Coach", 0);
    var user101 = new user("EC@uhcl.edu", "EC123", "EC", "EM", "reset", "804-283-6002", "Buyer-User", "Coach", 0);
    var user102 = new user("ED@uhcl.edu", "ED123", "ED", "EN", "reset", "804-283-6003", "Buyer-User", "Coach", 0);
    var user103 = new user("EE@uhcl.edu", "EE123", "EE", "EO", "reset", "804-283-6004", "Buyer-User", "Coach", 0);
    var user104 = new user("EF@uhcl.edu", "EF123", "EF", "EP", "reset", "804-283-6005", "Buyer-User", "Coach", 0);
    var user105 = new user("EG@uhcl.edu", "EG123", "EG", "EQ", "reset", "804-283-6006", "Buyer-User", "Coach", 0);
    var user106 = new user("EH@uhcl.edu", "EH123", "EH", "ER", "reset", "804-283-6007", "Buyer-User", "Coach", 0);
    var user107 = new user("EI@uhcl.edu", "EI123", "EI", "ES", "reset", "804-283-6008", "Buyer-User", "Coach", 0);
    var user108 = new user("EJ@uhcl.edu", "EJ123", "EJ", "ET", "reset", "804-283-6009", "Buyer-User", "Coach", 0);

    userList = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12, user13, user14, user15, user16, user17, user18, user19, user20, user21, user22, user23, user24, user25, user26, user27, user28, user29, user30, user31, user32, user33, user34, user35, user36, user37, user38, user39, user40, user41, user42, user43, user44, user45, user46, user47, user48, user49, user50, user51, user52, user53, user54, user55, user56, user57, user58, user59, user60, user61, user62, user63, user64, user65, user66, user67, user68, user69, user70, user71, user72, user73, user74, user75, user76, user77, user78, user79, user80, user81, user82, user83, user84, user85, user86, user87, user88, user89, user90, user91, user92, user93, user94, user95, user96, user97, user98, user99, user100, user101, user102, user103, user104, user105, user106, user107, user108];
}


function user(username, password, firstname, lastname, answer, contactnumber, role, company, wrongpwd) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.answer = answer;
    this.contactnumber = contactnumber;
    this.role = role;
    this.company = company;
    this.wrongpwd = wrongpwd;
}

function loadUsers() {
    // if local storage is empty, 
    //if it is empty, call createUsers()
    // if not empty , load userList from localStorage
    var userListString = localStorage.getItem("userList");
    if (userListString == null) {
        //local Storage is empty
        createUsers();
        localStorage.setItem("userList", JSON.stringify(userList));
    }
    else {
        //if local storage is not empty
          userList = JSON.parse(userListString);
    }

}
loadUsers();


/*****************************Company Management*******************************/

var company = [];
var selectIndex = -1;
var clickedArray;
var select;
var index;

function companymanagementinit() {

    document.getElementById('tableRow').innerHTML = '';
    if (!sessionStorage.companyRecords) {
        companydata();
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

function companydata() {
    var companydata = [
        {  //Regular admin Database-->vamsi,darya,kenny,peter
            name: "GlamUp", email: "vineeth@uhcl.edu", phone: "224-324-2174", owner: "Vineeth Kesani", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Super Admin"
        },

        { name: "Tommy Hilfiger", email: "John@uhcl.edu", phone: "281-283-2480", owner: "John Doe", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-Admin" },
        { name: "Tommy Hilfiger", email: "Vai@uhcl.edu", phone: "123-223-8989", owner: "Vai LSha", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Super Admin" },
        { name: "Tommy Hilfiger", email: "Rick@uhcl.edu", phone: "987-283-2489", owner: "Rick Fraiser", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "Reek@uhcl.edu", phone: "876-277-2289", owner: "Reek Phaine", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "Jim@uhcl.edu", phone: "487-283-2489", owner: "Jim Jones", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "A@uhcl.edu", phone: "457-283-0001", owner: "ABC def", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "B@uhcl.edu", phone: "457-283-0002", owner: "BCA fed", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "C@uhcl.edu", phone: "457-283-0003", owner: "GFD YUP def", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "Tommy Hilfiger", email: "D@uhcl.edu", phone: "457-283-0004", owner: "VBH ADS", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },

        { name: "A&F", email: "Ted@uhcl.edu", contact: "123-223-2484", owner: "Ted Lucifer", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Supplier-Admin" },
        { name: "A&F", email: "Bhan@uhcl.edu", contact: "999-223-2494", owner: "Bhan Hu", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Supplier-User" },
        { name: "A&F", email: "Kim@ygmail.com", contact: "100-234-6666", owner: "Kim Jackson", street: "South Shore", city: "Houston", state: "Texas", country: "USA", duns: "159", type: "Supplier-User" },
        { name: "A&F", email: "Ross@uhcl.edu", contact: "100-999-2484", owner: "Ross Wells", street: "Gemini Ave", city: "Houston", state: "Texas", country: "USA", duns: "951", type: "Supplier-User" },
        { name: "A&F", email: "M@uhcl.edu", contact: "100-999-0001", owner: "M R", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Supplier-User" },
        { name: "A&F", email: "N@uhcl.edu", contact: "100-999-0002", owner: "N S", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Supplier-User" },
        { name: "A&F", email: "O@uhcl.edu", contact: "100-999-0003", owner: "O T", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Supplier-User" },
        { name: "A&F", email: "P@uhcl.edu", contact: "100-999-0004", owner: "P U", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Supplier-User" },

        { name: "Gap", email: "Clint@uhcl.edu", contact: "281-283-2480", owner: "Clint Eastwood", street: "El Camino", city: "Houston", state: "Texas", country: "USA", duns: "123", type: "Buyer-Admin" },
        { name: "Gap", email: "Sam@uhcl.edu", contact: "456-786-2480", owner: "Sam Tarly", street: "Saturn Ln", city: "Houston", state: "Texas", country: "USA", duns: "789", type: "Buyer-User" },
        { name: "Gap", email: "Wells@uhcl.edu", contact: "456-786-2870", owner: "Wells Fargo", street: "South Shore", city: "Houston", state: "Texas", country: "USA", duns: "159", type: "Buyer-User" },
        { name: "Gap", email: "Tom@uhcl.edu", contact: "456-786-2776", owner: "Tom Hilton", street: "Gemini Ave", city: "Houston", state: "Texas", country: "USA", duns: "951", type: "Buyer-User" },
        { name: "Gap", email: "Anna@uhcl.edu", contact: "233-786-2480", owner: "Anna Quin", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Buyer-User" },
        { name: "Gap", email: "W@uhcl.edu", contact: "233-786-0001", owner: "W AB", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Buyer-User" },
        { name: "Gap", email: "X@uhcl.edu", contact: "233-786-0002", owner: "X AC", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Buyer-User" },
        { name: "Gap", email: "Y@uhcl.edu", contact: "233-786-0003", owner: "Y AD", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Buyer-User" },
        { name: "Gap", email: "Z@uhcl.edu", contact: "233-786-0004", owner: "Z AE", street: "Moonrock Dr", city: "Houston", state: "Texas", country: "USA", duns: "984", type: "Buyer-User" },


    ];
    sessionStorage.setItem('companyRecords', JSON.stringify(companydata));
}


