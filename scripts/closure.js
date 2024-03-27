function createCounter() {
  /**
   * This is the variable we're going to close over
   * count is a primitive variable, not an object, so the concept of this doesn't directly apply to count.
   */
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getValue: function () {
      return count;
    },
    setValue: function (value) {
      count = value;
    },
  };
}

const counter = createCounter();

console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
counter.decrement();
console.log(counter.getValue()); // 0
counter.setValue(5);
console.log(counter.getValue()); // 5

function createCounterWithThis() {
  this.count = 0; // `this` refers to the current instance of the object

  return {
    count: this.count,
    increment: function () {
      this.count++;
    },
    decrement: function () {
      this.count--;
    },
    getValue: function () {
      return this.count;
    },
    setValue: function (value) {
      this.count = value;
    },
  };
}

const countWithThis = createCounterWithThis();

console.log(countWithThis.count);
countWithThis.count = 10;
console.log(countWithThis.count);

class MyClass {
  #trulyPrivateField = "I am really private";
  _pseudoPrivateField = "I am not really private";
}

const instance = new MyClass();
console.log(instance._pseudoPrivateField); // Outputs: "I am not really private"

function createFunctions() {
  let functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(function () {
      console.log(i);
    });
  }
  return functions;
}

const funcs = createFunctions();
funcs[0](); // What do you expect this to print?
funcs[1]();
funcs[2]();

function createIIFEFunctions() {
  /**
   * We can use an IIFE (Immediately Invoked Function Expression) to capture each value of i by value:
   * @type {*[]}
   */
  var functions = [];
  for (var i = 0; i < 3; i++) {
    functions.push(
      (function (value) {
        return function () {
          console.log(value);
        };
      })(i)
    );
  }
  return functions;
}

const iifefuncs = createIIFEFunctions();
iifefuncs[0](); // 0
iifefuncs[1](); // 1
iifefuncs[2](); // 2

function* createYieldFunctions() {
  for (var i = 0; i < 3; i++) {
    yield function (num) {
      console.log("num in function* yield ➡️", num);
    }.bind(null, i);
  }
}

const functions = [...createYieldFunctions()]; // Spread the generator to get all its values

functions[0](); // Prints 0
functions[1](); // Prints 1
functions[2](); // Prints 2
