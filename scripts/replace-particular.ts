type ReplacementPattern = {
  match: string[];
  replaceWith: string;
};

function createReplacer(patterns: ReplacementPattern[]) {
  // Return a new function that uses the patterns for replacement
  return function (targetString: string): string {
    let resultString = targetString;
    // Iterate over each pattern
    for (const pattern of patterns) {
      // Use the replaceParticular function for each pattern
      resultString = replaceParticular(
        pattern.match,
        resultString,
        pattern.replaceWith
      );
    }
    return resultString;
  };
}

function replaceParticular(
  contents: string[],
  targetString: string,
  replacement: string
): string {
  let resultString = targetString;
  // Iterate over each content that needs to be replaced
  for (const content of contents) {
    // Create a global regular expression for each content
    const regex = new RegExp(content, "ig");
    // Replace all occurrences of the content in the target string
    resultString = resultString.replace(regex, replacement);
  }
  return resultString;
}

// Define the patterns for replacement
const patterns: ReplacementPattern[] = [
  { match: ["a", "b", "c"], replaceWith: "d" },
  { match: ["e", "f", "g"], replaceWith: "h" },
  { match: ["z", "x", "q"], replaceWith: "t" },
];

console.log(
  replaceParticular(["60円"], "このファンシーな60円が欲しいです", "Y60")
);

// Create the replacer function with the given patterns
const replacer = createReplacer(patterns);

// Example usage:
const targetString = "a quick brown fox jumps over a lazy dog e f g z x q";
const result = replacer(targetString);

console.log(result); // Outputs the string with the specified replacements

const lookup = [
  {
    _key: "f7aee6eb515f",
    replacingText: "套組",
    replacedText: "捆綁包",
  },
  {
    _key: "ad93cf061a8d",
    replacingText: "機箱",
    replacedText: "保護套",
  },
  {
    _key: "0c8e0774b740",
    replacingText: "現代美學機殼",
    replacedText: "現代美學案例",
  },
];

const brutelReplacer = createReplacer(
  lookup.map((item) => ({
    match: [item.replacedText],
    replaceWith: item.replacingText,
  }))
);

const exampleString = "捆綁包 保護套 現代美學案例";
const _result = brutelReplacer(exampleString);
console.log(_result);
