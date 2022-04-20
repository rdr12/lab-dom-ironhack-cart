// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  //console.log(product)

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input").value;
 
  const priceEs = Number(price.innerHTML);
  const subtotalPrice = priceEs * quantity;
  product.querySelector(".subtotal span").innerHTML = subtotalPrice;

}

function calculateAll() {
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
 
  
  // ITERATION 2
  const totalProducts = document.querySelectorAll('product');
  let totalPrice = 0;
  totalProducts.forEach(('product'));
    totalPrice += updateSubtotal(product);
  
  

  // ITERATION 3
  const total = document.querySelectorAll("#total-value span");
  totalPrice.innerText = total;

 }



// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
