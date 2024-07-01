class PaymentStrategy {
  async checkCartItems() {
    console.log("Default checkCartItems: Skipping check.");
    return true;
  }

  async createOrder(callback) {
    throw new Error("createOrder method must be overridden!");
  }

  async pay() {
    throw new Error("pay method must be overridden!");
  }

  async actionsBeforeOrder() {
    console.log("Default actionsBeforeOrder: No actions needed.");
  }

  async actionsAfterOrder(orderId) {
    console.log("Default actionsAfterOrder: Some actions needed.");
  }
}

module.exports = PaymentStrategy;
