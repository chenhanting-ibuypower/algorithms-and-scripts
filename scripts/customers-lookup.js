const customers = require("./customers.json");
const fs = require('fs');

const customersLookUp = customers.reduce((acc, cur) => {
  for (let key in cur) {
    acc[key] = cur[key];
  }
  return acc;
}, {});

try {
  fs.writeFileSync(
    "customers-lookup.json",
    JSON.stringify(customersLookUp, null, 2),
    "utf-8"
  );
  console.log("File has been written successfully.");
} catch (error) {
  console.error("An error occurred while writing to the file:", error);
}
