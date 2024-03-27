/**
 * Recursively searches an object for a value nested under a set of keys.
 * @param obj - The object to search.
 * @param keys - An array of keys to traverse in order to find the desired value.
 * @returns The value found at the end of the key path, or undefined if not found.
 */
function findValueByKeys(obj: any, keys: string[]): string | undefined {
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

// @ts-ignore
/**
 * Recursively searches for a key in a nested object and returns its value.
 * @param obj - The object to search in.
 * @param keyToFind - The key to search for.
 * @returns The value of the key if found, otherwise undefined.
 */
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

console.log(
  findValueByKeys({ a: { b: { c: "d" } }, x: { y: [{ z: "w" }] } }, [
    "x",
    "y",
    "z",
  ])
);
console.log(
  findValueByKeys({ a: { b: { c: "d" } }, x: { y: { z: "w" } } }, [
    "p",
    "q",
    "r",
  ])
);
console.log(
  findKeyInNestedObj({ a: { b: { c: "d" } }, x: { y: [{ z: "www" }] } }, "z")
);
