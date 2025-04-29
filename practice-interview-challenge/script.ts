interface RangeProps {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}
function getRangeReport(start: number, end: number): RangeProps {
  const result: RangeProps = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0,
  };
  for (let i = start; i <= end; i++) {
    result.total += i;
    result.range.push(i);
    i % 2 === 0 ? result.evens.push(i) : result.odds.push(i);
  }
  result.average = result.total / result.range.length;
  return result;
}

console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
