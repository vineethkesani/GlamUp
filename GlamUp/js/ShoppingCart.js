console.log("Welcome to shopping cart");

function deleteRow(btn, index) {
    var cartListString = sessionStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);
    console.log(index);
    var row = btn.parentNode.parentNode;
    var r = confirm("Are you sure you wish to remove this item from your Shopping Cart?");
    if (r == true) {
        cartList.splice(index, 1);
        row.parentNode.removeChild(row);
        sessionStorage.setItem("cartList", JSON.stringify(cartList));
        init1();
    }
    //deleteItem(index);
    upDate();
}


function deleteItem(element, index) {
    var cartListString = sessionStorage.getItem("cartList");
    var cartList = JSON.parse(cartListString);
    console.log(index);
    var val = document.getElementById("qty" + index).value;
    if (parseInt(val) == 0) {
        if (confirm("The Item Quantity is Zero, Do you want to remove this item from your Shopping Cart?")) {
            cartList.splice(index, 1);
            sessionStorage.setItem("cartList", JSON.stringify(cartList));
            init1();
        } else {
            document.getElementById("qty" + index).value = 1;
            cartList[index].inventory = 1;
            sessionStorage.setItem("cartList", JSON.stringify(cartList));
        }

    }
    else {
        
        cartList[index].inventory = val;
        sessionStorage.setItem("cartList", JSON.stringify(cartList));
    }

  /*  cartList[index].inventory = quant;
    if (quant > cartList[index].inventory)
        document.getElementById("qty" + index).value = ;
        */
    console.log(val);

}


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
    document.getElementById("tax").innerHTML = "$" + parseFloat(Math.round(tax * 100) / 100).toFixed(2);

    var total = sum + tax;
    document.getElementById("total").innerHTML = "$" + total.toFixed(2);

    let totalsession = [{ total: total.toFixed(2)}];
    sessionStorage.setItem('total', JSON.stringify(totalsession));

    //store updated cartList to session
    sessionStorage.setItem("cartList", JSON.stringify(cartList));

}


function init1() {
    cartListString = sessionStorage.getItem("cartList");
    if (cartListString) {
       // alert(cartListString);
        cartList = JSON.parse(cartListString);
       
    }
    else {
        /*var cartList = [
            { img: "images/1.jpg", company: "Forever 21", price: 20, description: "Full-Sleeve Blouse", quantity: 1 },
            { img: "images/2.jpg", company: "Zara", price: 30, description: "White Dress", quantity: 1 },
            { img: "images/3.jpg", company: "Zara", price: 50, description: "Black Party dress", quantity: 1 },
            { img: "images/4.jpg", company: "Levi's", price: 10, description: "Blue Jeans", quantity: 1 }
        ]; */

        sessionStorage.setItem("cartList", JSON.stringify(cartList));
    }
   
    var tableHeader = "<thead><tr><th>Image</th><th>Company</th><th>Description</th><th>Price</th><th>Quantity</th><th>Remove</th></tr></thead>";
    var tableBody = "";

    for (var i = 0; i < cartList.length; i++) {
        //render items
        tableBody += "<td>" + "<img src=\"" + cartList[i].image + "\" width=\"100\" height=\"100\"/>" + "</td>";
        tableBody += "<td>" + cartList[i].company + "</td>";
        tableBody += "<td>" + cartList[i].description + "</td>";
        tableBody += "<td><input id=\"price" + i + "\" type=\"hidden\" value=\"" + cartList[i].price + "\" /> $" + cartList[i].price + "</td>";
        tableBody += "<td><input onchange=deleteItem(this," + i +") id=\"qty" + i + "\" class='form-control' type=\"number\" value=\"" + cartList[i].inventory  + "\" min=\"1\" max=\"99\" width: 10px alt=\"edit\" width=\"5\" height=\"15\"></td>";
        tableBody += "<td><a href='#' onclick='deleteRow(this," + i + ")'><i class='fa fa-trash-o' style='font- size:120px; color: red'></i></a></td></tr>";
    }

    var table = "<table class='table table-striped'>" + tableHeader + tableBody + "</table>";

    document.getElementById("newCart").innerHTML = table;
    upDate();
}
1
window.init = init1();
console.log("Shopping cart js loaded");
