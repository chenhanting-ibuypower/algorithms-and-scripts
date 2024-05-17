// Function to generate a random SKU
function generateRandomSKU() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let sku = 'SKU-';
    for (let i = 0; i < 8; i++) {
        sku += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return sku;
}

// Predefined product options
const colors = ['red', 'black', 'white'];
const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl'];

// Function to create a mapping table with SKUs and options
function createVariantMappingTable() {
    const variantMaps = new Map();
    
    // Example predefined options
    const options = [
        { color: 'red', sizes: ['x', 'xl', 'm'] },
        { color: 'black', sizes: sizes },
        { color: 'white', sizes: sizes },
    ];

    options.forEach(option => {
        option.sizes.forEach(size => {
            const sku = generateRandomSKU();
            variantMaps.set(sku, new Set([option.color, size]));
        });
    });

    return variantMaps;
}

// Create the variant mapping table
const variantMaps = createVariantMappingTable();
console.log(variantMaps)

// Function to get available options for a given SKU
function getAvailableOptions(sku) {
    if (variantMaps.has(sku)) {
        return Array.from(variantMaps.get(sku));
    } else {
        return []; // Return an empty array if the SKU does not exist
    }
}
const generatedVariantMap = new Map([
    ['SKU-1EG9XUI3', new Set(['red', 'x'])],
    ['SKU-RKKGQO57', new Set(['red', 'xl'])],
    ['SKU-0MOIVR6I', new Set(['red', 'm'])],
    ['SKU-CJUO52KF', new Set(['black', 'xs'])],
    ['SKU-RRFZ7EFR', new Set(['black', 's'])],
    ['SKU-JT2ESIGZ', new Set(['black', 'm'])],
    ['SKU-RN52O74Q', new Set(['black', 'l'])],
    ['SKU-8OU0NVQL', new Set(['black', 'xl'])],
    ['SKU-NO2C3ZZC', new Set(['black', 'xxl'])],
    ['SKU-1XSQKUP4', new Set(['white', 'xs'])],
    ['SKU-9HQ6P2RO', new Set(['white', 's'])],
    ['SKU-39T72FM2', new Set(['white', 'm'])],
    ['SKU-E02UUZYB', new Set(['white', 'l'])],
    ['SKU-P9IYEIFK', new Set(['white', 'xl'])],
    ['SKU-I7EEEB8I', new Set(['white', 'xxl'])]
]);

function getOptionsForDimension(value) {
    const options = new Set();
    
    for (const set of generatedVariantMap.values()) {
        if (set.has(value)) {
            for (const option of set) {
                if (option !== value) {
                    options.add(option);
                }
            }
        }
    }

    return Array.from(options);
}

const color = 'red';
const availableSizes = getOptionsForDimension(color);
console.log(`Available sizes for color ${color}:`, availableSizes); // Output: Available sizes for color red: [ 'x', 'xl', 'm' ]

// Example usage
const exampleSKU = Array.from(variantMaps.keys())[0]; // Get a random SKU from the map
const availableOptions = getAvailableOptions(exampleSKU);

console.log(`Available options for ${exampleSKU}:`, availableOptions);
