// this is the js for single product page

// to allow window load of product info
window.onload = function () {
    var term = window.location.search.split('id=')[1];
    document.getElementById("sub").setAttribute("disabled", "disabled");
    document.getElementById("plus").addEventListener("click", plus);
    document.getElementById("sub").addEventListener("click", subs);
    // to loop through each product 
    if (term !== '') {
        products.forEach(function (product) {
            //define 5 levels of stars
            var star1 = '<span class="fa fa-star checked"></span>';
            var star2 = '<span class="fa fa-star checked"></span>' +
                '<span class="fa fa-star checked"></span>';
            var star3 = '<span class="fa fa-star checked"></span>' +
                '<span class="fa fa-star checked"></span>' +
                '<span class="fa fa-star checked"></span>';
            var star4 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
            var star5 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
            //define starValue to determin what level of star to be filtered     
            var starValue;
            if (product.rating == 1) {
                starValue = star1;
            } else if (product.rating == 2) {
                starValue = star2;
            } else if (product.rating == 3) {
                starValue = star3;
            } else if (product.rating == 4) {
                starValue = star4;
            } else if (product.rating == 5) {
                starValue = star5;
            }
            //load product info from productlist
            if (product.id == term) {
                document.querySelector('#image').src = product.image;
                document.querySelector('#title').innerHTML = product.title;
                document.querySelector('#rating').innerHTML = starValue;
                document.querySelector('#description').innerHTML = product.description;
                document.querySelector('#price').innerHTML = product.price;


            }
        });
    }
}

//initiallize totalPrice and count of item;
var totalPrice = 0;
var valueCount = 0;
// price calculation function
function priceTotal() {
    var unitPrice = parseFloat(document.querySelector('#price').innerHTML);
    var count = parseFloat(document.getElementsByClassName("inputNum")[0].value);
    totalPrice = count * unitPrice;
    document.getElementById("tPrice").value = totalPrice.toFixed(2);
}

// taking value to increment decrement botton
// plus button
function plus() {
    // input value increment by 1
    valueCount++;
    // setting increment input value
    document.getElementById("textNum").value = valueCount;
    if (valueCount >= 1) {
        document.getElementById("sub").removeAttribute("disabled")
        document.getElementById("plus").classList.remove("disabled")
    }
    //calling price function
    priceTotal();
}

// minus button
function subs() {
    // input value increment by 1
    valueCount--;
    // setting increment input value
    document.getElementById("textNum").value = valueCount;
    if (valueCount == 0) {
        document.getElementById("sub").setAttribute("disabled", "disabled")
    }
    //calling price function
    priceTotal();
}