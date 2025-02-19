'use strict';
/* exported chunk */
function chunk(array, size) {
  const res = [];
  const numberOfWholeChunks = Math.floor(array.length / size);
  const remainingElements = array.length % size;
  let currentInputArrIndex = 0;
  // Fill res with the whole chunk
  for (let i = 0; i < numberOfWholeChunks; i++) {
    const chunk = [];
    for (let j = 0; j < size; j++) {
      chunk.push(array[currentInputArrIndex]);
      currentInputArrIndex++;
    }
    res.push(chunk);
  }
  // Fill res with remaining elements
  if (remainingElements > 0) {
    const chunk = [];
    for (let i = remainingElements; i > 0; i--) {
      chunk.push(array.at(-i));
    }
    res.push(chunk);
  }
  return res;
}
