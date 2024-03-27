

function transformVersion(input) {
  const prefix = input.replace(/V\d+$/, '');
  const versionNumber = input.match(/\d+$/);

  if (versionNumber) {
    return `${capitalizeFirstLetter(prefix)} ${versionNumber[0]}.0`;
  }
  return input;
}

function createFunctions() {
  /**
   * Each function in the funcs array will print 10 because they all
   * reference the same i from their shared outer scope,
   * and by the time the loop finishes, i is 10.
   */
  var functions = [];
  for (let i = 0; i < 10; i++) {
    functions.push(function() {
      console.log(i);
    });
  }
  return functions;
}

var i = 0;
function exampleFunction() {
  console.log(i);
}

exampleFunction();  // This will print 0
i = 3;
exampleFunction();  // This will print 3, not 0

const funcs = createFunctions();
funcs[9]();
funcs[8]();
funcs[7]();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(transformVersion("pageTitleV2"));
console.log(transformVersion("abcV3"));