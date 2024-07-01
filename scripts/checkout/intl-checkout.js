const PaymentStrategy = require("./default-strategy");

class IntlCheckoutStrategy extends PaymentStrategy {
  async checkCartItems() {
    console.log("Checking cart items for International Checkout...");
    return true;
  }

  async pay() {
    console.log("Processing International Checkout payment...");

    // Mocking an API call with setTimeout to check order status on the remote side
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        // Mock response
        const orderStatus = ["fulfillment", "pending", "cancel"][
          Math.floor(Math.random() * 3)
        ]; // Randomly simulate order status
        const isFulfillment = orderStatus === "fulfillment";
        resolve({
          success: isFulfillment,
          transactionId: isFulfillment ? "intlcheckout123" : null,
          status: orderStatus,
        });
      }, 1000);
    });

    if (!response.success) {
      console.log(
        `Intl: Payment status is ${response.status}, cannot proceed with order creation.`
      );
    }

    return response;
  }

  async createOrder(callback) {
    console.log("Intl: Creating order for International Checkout...");
    const order = { orderId: 789, paymentMethod: "intlcheckout" };
    if (callback) {
      callback(order.orderId);
    }
    return order;
  }

  async actionsBeforeOrder() {
    console.log(
      "Intl: Performing actions before International Checkout order..."
    );
  }
}

module.exports = IntlCheckoutStrategy;
