// import React from 'react'

// const Paiment = () => {
//   return (
//     <div>
//     // Payment form
// const paymentForm = document.getElementById('payment-form');

// // Event listener for form submission
// paymentForm.addEventListener('submit', processPayment);

// // Payment processing function
// async function processPayment(event) {
//   Event.preventDefault() {
//   // Prevent form submission

//   // Get form input values
//   const cardNumber = document.getElementById('card-number').value;
//   const cardName = document.getElementById('card-name').value;
//   const cardExpiry = document.getElementById('card-expiry').value;
//   const cardCVV = document.getElementById('card-cvv').value;

//   // Validate form input (You can add your validation logic here)
//   if (!validateForm(cardNumber, cardName, cardExpiry, cardCVV)) {
//     return;
//   }

//   // Disable the submit button to prevent multiple clicks
//   const submitButton = document.querySelector('button[type="submit"]');
//   submitButton.disabled = true;
//   submitButton.textContent = 'Processing...';

//   // Simulate payment processing using a fictional payment gateway
//   const paymentData = {
//     cardNumber,
//     cardName,
//     cardExpiry,
//     cardCVV,
//     amount: 100.0 // Amount to be charged in dollars
//   };

//   try {
//     // Send payment data to the server for processing
//     const response = await fetch('/process_payment', {
//       method:'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(paymentData)
//     });

//     // Handle the response from the server
//     if (response.ok) {
//       const data = await response.json();
//       if (data.success) {
//         // Payment successful
//         alert('Payment successful! Thank you for your purchase.');
//         // Redirect to a success page
//         window.location.href = '/success';
//       } else {
//         // Payment failed
//         alert('Payment failed. Please try again or contact support.');
//         submitButton.disabled = false;
//         submitButton.textContent = 'Pay Now';
//       }
//     } else {
//       throw new Error('Network response was not ok.');
//     }
//   } catch (error) {
//     // Handle any errors during the payment process
//     console.error('Error:', error);
//     alert('An error occurred. Please try again later or contact support.');
//     submitButton.disabled = false;
//     submitButton.textContent = 'Pay Now';
//   }
// }

// // Form validation function
// function validateForm(cardNumber, cardName, cardExpiry, cardCVV) {
//   // Add your validation logic here
//   if (cardNumber.trim() === '' || cardName.trim() === '' || cardExpiry.trim() === '' || cardCVV.trim() === '') {
//     alert('Please fill in all the fields.');
//     return false;
//   }
//   return true;
// }
// }
//     </div>
//   )
// }

// export default Paiment