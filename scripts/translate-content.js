const fs = require("fs");
const content = fs.readFileSync("./content-needs-translation.json", "utf-8");
const parsedContent = JSON.parse(content);

function splitContentIntoSentences(parsedContent) {
  let chunkIndex = 0;
  let chunkCounter = 0;
  let chunks = [];
  let bigArray = [];

  for (let i = 0; i < parsedContent.length; i++) {
    const text = parsedContent[i].Text;
    chunkCounter += text.length;

    if (chunkCounter > 2500) {
      chunkIndex++;
      chunkCounter = text.length;
    }

    if (!chunks[chunkIndex]) {
      chunks[chunkIndex] = [];
    }

    chunks[chunkIndex].push(text);
  }

  // Split chunks into 2500-character strings:
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const numChunks = Math.ceil(chunk.length / 2500);
    let startIndex = 0;

    for (let j = 0; j < numChunks; j++) {
      const endIndex = Math.min(startIndex + 2500, chunk.length);
      const chunkArray = chunk.slice(startIndex, endIndex);
      bigArray.push(chunkArray);
      startIndex = endIndex;
    }
  }

  const sentences = bigArray.map((chunk) =>
    chunk.map((sentence) => ({ Text: sentence }))
  );

  return sentences;
}

const sentences = splitContentIntoSentences(parsedContent);

const sanityContent = fs.readFileSync("./sanity-object.json", "utf-8");
const parsedSanity = JSON.parse(sanityContent);

function mutateTextToA(data) {
    console.log("data props in func:", data.length);
    // loop through each block in the data
    data.forEach(block => {
      // loop through each child span in the block
      Array.isArray(block.children) && block.children.forEach(child => {
        if (child._type === 'span') {
          // set the text value to "a"
          child.text = 'a';
        }
      });
    });
  
    // return the mutated data
    return data;
  }

const mutatedData = mutateTextToA(parsedSanity);
console.log(mutatedData);