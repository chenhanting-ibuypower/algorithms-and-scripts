const PaymentStrategy = require("./default-strategy");

class PaypalStrategy extends PaymentStrategy {
  async checkCartItems() {
    console.log("Checking cart items for PayPal...");
    return true;
  }

  async pay() {
    console.log("Processing PayPal payment...");

    // Mocking an API call with setTimeout to check customer vault
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        // Mock response
        const hasSufficientFunds = Math.random() > 0.5; // Randomly simulate funds availability
        resolve({
          success: hasSufficientFunds,
          transactionId: hasSufficientFunds ? "paypal123" : null,
          status: hasSufficientFunds ? "approved" : "pending",
        });
      }, 1000);
    });

    if (!response.success) {
      console.log("Payment status is pending due to insufficient funds.");
    }

    return response;
  }

  async createOrder(callback) {
    console.log("Creating order for PayPal...");
    const order = { orderId: 123, paymentMethod: "paypal" };
    if (callback) {
      callback(order.orderId);
    }
    return order;
  }

  async actionsBeforeOrder() {
    console.log("Performing actions before PayPal order...");
  }
}

module.exports = PaypalStrategy;
