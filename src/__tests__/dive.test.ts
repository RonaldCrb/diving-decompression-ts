import { groupLetter, noDecompressionLimit } from '../dive';

test('noDecompressionLimit', () => {
  const dive = {
    bottomTime: 300,
    depth: 150
  };
  expect(noDecompressionLimit(dive)).toBe({ noDecompressionLimit: 5 });
});

test('groupLetter', () => {
  const dive = {
    bottomTime: 300,
    depth: 300
  };
  expect(groupLetter(dive)).toBe('the group letter for 300 minutes at 300 is X');
});