
async function fetchWomensShoes() {
  try {
    const response = await fetch('https://dummyjson.com/products/category/womens-shoes');
    if (!response.ok) {
      throw new Error("API Fetching Failure");
    }
    const data = await response.json();
    display(data.products);
  }
  catch (error) {
    console.error(error);
  }

}
function display(products) {
  const container = document.getElementById("womens-container");
  products.forEach(singleProduct => {
    const column = document.createElement("div");
    column.className = "col-md-4 col-lg-3"

    // create womens shoes products inside HTML tags
    column.innerHTML = `
      <div class= "card-product-card   card border-dark-subtle  shadow-lg h-100 p-3 ">

      <img src="${singleProduct.thumbnail}" class="card-img-top p-4" />
      <div class="card-body d-flex flex-column">
      <h6 class="card-title text-truncate m-2">${singleProduct.title}</h6> 
      <div class="d-flex align-items-center justify-content-between">
            <h6 class="card-text fw-bold text-success ">$${singleProduct.price}</h6>
             <p class="fw-bold">⭐${singleProduct.rating}</p>
      </div>
            <h6 class="card-title text-truncate mb-3">${singleProduct.description}</h6>
            <button class="btn btn-primary mt-auto">Add to Cart</button>
    </div>
    </div>
        
    `;
    container.appendChild(column);
  })
}
fetchWomensShoes();









