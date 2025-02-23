/* exported numVowels */
function numVowels(str: string): number {
  let count: number = 0;
  const vowels: string[] = ['a', 'i', 'e', 'o', 'u'];
  for (const char of str.toLowerCase()) {
    console.log(char);
    if (vowels.includes(char)) {
      count++;
      console.log(count);
    }
  }
  return count;
}
