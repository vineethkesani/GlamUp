var product = [];
var selectIndex = -1;
var clickedArray;
var select;
var index;
var cartList;

function init() {

    document.getElementById('tableRow').innerHTML = '';
    if (!sessionStorage.productRecords) {
        data();
    }
    if (sessionStorage.productRecords) {
        product = JSON.parse(sessionStorage.productRecords);
        for (var i in product) {
            tablecell(
                i,
                product[i].image,
                product[i].company,
                product[i].price,
                product[i].description,
                product[i].inventory
            )
        }
    }
	onUserRole();
}


function data() {
    var products = [
        {
            image: "images/1.jpg",
            company: "GAP",
            price: 79,
            description: "Black Mini Dress",
            inventory: 50
        }, {
            image: "images/2.jpg",
            company: "LEVIS",
            price: 69,
            description: "Mile High Moto Ankle Jeans",
            inventory: 90
        },
        {
            image: "images/3.jpg",
            company: "LEVIS",
            price: 39,
            description: "Wedgie Fit Jeans",
            inventory: 75
        },
        {
            image: "images/4.jpg",
            company: "LEVIS",
            price: 49,
            description: "Massive Jeans",
            inventory: 80
        },
        {
            image: "images/5.png",
            company: "LEVIS",
            price: 59,
            description: "High Rise Skinny Jeans",
            inventory: 120
        },
        {
            image: "images/6.jpg",
            company: "HOLLISTER",
            price: 29,
            description: "Wool Blend Cardigan",
            inventory: 75
        },
        {
            image: "images/7.jpg",
            company: "HOLLISTER",
            price: 19,
            description: "High Neck Tank",
            inventory: 65
        },
        {
            image: "images/8.jpg",
            company: "TOMMY HILFIGER",
            price: 180,
            description: "Silk Pinstripe Ruched Shirt",
            inventory: 50
        },
        {
            image: "images/9.jpg",
            company: "LEVIS",
            price: 70,
            description: "Denim Trucker Dress",
            inventory: 80
        },
        {
            image: "images/10.jpg",
            company: "TOMMY HILFIGER",
            price: 80,
            description: "Boyfriend Check Shirt",
            inventory: 100
        },
        {
            image: "images/11.jpg",
            company: "LEVIS",
            price: 54,
            description: "Nafisa Top",
            inventory: 95
        },
        {
            image: "images/12.jpg",
            company: "HOLLISTER",
            price: 20,
            description: "High Neck Tank",
            inventory: 70
        },
        {
            image: "images/13.jpg",
            company: "A&F",
            price: 34,
            description: "Lettuce-Trim Off-The-Shoulder Top",
            inventory: 80
        },
        {
            image: "images/14.jpg",
            company: "A&F",
            price: 49,
            description: "Long Sleeve Floral Off-The-Shoulder Top",
            inventory: 70
        },
        {
            image: "images/15.jpg",
            company: "GAP",
            price: 30,
            description: "Striped Lace-Up Crop Top",
            inventory: 50
        },
        {
            image: "images/16.jpg",
            company: "A&F",
            price: 45,
            description: "Lightweight Floral Aero Pullover Hoodie",
            inventory: 70
        },
        {
            image: "images/17.jpg",
            company: "HOLLISTER",
            price: 35,
            description: "Aero Full-Zip Hoodie",
            inventory: 50
        },
        {
            image: "images/18.jpg",
            company: "GAP",
            price: 49,
            description: "Seriously Stretchy Low-Rise Jegging",
            inventory: 100
        },
        {
            image: "images/19.jpg",
            company: "GAP",
            price: 55,
            description: "Seriously Stretchy Super High-Raise Crop Jegging",
            inventory: 150
        },
        {
            image: "images/20.jpg",
            company: "GAP",
            price: 29,
            description: "Seriously Stretchy High-Waisted Ankle Jegging",
            inventory: 170
        },
        {
            image: "images/21.jpg",
            company: "GAP",
            price: 69,
            description: "Short Sleeve Bubble Tee",
            inventory: 40
        },
        {
            image: "images/22.jpg",
            company: "GAP",
            price: 69,
            description: "OFF-THE-SHOULDER Smoked Peplum Floral Tee",
            inventory: 90
        },
        {
            image: "images/23.jpg",
            company: "HOLLISTER",
            price: 55,
            description: "High Neck Tank",
            inventory: 40
        },
        {
            image: "images/24.jpg",
            company: "A&F",
            price: 35,
            description: "Tie-Front Linen Jumpsuit",
            inventory: 30
        },
        {
            image: "images/25.jpg",
            company: "HOLLISTER",
            price: 25,
            description: "Aerie Real Soft Ribbed Baby Tee",
            inventory: 80
        },
        {
            image: "images/26.jpg",
            company: "TOMMY HILFIGER",
            price: 75,
            description: "Seersucker Short",
            inventory: 40
        },
        {
            image: "images/27.jpg",
            company: "TOMMY HILFIGER",
            price: 90,
            description: "Distressed Denim Short",
            inventory: 70
        },
        {
            image: "images/28.jpg",
            company: "TOMMY HILFIGER",
            price: 60,
            description: "Pleated Sleeveless Midi Dress",
            inventory: 50
        },
        {
            image: "images/29.jpg",
            company: "TOMMY HILFIGER",
            price: 75,
            description: "Floral Festival Layer Dress",
            inventory: 90
        },
        {
            image: "images/30.jpg",
            company: "TOMMY HILFIGER",
            price: 79,
            description: "Colorblock Trim Nightgown",
            inventory: 70
        },
        {
            image: "images/31.jpg",
            company: "TOMMY HILFIGER",
            price: 90,
            description: "Floral Blouse",
            inventory: 100
        },
        {
            image: "images/32.jpg",
            company: "RALPH LAUREN",
            price: 69,
            description: "Black and White Mini Frock",
            inventory: 70
        },
        {
            image: "images/33.jpg",
            company: "H&M",
            price: 20,
            description: "Full Sleeve Top",
            inventory: 80
        },
        {
            image: "images/34.jpg",
            company: "ZARA",
            price: 49,
            description: "Grey Full Sleeve T-Shirt",
            inventory: 70
        },
        {
            image: "images/35.jpg",
            company: "H&M",
            price: 78,
            description: "Black Fit and FLare Dress",
            inventory: 40
        },
        {
            image: "images/36.jpg",
            company: "H&M",
            price: 90,
            description: "Pink and Black Sheath Dress ",
            inventory: 80
        },
        {
            image: "images/37.jpg",
            company: "HOLLISTER",
            price: 36,
            description: "Navy Blue and White Fit and Flare Dress",
            inventory: 100
        },
        {
            image: "images/38.jpg",
            company: "RALPH LAUREN",
            price: 59,
            description: "Black Leather Jacket",
            inventory: 60
        },
        {
            image: "images/39.jpg",
            company: "H&M",
            price: 69,
            description: "Maroon Solid Top",
            inventory: 70
        },
        {
            image: "images/40.jpg",
            company: "H&M",
            price: 78,
            description: "White Dress",
            inventory: 90
        },
        {
            image: "images/41.jpg",
            company: "RALPH LAUREN",
            price: 99,
            description: "White Maxi Dress",
            inventory: 60
        },
        {
            image: "images/42.jpg",
            company: "H&M",
            price: 66,
            description: "White Half Shoulder Printed Dress",
            inventory: 107
        },
        {
            image: "images/43.jpg",
            company: "COACH",
            price: 179,
            description: "Cream Colored Lace Top",
            inventory: 30
        },
        {
            image: "images/44.jpg",
            company: "COACH",
            price: 59,
            description: "Cream Colored Skirt",
            inventory: 40
        },
        {
            image: "images/45.jpg",
            company: "GAP",
            price: 57,
            description: "Shaded Jean jacket",
            inventory: 125
        },
        {
            image: "images/46.jpg",
            company: "GAP",
            price: 128,
            description: "Floral White Top",
            inventory: 104
        },
        {
            image: "images/47.jpg",
            company: "ZARA",
            price: 159,
            description: "High Rise Waist Strechy Legging",
            inventory: 95
        },
        {
            image: "images/48.jpg",
            company: "COACH",
            price: 99,
            description: "Mid Rise Jeans",
            inventory: 150
        },
        {
            image: "images/49.jpg",
            company: "GAP",
            price: 145,
            description: "One Shouder Black and White Sheath Dress",
            inventory: 80
        },
        {
            image: "images/50.jpg",
            company: "BANANA REPUBLIC",
            price: 79,
            description: "Solid Red Fit and Flare Dress",
            inventory: 170
        },
        {
            image: "images/51.jpg",
            company: "H&M",
            price: 89,
            description: "Navy Blue and White Embroidery Sheath Dress",
            inventory: 80
        },
        {
            image: "images/52.jpg",
            company: "COACH",
            price: 62,
            description: "White Midi Skirt",
            inventory: 90
        },
        {
            image: "images/53.jpg",
            company: "BANANA REPUBLIC",
            price: 129,
            description: "White and Blue Floral Dress",
            inventory: 30
        },
        {
            image: "images/54.jpg",
            company: "COACH",
            price: 98,
            description: "Black Maxi Dress",
            inventory: 80
        },
        {
            image: "images/55.jpg",
            company: "HOLLISTER",
            price: 35,
            description: "Pink Jacket",
            inventory: 60
        },
        {
            image: "images/56.jpg",
            company: "RALPH LAUREN",
            price: 209,
            description: "Baby Pink Ruffle Dress",
            inventory: 120
        },
        {
            image: "images/57.jpg",
            company: "H&M",
            price: 130,
            description: "Navy Blue Formal Pant",
            inventory: 60
        },
        {
            image: "images/58.jpg",
            company: "BANANA REPUBLIC",
            price: 150,
            description: "Formal Mini Skirt",
            inventory: 90
        },
        {
            image: "images/59.jpg",
            company: "COACH",
            price: 109.50,
            description: "Grey Formal Pant",
            inventory: 100
        },
        {
            image: "images/60.jpg",
            company: "BANANA REPUBLIC",
            price: 110,
            description: "Jeans Type Dress",
            inventory: 70
        },
        {
            image: "images/61.jpg",
            company: "RALPH LAUREN",
            price: 299,
            description: "Pink Ruffle Mini Skirt",
            inventory: 200
        },
        {
            image: "images/62.jpg",
            company: "HOLLISTER",
            price: 35,
            description: "Mid Rise Jegging",
            inventory: 79
        },
        {
            image: "images/63.jpg",
            company: "COACH",
            price: 100,
            description: "Jogging Pant",
            inventory: 60
        },
        {
            image: "images/64.jpg",
            company: "RALPH LAUREN",
            price: 350,
            description: "Blue Checks Dress",
            inventory: 20
        },
        {
            image: "images/65.jpg",
            company: "A&F",
            price: 29,
            description: "White Top",
            inventory: 90
        },
        {
            image: "images/66.jpg",
            company: "GAP",
            price: 120,
            description: "Winter Pink Jacket",
            inventory: 70
        },
        {
            image: "images/67.jpg",
            company: "HOLLISTER",
            price: 65,
            description: "Dungree",
            inventory: 100
        },
        {
            image: "images/68.jpg",
            company: "ZARA",
            price: 98,
            description: "Cold Shoulder Dress",
            inventory: 107
        },
        {
            image: "images/69.jpg",
            company: "RALPH LAUREN",
            price: 160,
            description: "A-Line Dress",
            inventory: 105
        },
        {
            image: "images/70.jpg",
            company: "H&M",
            price: 89,
            description: "Pattern Jeans",
            inventory: 100
        },
        {
            image: "images/71.jpg",
            company: "RALPH LAUREN",
            price: 179,
            description: "Ruffled Frock",
            inventory: 90
        },
        {
            image: "images/72.jpg",
            company: "ZARA",
            price: 99,
            description: "Jean Pattern Shirt",
            inventory: 150
        },
        {
            image: "images/73.jpg",
            company: "BANANA REPUBLIC",
            price: 109,
            description: "Formal Mini Shirt",
            inventory: 150
        },
        {
            image: "images/74.jpg",
            company: "LEVIS",
            price: 59,
            description: "Blue Lace Top",
            inventory: 120
        },
        {
            image: "images/75.jpg",
            company: "BANANA REPUBLIC",
            price: 119,
            description: "Black and White Check Shirt",
            inventory: 140
        },
        {
            image: "images/76.jpg",
            company: "COACH",
            price: 99,
            description: "Grey T-Shirt",
            inventory: 102
        },
        {
            image: "images/77.jpg",
            company: "COACH",
            price: 149,
            description: "Pink Maxi Dress",
            inventory: 190
        },
        {
            image: "images/78.jpg",
            company: "H&M",
            price: 69,
            description: "Checked Shrug",
            inventory: 170
        },
        {
            image: "images/79.jpg",
            company: "H&M",
            price: 79,
            description: "High Rise Jeans",
            inventory: 140
        },
        {
            image: "images/80.jpg",
            company: "RALPH LAUREN",
            price: 129,
            description: "Ocean Blue Cold-Shoulder Lace Top",
            inventory: 120
        },
        {
            image: "images/81.jpg",
            company: "ZARA",
            price: 109,
            description: "Simple White Top",
            inventory: 90
        },
        {
            image: "images/82.jpg",
            company: "RALPH LAUREN",
            price: 500,
            description: "Hand Painted Floral Gown",
            inventory: 100
        },
        {
            image: "images/83.jpg",
            company: "BANANA REPUBLIC",
            price: 179,
            description: "Grey Formal Sheath Dress",
            inventory: 150
        },
        {
            image: "images/84.jpg",
            company: "H&M",
            price: 105,
            description: "Black Dotted Fit and Flare Dress",
            inventory: 105
        },
        {
            image: "images/85.jpeg",
            company: "COACH",
            price: 106,
            description: "Cold-Shoulder Full Sleeve Top",
            inventory: 120
        },
        {
            image: "images/86.jpg",
            company: "RALPH LAUREN",
            price: 189,
            description: "Navy Blue Floral Dress",
            inventory: 150
        },
        {
            image: "images/87.JPG",
            company: "H&M",
            price: 95,
            description: "Red Trouser",
            inventory: 80
        },
        {
            image: "images/88.JPG",
            company: "COACH",
            price: 139,
            description: "Regular Fit Peg Trousers",
            inventory: 100
        },
        {
            image: "images/89.jpg",
            company: "ZARA",
            price: 100,
            description: "Black Fit and Flare Dress",
            inventory: 120
        },
        {
            image: "images/90.jpg",
            company: "HOLLISTER",
            price: 39,
            description: "Black Solid Top",
            inventory: 190
        },
        {
            image: "images/91.jpg",
            company: "GAP",
            price: 75,
            description: "Black Skinny Fit Capris",
            inventory: 120
        },
        {
            image: "images/92.jpg",
            company: "ZARA",
            price: 88,
            description: "Regular Fit Formal Trouser",
            inventory: 90
        },
        {
            image: "images/93.jpg",
            company: "GAP",
            price: 89,
            description: "Aqua Colored Skirt",
            inventory: 80
        },
        {
            image: "images/94.jpg",
            company: "GAP",
            price: 79,
            description: "Fit Ankle Jeans",
            inventory: 500
        },
        {
            image: "images/95.jpg",
            company: "GAP",
            price: 89,
            description: "Mid Rise Regular Jeans",
            inventory: 140
        },
        {
            image: "images/96.jpg",
            company: "COACH",
            price: 67,
            description: "Dotted Ankle Jeans",
            inventory: 10
        },
        {
            image: "images/97.jpg",
            company: "HOLLISTER",
            price: 45,
            description: "Black Ankle Jeans",
            inventory: 70
        },
        {
            image: "images/98.jpg",
            company: "GAP",
            price: 89,
            description: "Black Regular Fit Jeans",
            inventory: 190
        },
        {
            image: "images/99.jpg",
            company: "GAP",
            price: 89,
            description: "Blue Ankle Jeans",
            inventory: 140
        },
        {
            image: "images/100.jpg",
            company: "HOLLISTER",
            price: 49.99,
            description: "Black High Moto Ankle Jeans",
            inventory: 160
        },
        {
            image: "images/101.jpg",
            company: "BANANA REPUBLIC",
            price: 169,
            description: "Blue Floral Sheath Dress",
            inventory: 130
        }
    ];
    sessionStorage.setItem('productRecords', JSON.stringify(products));
}

function addProduct() {

    //clickedArray = document.getElementById('hiddentValue').value; //Add by soni
    image = document.getElementById('Image').value;
    company = document.getElementById('company').value;
    price = document.getElementById('Price').value;
    description = document.getElementById('description').value;
    inventory = document.getElementById('inventory').value;

    if (validcompany(company) && validprice(price) && validdescription(description) && validinventory(inventory)) {

        var productobj = {
            image: image,
            company: company,
            price: price,
            description: description,
            inventory: inventory
        };

        if (selectIndex === -1) {
            product.push(productobj);
        } else {
            product.slice(selectedIndex, 1, productobj);
        }

        sessionStorage.productRecords = JSON.stringify(product);

        init();
        onclear();
    }
}

function tablecell(index, image, company, price, description, inventory) {

    var table = document.getElementById('tableRow');
    var row = table.insertRow();

    var productimagecell = row.insertCell(0);
    var productcompanycell = row.insertCell(1);
    var productpricecell = row.insertCell(2);
    var productdescriptioncell = row.insertCell(3);
    var productinventorycell = row.insertCell(4);
    var addtoCartcell = row.insertCell(5);
    var editcell = row.insertCell(6);
    var deletecell = row.insertCell(7);

    productimagecell.innerHTML = "<img src='http://localhost:52545/" + image + "' alt=' ' style='width:130px; height:130px;'>";
    //imgcell.innerHTML = '<img src="http://images.amazon.com/images/P/' + isbn + '.01.ZTZZZZZZ.jpg" alt="..." class="img-thumbnail">';
    productcompanycell.innerHTML = company;
    productpricecell.innerHTML = '$' + price;
    productdescriptioncell.innerHTML = description;
    productinventorycell.innerHTML = inventory;

    deletecell.innerHTML = '<input type="submit" id="deletebtn" class="btn btn-danger deletebtnclass" onclick="onDelete(' + index + ')" value="Delete">';
    editcell.innerHTML = '<input type="submit" id="editbtn" class="btn editbtnclass" data-toggle="modal" data-target="#EditModal" onclick="onEdit(' + index + ')" value="Edit">';
    addtoCartcell.innerHTML = '<input type="submit" id="addtoCartbtn" class="btn btn-primary addtoCartclass" data-toggle="modal" data-target="#AddtoCartModal" onclick="onAddToCart(' + index + ')" value="Add to Cart">';
}

function onDelete(index) {
    var result = confirm("Are you sure you want to delete these product Info?");
    if (result) {
        product.splice(index, 1);
        sessionStorage.productRecords = JSON.stringify(product);
        init();
    }
}

function onEdit(index) {
    var currentProduct = product[index];
    clickedArray = index;
    document.getElementById('hiddentValue').value = clickedArray;
    document.getElementById('editImage').value = currentProduct.Image;
    document.getElementById('editCompany').value = currentProduct.company;
    document.getElementById('editPrice').value = currentProduct.price;
    document.getElementById('editDescription').value = currentProduct.description;
    document.getElementById('editInventory').value = currentProduct.inventory;
}


function onclear() {
    document.getElementById('image').value = "";
    document.getElementById('company').value = "";
    document.getElementById('price').value = "";
    document.getElementById('description').value = "";
    document.getElementById('inventory').value = "";
}

function onSaveEdit() {

    clickedArray = document.getElementById('hiddentValue').value;
    //if (validname(name) && ValidateEmail(email) && telephoneCheck(phone) && validowner(owner) && validstreet(street) && validcity(city) && validstate(state) && validcountry(country) && validduns(duns) && validtype(type)) {
    //Image = document.getElementById('editImage').value;
    company = document.getElementById('editCompany').value;
    price = document.getElementById('editPrice').value;
    description = document.getElementById('editDescription').value;
    inventory = document.getElementById('editInventory').value;

    //product[clickedArray].image = Image;
    product[clickedArray].company = company;
    product[clickedArray].price = price;
    product[clickedArray].description = description;
    product[clickedArray].inventory = inventory;


    sessionStorage.productRecords = JSON.stringify(product);
    init();
}

function onAddToCart(index) {
    productList = [];
    var quantity;

    console.log(index);

    inventory = product[index].inventory - 1;

    let productCartobj = {
        index: index,
        inventory: 1,
        image: product[index].image,
        company: product[index].company,
        price: product[index].price,
        description: product[index].description,
  

    };

    let row = product[index];

    if (row.inventory < 1) {
        $('#addtoCartbtn' + index).style.visibility = 'hidden';
    }

    let oldcart = JSON.parse(sessionStorage.getItem('cartList')) || [];
    oldcart.push(productCartobj);
    sessionStorage.setItem('cartList', JSON.stringify(oldcart));
    sessionStorage.productRecords = JSON.stringify(product);
    product[index].inventory = inventory;
    sessionStorage.productRecords = JSON.stringify(product);

    init();
    updateCartIcon(1); 
}

function updateCartIcon(inv) {

    var cart = document.getElementById('cart_items_count');
    var value = parseInt(cart.innerText);
    cart.innerText = value + inv;

}

function validcompany(company) {
    if (company != "") {
        return true;
    } else {
        alert('Enter a company name');
        return false;
    }
}
function validprice(price) {
    if (price != "") {
        return true;
    } else {
        alert('Enter a price');
        return false;
    }
}
function validdescription(description) {
    if (description != "") {
        return true;
    } else {
        alert('Enter a description');
        return false;
    }
}
function validinventory(inventory) {
    if (inventory != "") {
        return true;
    } else {
        alert('Enter a inventory');
        return false;
    }
}

function onUserRole() {

    userRole = JSON.parse(sessionStorage.getItem('role'));
    user = JSON.parse(sessionStorage.getItem('userdetails'));

    if (userRole == null) {
        document.getElementById("addprod").style.visibility = 'hidden';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
        }
    }

    else if (userRole == 'Super Admin') {
        document.getElementById("addprod").style.visibility = 'visible';

        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        var addcartbtnhd = document.getElementsByClassName("addtoCartclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'visible';
            editbtnhd[i].style.visibility = 'visible';
            addcartbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (userRole == 'Supplier-Admin') {
        document.getElementById("addprod").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        var addcartbtnhd = document.getElementsByClassName("addtoCartclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
            addcartbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (userRole == 'Supplier-User') {
        document.getElementById("addprod").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        var addcartbtnhd = document.getElementsByClassName("addtoCartclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
            addcartbtnhd[i].style.visibility = 'hidden';
        }
    }
    else if (userRole == 'Buyer-Admin') {
        document.getElementById("addprod").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        var addcartbtnhd = document.getElementsByClassName("addtoCartclass");

        for (let i in deletebtnhd) {

            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'visible';
            addcartbtnhd[i].style.visibility = 'visible';
        }
    }
    else if (userRole == 'Buyer') {
        document.getElementById("addprod").style.visibility = 'hidden';
        var editbtnhd = document.getElementsByClassName("editbtnclass");
        var deletebtnhd = document.getElementsByClassName("deletebtnclass");
        var addcartbtnhd = document.getElementsByClassName("addtoCartclass");

        for (let i in deletebtnhd) {
            deletebtnhd[i].style.visibility = 'hidden';
            editbtnhd[i].style.visibility = 'hidden';
            addcartbtnhd[i].style.visibility = 'visible';
        }
    }
}