interface Price {
  price: number;
  salePrice: number;
}
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const priceObject: Price[] = prices.map((element) => {
  const price = element;
  const salePrice = element / 2;
  return { price, salePrice };
});
console.log('Price objects: ', priceObject);

const formattedPrice: string[] = prices.map((element) => '$' + element);
console.log('Formatted prices: ', formattedPrice);
