const nestedArray = [
  {
    text: "(1st Layer) 😀",
    children: [
      {
        text: "(2nd Layer) 🥲",
        children: [
          {
            text: "(3rd Layer) 😇",
            children: []  // can be filled with more children or left empty
          },
          {
            text: "(3rd Layer) 🧐",
            children: [
              {
                text: "(4th Layer) 🌳",
                children: []  // can be filled with more children or left empty
              },
              {
                text: "(4th Layer) 🤖",
                children: []  // can be filled with more children or left empty
              },
            ]
          }
        ]
      },
      {
        text: "(2nd Layer) 😄",
        children: []
      }
    ]
  },
  {
    text: "(1st Layer) 🙃",
    children: []
  }
];

function joinTextsRecursive(array) {
  let result = '';
  let blendChar = ", "

  for (let i = 0; i < array.length; i+=1) {
    const item = array[i];
    result += item.text;

    if (item.children && item.children.length > 0) {
      result += blendChar + joinTextsRecursive(item.children);
    }

    // Add "@" only if it's not the last item in the current level
    if (i !== array.length - 1) {
      result += blendChar;
    }
  }

  return result;
}

function joinTextsLoopQueue(array) {
  let result = '';
  const blendChar = ", ";
  const queue = [...array];  // Initialize the stack with the root elements

  while (queue.length > 0) {
    const item = queue.shift();

    // Append the current item's text to the result
    if (result) {
      result += blendChar;
    }
    result += item.text;

    // If the item has children, push them to the stack
    if (item.children && item.children.length > 0) {
      for (let i = item.children.length - 1; i >= 0; i--) {
        queue.push(item.children[i]);
      }
    }
  }

  return result;
}

function joinTextsLoopAlignStack(array) {
  let result = '';
  const blendChar = ", ";
  const stack = [...array.reverse()];  // Initialize the stack with the root elements

  while (stack.length > 0) {
    const item = stack.pop();
    console.log("What is current item:\n", item)

    // If item is a string (i.e., our blendChar separator), append to result and continue to the next iteration
    if (typeof item === 'string') {
      result += item;
      continue;
    }

    // Append the current item's text to the result
    if (result) {
      result += blendChar;
    }
    result += item.text;

    // If the item has children, push them to the stack
    if (item.children && item.children.length > 0) {
      // Push children (reversed) to the stack with separators between them
      for (let i = item.children.length - 1; i >= 0; i--) {
        stack.push(item.children[i]);
      }
    }
  }

  return result;
}

/**
 * (1st Layer) 😀, (2nd Layer) 🥲, (3rd Layer) 😇, (3rd Layer) 🧐, (4Layer) 🌳, (4th   Layer) 🤖, (2nd Layer) 😄, (1st Layer) 🙃
 *   at joinTextsRecursive(nestedArray) quokka.js:170:0
 *
 * (1st Layer) 😀, (1st Layer) 🙃, (2nd Layer) 😄, (2nd Layer) 🥲, (3rd Layer) 🧐, (3rd Layer) 😇, (4th   Layer) 🤖, (4Layer) 🌳
 *   at joinTextsLoopQueue(nestedArray) quokka.js:171:0
 *
 * (1st Layer) 😀, (2nd Layer) 🥲, (3rd Layer) 😇, (3rd Layer) 🧐, (4Layer) 🌳, (4th   Layer) 🤖, (2nd Layer) 😄, (1st Layer) 🙃
 *   at joinTextsLoopAlignStack(recursiveArr... quokka.js:171:0
 */
console.log(joinTextsRecursive(nestedArray));
console.log(joinTextsLoopQueue(nestedArray));
console.log(joinTextsLoopAlignStack(nestedArray))