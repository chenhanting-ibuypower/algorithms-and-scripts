function createNestedObject(keysString, value) {
  const keys = keysString.split(".");
  const result = {};
  let current = result;

  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = {};
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

const keysString = "a.b.c.d";
const value = 123;
const result = createNestedObject(keysString, value);
console.log(result); // Output: {"a": {"b": {"c": {"d": 123}}}}

function createNestedObjectRecursive(keysString, value) {
  const keys = keysString.split(".");

  function createObject(keys, value) {
    if (keys.length === 0) return value;
    const key = keys.shift();
    console.log("remaining keys:", keys)
    const obj = {};
    obj[key] = createObject(keys, value);
    return obj;
  }

  return createObject(keys, value);
}
const resultRecursive = createNestedObjectRecursive(keysString, value);
console.log(resultRecursive); // Output: {"a": {"b": {"c": {"d": 123}}}}

const inputArray = [
  "articleList",
  { _key: "876e72f4cc33" },
  "titleGlobal",
  { _key: "6e8772f4cc33" },
  "abcdefg",
];

function arrayToString(arr) {
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (typeof item === "string") {
      str += "." + item;
    } else if (typeof item === "object") {
      const key = Object.keys(item)[0];
      const value = item[key];
      str += `[_${key} == "${value}"]`;
    }
  }

  return str.slice(1);
}

const pathToString = arrayToString(inputArray);
console.log(pathToString); // Output: "articleList[_key == "876e72f4cc33"]titleGlobal"

function arrayToStringRecursive(arr, index = 0) {
  if (index >= arr.length) return "";

  const item = arr[index];
  let str = "";

  if (typeof item === "string") {
    str += index === 0 ? item : "." + item;
  } else if (typeof item === "object") {
    const key = Object.keys(item)[0];
    const value = item[key];
    str += `[_${key} == "${value}"]`;
  }

  return str + arrayToStringRecursive(arr, index + 1);
}

function arrayToStringRecursiveArrayPop(arr) {
  if (arr.length === 0) return "";

  const item = arr.shift();
  let str = "";

  if (typeof item === "string") {
    str += arr.length === 0 ? item : item;
  } else if (typeof item === "object") {
    const key = Object.keys(item)[0];
    const value = item[key];
    str += `[_${key} == "${value}"]` + ".";
  }

  return str + arrayToStringRecursiveArrayPop(arr);
}


const resultString = arrayToStringRecursive(inputArray);
console.log(resultString);

const resultStringArrayPop = arrayToStringRecursiveArrayPop(inputArray);
console.log(resultStringArrayPop);
