/* exported chunk */
function chunk(array: any[], size: number): any[] {
  const res: any[] = [];
  const numberOfWholeChunks: number = Math.floor(array.length / size);
  const remainingElements: number = array.length % size;
  let currentInputArrIndex = 0;

  // Fill res with the whole chunk
  for (let i = 0; i < numberOfWholeChunks; i++) {
    const chunk: any[] = [];
    for (let j = 0; j < size; j++) {
      chunk.push(array[currentInputArrIndex]);
      currentInputArrIndex++;
    }
    res.push(chunk);
  }

  // Fill res with remaining elements
  if (remainingElements > 0) {
    const chunk: any[] = [];
    for (let i = remainingElements; i > 0; i--) {
      chunk.push(array.at(-i));
    }
    res.push(chunk);
  }
  return res;
}
