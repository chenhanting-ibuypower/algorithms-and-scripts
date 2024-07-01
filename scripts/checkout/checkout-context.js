const CreditCardStrategy = require("./cc-checkout");
const PaypalStrategy = require("./paypal-checkout");
const IntlCheckoutStrategy = require("./intl-checkout");

class CheckoutContext {
  constructor(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  async call(onOrderCreated) {
    if (
      this.paymentStrategy.checkCartItems &&
      !(await this.paymentStrategy.checkCartItems())
    ) {
      console.error("Cart validation failed.");
      return;
    }

    const paymentResponse = await this.paymentStrategy.pay();
    if (!paymentResponse.success) {
      console.error("Payment failed or is pending.");
      return;
    }

    const order = await this.paymentStrategy.createOrder(onOrderCreated);
    await this.paymentStrategy.actionsBeforeOrder();
    console.log(`Order created successfully with ID: ${order.orderId}`);
    await this.paymentStrategy.actionsAfterOrder(order.orderId);
  }
}

const onOrderCreated = (orderId) => {
  console.log(`Order ID: ${orderId} - showing modal or other actions.`);
};

const paypalStrategy = new PaypalStrategy();
const creditCardStrategy = new CreditCardStrategy();
const intlCheckoutStrategy = new IntlCheckoutStrategy();

const paypalCheckout = new CheckoutContext(paypalStrategy);
paypalCheckout.call(onOrderCreated);

const creditCardCheckout = new CheckoutContext(creditCardStrategy);
creditCardCheckout.call(onOrderCreated);

const intlCheckout = new CheckoutContext(intlCheckoutStrategy);
intlCheckout.call(onOrderCreated);
