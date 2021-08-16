export function quickSort(arr, order) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const tail = arr.slice(1);

  const small = tail.filter(value => value < pivot);
  const big = tail.filter(value => value >= pivot);

  return [...quickSort(small), pivot, ...quickSort(big)];
}
