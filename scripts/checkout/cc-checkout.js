const PaymentStrategy = require("./default-strategy");

class CreditCardStrategy extends PaymentStrategy {
  async createOrder(callback) {
    console.log("Creating order for Credit Card...");
    const order = { orderId: 456, paymentMethod: "creditcard" };
    if (callback) {
      callback(order.orderId);
    }
    return order;
  }

  async pay() {
    console.log("Processing Credit Card payment...");
    // Simulating an API call to process the payment
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        // Mock response
        resolve({ success: true, transactionId: "creditcard456" });
      }, 1000);
    });
    return response;
  }

  async actionsBeforeOrder() {
    console.log("Performing actions before Credit Card order...");
  }
}

module.exports = CreditCardStrategy;
