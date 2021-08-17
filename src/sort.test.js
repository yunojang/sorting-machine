import { quickSort } from "Components/Sorting/utils/sort";

describe('quick sort test', ()=> {
  test('[4,3,2,1] to [1,2,3,4]', () => {
    expect(quickSort([4,3,2,1])).toStrictEqual([1,2,3,4]);
  });
  test('[9,5,3,2,8,7,1,4,0,6] to [0,1,2,3,4,5,6,7,8,9]', () => {
    expect(quickSort([9,5,3,2,8,7,1,4,0,6])).toStrictEqual([0,1,2,3,4,5,6,7,8,9]);
  });
});