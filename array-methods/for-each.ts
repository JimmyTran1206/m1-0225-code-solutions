const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

// logging each value, forward
console.log('Forward order:');
values.forEach((element) => {
  console.log(element);
});

// logging each vale, reverse
console.log('Reverse order:');
values.forEach((element, i, arr) => {
  const len = arr.length;
  console.log(arr[len - 1 - i]);
});
