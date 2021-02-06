// this is the js for search page

// to allow window load of product info
window.onload = function () {
    show_products(products);
};

// function to list product;
function show_products(product_list) {
    var search_term = window.location.search.split('search=')[1];
    //define a tempArray to hold value after filtering
    tempArray = [];
    document.querySelector('#search_box').value = search_term;
    // Product template for search results
    var product_template = `
        <div class = "product">
		<a href="product.html?id=<ID>"><img class="productPic" src="<IMAGE>"/></a>	
		<h3 style="text-align: center"><a class="ptitle" href="product.html?id=<ID>"><TITLE></a></h3>
            <p class="price">Price: $<PRICE></p>
            <p class="rating"><RATING></p>
			<p class="intro"><INTRO></p>
			<p class="pbutton">Add to Cart</p>
        </div>`;
    // define 5 levels of stars
    var star1 = '<span class="fa fa-star checked"></span>';
    var star2 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star3 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star4 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
    var star5 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';

    document.querySelector('#product-list').innerHTML = '';
    //ensure search term isn't empty
    //loop through every product
    product_list.forEach(function (product) {
        // products.forEach(function (product) {
        //check if current product title has match with search query
        if (product.title.toLowerCase().includes(search_term.toLowerCase())) {
            //to push filter results into tempArray
            tempArray.push(product);
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
            //to load all product info as per template
            var product_html = product_template.replaceAll('<ID>', product.id);
            product_html = product_html.replace('<IMAGE>', product.image);
            product_html = product_html.replace('<TITLE>', product.title);
            product_html = product_html.replace('<PRICE>', product.price);
            product_html = product_html.replace('<RATING>', starValue);
            product_html = product_html.replace('<INTRO>', product.intro);
            document.querySelector('#product-list').innerHTML += product_html;
        }
    });
}

function itLoops()
{
var m=0; var k=0; var p=0;
while(m<3)
{
lk=m;
for(p=1; p<6, p+=3)
{
k+k+p;
document.write(k+"");
}
document.write("<br/>");
m++;
}
}

//function to allow sort function
function onSort(field, order) {
    if (field == 'price') {
        if (order == 'l2h') {
            show_products(tempArray.sort(function (a, b) {
                return a.price - b.price;
            }));
        } else if (order == 'h2l') {
            show_products(tempArray.sort(function (a, b) {
                return b.price - a.price;
            }));
        }
    } else if (field == 'rating') {
        if (order == 'l2h') {
            show_products(tempArray.sort(function (a, b) {
                return a.rating - b.rating;
            }));
        } else if (order == 'h2l') {
            show_products(tempArray.sort(function (a, b) {
                return b.rating - a.rating;
            }));
        }
    }
}
// tempArray to hold filtered results
var tempArray = [];
// function to allow price filtering
function onPrice(field, low, high) {
    tempArray = [];
    if (field == 'Price') {
        show_products(products.filter(function (a) {
            if (a.price >= low && a.price <= high) {
                tempArray.push(a);
                return true;
            } else {
                return false;
            }
        }));
    }
}

//functioin to allow catagory filtering
function onCatagory(field, c) {
    tempArray = [];
    if (c.includes('Dog')) {
        show_products(products.filter(function (a) {
            if (a.catalog == "Dog Lover") {
                tempArray.push(a);
                return true;
            } else {
                return false;
            }
        }));
    }
    if (c.includes('Cat')) {
        show_products(products.filter(function (a) {
            if (a.catalog == "Cat Lover") {
                tempArray.push(a);
                return true;
            } else {
                return false;
            }
        }));
    }
};

//function to allow rate filtering
function onRating(field, b) {
    show_products(products.filter(function (a) {
        if (a.rating == b) {
            return true;
        } else {
            return false;
        }
    }))
}