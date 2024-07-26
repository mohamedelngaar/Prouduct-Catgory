document
  .getElementById("checkout-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var creditCard = document.getElementById("credit-card").value;
    var expiryDate = document.getElementById("expiry-date").value;
    var cvv = document.getElementById("cvv").value;

    // Do something with the form values (e.g., send them to a server for processing)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Address: " + address);
    console.log("Credit Card Number: " + creditCard);
    console.log("Expiry Date: " + expiryDate);
    console.log("CVV: " + cvv);
  });
