// this is the js for dog products

// to allow window load of product info
window.onload = function () {
    show_products(products);
};

// function to list product;
function show_products(product_list) {
    //define a tempArray to hold information after filtering
    tempArray = [];
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

    //defind 5 different stars values to allow stars showing on product page
    var star1 = '<span class="fa fa-star checked"></span>';
    var star2 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star3 = '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>' +
        '<span class="fa fa-star checked"></span>';
    var star4 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';
    var star5 = '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>' + '<span class="fa fa-star checked"></span>';

    document.querySelector('#product-list').innerHTML = '';
    //loop through every product
    product_list.forEach(function (product) {
        // products.forEach(function (product) {
        //check if current product title has match with search query
        if (product.title.toLowerCase().includes('dog')) {
            //use product_template and append product to search results
            // tempArray to show the filtering results
            tempArray.push(product);
            //define a starValue and use if else to decide what is the starvalue to show
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
            // to load image, title, price, rating and intro when id is equal to the parameter passing in;
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