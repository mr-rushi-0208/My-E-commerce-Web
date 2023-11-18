// get products data
let productsListUrl = '/products.json';

async function loadProducts(productsListUrl) {

    fetch(productsListUrl)
        .then(response => response.json())
        .then(data => {
            const products = data.Products;


            let cards = '';
            products.forEach(product => {
                let isNewDiv = '';
                if (product.isNew === 'TRUE') {
                    isNewDiv = `<div class="new-product">
                                    <span>New</span>
                                </div>`;
                }

                let stars = '';
                const ratings = Math.floor(+product.ratings);
                for (let i = 1; i <= 5; i++) {
                    if (i <= ratings) {
                        stars = stars + '<i class="fa fa-star checked"></i>';
                    } else {
                        stars = stars + '<i class="fa fa-star-o"></i>';
                    }
                }

                cards = cards +
                    `
                    
                  <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div class="card" id="${product.id}">
                  <img src="images/${product.imageName}.png"  alt="Product 1">
                    <div class="card-body d-flex flex-column align-items-center">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text mb-0"><strong>${product.priceAfterDiscount}</strong> <del>${product.price}</del><span class="offer">(60%Off)</span></p>
                    <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                    <ul>
                    <div class="product-rating">
                    ${stars}
               
                    <span>${product.ratings}</span><p></p>
                    </ul>
                  </div>
                </div>
                    <div class="card-icons">
                      <a href="#" class="cart"><i class="fa fa-shopping-cart"></i></a>
                      <a href="#" class="view"><i class="fa fa-eye"></i></a>
                      <a href="#" class="wishlist"><i class="fa fa-heart"></i></a>
                    </div>
                  </div>
                </div>
                    `;
            });

            document.querySelector('#productsListArea').innerHTML = cards;
        });
}

loadProducts(productsListUrl);