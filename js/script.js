function calculateFinalPrice() {
  // Get the input values from the user
  const originalPrice = parseFloat(document.getElementById("original-price").value);
  const discountRate = parseFloat(document.getElementById("discount-rate").value) / 100;

  // Calculate the final price
  const finalPrice = (1 - discountRate) * originalPrice;

  // Round the final price to two decimal places
  const roundedFinalPrice = finalPrice.toFixed(2);

  // Display the final price to the user
  document.getElementById("result").innerHTML = "Final Price: $" + roundedFinalPrice;
}
