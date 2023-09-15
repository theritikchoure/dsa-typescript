import { findFirstOccur, findLastOccur, findFirstLastOccurrence } from './first_last_occurrence';

describe('findFirstOccur', () => {
  it('should return the correct index for the first occurrence of the target', () => {
    const nums = [5, 7, 7, 8, 8, 8, 10];
    const target = 8;
    expect(findFirstOccur(nums, target)).toBe(3);
  });

  it('should return -1 if the target is not found', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    expect(findFirstOccur(nums, target)).toBe(-1);
  });

  // Add more test cases for edge cases and different scenarios
});

describe('findLastOccur', () => {
  it('should return the correct index for the last occurrence of the target', () => {
    const nums = [5, 7, 7, 8, 8, 8, 10];
    const target = 8;
    expect(findLastOccur(nums, target)).toBe(5);
  });

  it('should return -1 if the target is not found', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    expect(findLastOccur(nums, target)).toBe(-1);
  });

  // Add more test cases for edge cases and different scenarios
});

describe('findFirstLastOccurrence', () => {
  it('should return an array containing the first and last occurrences', () => {
    const nums = [5, 7, 7, 8, 8, 8, 10];
    const target = 8;
    expect(findFirstLastOccurrence(nums, target)).toEqual([3, 5]);
  });

  it('should return [-1, -1] if the target is not found', () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 6;
    expect(findFirstLastOccurrence(nums, target)).toEqual([-1, -1]);
  });

  // Add more test cases for edge cases and different scenarios
});
