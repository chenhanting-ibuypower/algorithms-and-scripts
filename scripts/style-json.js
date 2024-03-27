function styleJSON(obj) {
  if (typeof obj !== "object" || obj === null) return `<span>${obj}</span>`;

  let html = '<div style="margin-left: 20px;">';
  const entries = Array.isArray(obj) ? obj : Object.entries(obj);

  entries.forEach((entry, index) => {
    if (Array.isArray(obj)) {
      html += `<div>${styleJSON(entry)}</div>`;
    } else {
      const [key, value] = entry;
      html += `<div><span style="color: #00f;">"${key}"</span>: ${styleJSON(
        value
      )}</div>`;
    }
  });

  html += "</div>";
  return html;
}

const requestData = {
  orderId: 12345,
  orderStatus: "Processed",
  customer: {
    id: 789,
    name: "John Doe",
    contacts: {
      email: "john.doe@example.com",
      phone: "123-456-7890",
    },
    preferences: {
      newsletter: true,
      promotions: false,
    },
  },
  items: [
    {
      productId: 111,
      name: "Widget",
      quantity: 2,
      price: 19.99,
    },
    {
      productId: 222,
      name: "Gadget",
      quantity: 1,
      price: 29.99,
      options: {
        color: "red",
        warranty: "1 year",
      },
    },
  ],
  shipment: {
    carrier: "UPS",
    trackingNumber: "1Z12345E0205271688",
    status: "Shipped",
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
    },
  },
  payment: {
    method: "Credit Card",
    status: "Paid",
    details: {
      cardType: "Visa",
      cardLastFour: "1234",
      expirationDate: "12/23",
    },
  },
  timestamps: {
    orderedAt: "2023-09-11T14:09:22Z",
    processedAt: "2023-09-11T15:00:00Z",
    shippedAt: "2023-09-11T18:30:00Z",
  },
};

const mailData = (requestData) =>
  `<div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; max-width: 600px; margin: 20px auto; border-radius: 5px;">
      <h2 style="border-bottom: 2px solid #ddd; padding-bottom: 10px; margin-bottom: 20px;">Bigcommerce Product Update</h2>
      <div style="background-color: #f7f7f7; padding: 20px; border-radius: 5px;">
        ${styleJSON(requestData)}
      </div>
    </div>
  `;

console.log(mailData(requestData));
