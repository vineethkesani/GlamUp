function randomPOnumber(length) {
    var chars = "abcdefghijklmnopqrstuvwxyz!$&-ABCDEFGHIJKLMNOP1234567890";
    var POnum = "";
    for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        POnum += chars.charAt(i);
    }
    return POnum;
}

function generate() {
    document.getElementById("po_num").value = randomPOnumber(myform.length.value);
    //myform.po_num.value = randomPOnumber(myform.length.value);
    initPo();
}

function initPo() {
    cartListString = sessionStorage.getItem("cartList");
    cartList = JSON.parse(cartListString);

    let bill1 = sessionStorage.getItem("total");
    let bill2 = JSON.parse(bill1);
    //alert(bill2[0].total)

    document.getElementById('total').innerHTML = "$ " + bill2[0].total;
    document.getElementById('amountPaid').innerHTML = "$ " + bill2[0].total;

    var cartListtableRow = "";
    for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].quantity != 0) {
            cartListtableRow += "<tr><td>" + cartList[i].company + "</td>";
            cartListtableRow += "<td>" + cartList[i].description + "</td>";
            cartListtableRow += "<td style='text-align:center'>" + "<img src=" + cartList[i].image + " width='25%'>" + "</td>";
            cartListtableRow += "<td>" + cartList[i].price + "</td>";
            cartListtableRow += "<td>" + cartList[i].quantity + "</td></tr>";
        }

    }

    var tableHead = "<table class=\"product\"> <thead ><tr> <th>Company</th> <th>Description</th> <th>Image</th>"
        + "<th>Price</th><th>Quantity</th></tr></thead > <tbody >";

    var cartListTable = tableHead + cartListtableRow + "</tbody> </table >";
    document.getElementById("poItems").innerHTML = cartListTable;
}
window.init = initPo();

var currentDate = new Date(),
    currentDay = currentDate.getDate() < 10
        ? '0' + currentDate.getDate()
        : currentDate.getDate(),
    currentMonth = currentDate.getMonth() < 9
        ? '0' + (currentDate.getMonth() + 1)
        : (currentDate.getMonth() + 1);

document.getElementById("date").innerHTML = currentMonth + '/' + currentDay + '/' + currentDate.getFullYear();

function upDate() {
    var cartListString = sessionStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);


    var sum = 0;

    for (var i = 0; i < cartList.length; i++) {
        if (document.getElementById("qty" + i) != null) {
            sum += parseInt(document.getElementById("price" + i).value) * parseInt(document.getElementById("qty" + i).value);
            cartList[i].quantity = parseInt(document.getElementById("qty" + i).value);
        }
    }

    document.getElementById("subTotal").innerHTML = "$" + sum;


    var tax = sum * 0.0825;
    document.getElementById("tax").innerHTML = parseFloat(Math.round(tax * 100) / 100).toFixed(2);;

    var total = sum + tax;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

    //store updated cartList to session
    sessionStorage.setItem("cartList", JSON.stringify(cartList));

}
//window.int = update();

