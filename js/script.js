// this is the js for search page

// to allow window load of product info
window.onload = function () {
    show_products(products);
};

// function to list product;
function show_products(product_list) {
    //to search featured product by keywords
    var featuredProduct = 'dog';
    // Product template for search results
    var product_template = `
        <div class = "product">
		<a href="product.html?id=<ID>"><img class="productPic" src="<IMAGE>"/></a>	
		<h3 style="text-align: center"><a class="ptitle" href="product.html?id=<ID>"><TITLE></a></h3>
            <p class="price">$<PRICE></p>
        </div>`;
    //define 5 levels of stars
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
        if (product.title.toLowerCase().includes(featuredProduct.toLowerCase())) {
            //use product_template and append product to search results
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
            // to load product info
            var product_html = product_template.replaceAll('<ID>', product.id);
            product_html = product_html.replace('<IMAGE>', product.image);
            product_html = product_html.replace('<TITLE>', product.title);
            product_html = product_html.replace('<PRICE>', product.price);
            document.querySelector('#product-list').innerHTML += product_html;
        }
    });
}