async function translate(text) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ translations: [{ ko: text + " (translated to Korean)" }] });
    }, 1000);
  });

  return result.translations[0].ko;
}

// This will log the translated text after 1 second
translate("text").then(console.log);

function recursiveSum(n) {
  // Base case
  if (n === 1) {
    return 1;
  }
  // Recursive case
  return n + recursiveSum(n - 1);
}

console.log(recursiveSum(5));  // Outputs: 15 (because 1 + 2 + 3 + 4 + 5 = 15)


