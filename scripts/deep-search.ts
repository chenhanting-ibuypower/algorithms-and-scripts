const refund = {
  id: "6EA87007XA0364336",
  amount: {
    currency_code: "USD",
    value: "317.09",
  },
  seller_payable_breakdown: {
    gross_amount: {
      currency_code: "USD",
      value: "317.09",
    },
    paypal_fee: {
      currency_code: "USD",
      value: "0.00",
    },
    net_amount: {
      currency_code: "USD",
      value: "317.09",
    },
    total_refunded_amount: {
      currency_code: "USD",
      value: "317.09",
    },
  },
  status: "COMPLETED",
  create_time: "2023-11-17T11:25:10-08:00",
  update_time: "2023-11-17T11:25:10-08:00",
  payer: {
    email_address: "accounts.receivable@ibuypower.com",
    merchant_id: "7YHDZ62G9BBAC",
  },
  links: [
    {
      href: "https://api.paypal.com/v2/payments/refunds/6EA87007XA0364336",
      rel: "self",
      method: "GET",
    },
    {
      href: "https://api.paypal.com/v2/payments/captures/3MJ04425GC2531346",
      rel: "up",
      method: "GET",
    },
  ],
};

export function findKeyInNestedObj(
  obj: any,
  keyToFind: string
): string | undefined {
  // Check if the current value is an object or array, if not, return false
  if (typeof obj !== "object" || obj === null) {
    return;
  }

  // Check if the key exists in the current object
  if (obj.hasOwnProperty(keyToFind)) {
    return obj[keyToFind]; // or return true if you just want to know it exists
  }

  // Iterate over each property if it's an object, or each element if it's an array
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      // @ts-ignore
      let result = findKeyInNestedObj(obj[key], keyToFind);
      if (result) {
        return result; // or return true
      }
    }
  }
}

export function findValueByKeys(obj: any, keys: string[]): string | undefined {
    if (typeof obj !== "object" || obj === null) {
      return;
    }
  
    if (keys.length === 0) {
      return;
    }
  
    const [firstKey, ...remainingKeys] = keys;
  
    if (obj.hasOwnProperty(firstKey)) {
      if (remainingKeys.length === 0) {
        return obj[firstKey];
      } else {
        return findValueByKeys(obj[firstKey], remainingKeys);
      }
    }
  
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        let result = findValueByKeys(obj[key], keys);
        if (result) {
          return result;
        }
      }
    }
  }
const a = findValueByKeys(refund, ["payer", "merchant_id"]);
console.log(a)
const b = findValueByKeys(refund, ["links", "href"]);
console.log(b)
const c = findKeyInNestedObj(refund, "merchant_id");
console.log(c)



