import { groupLetter, noDecompressionLimit } from '../dive';

test('noDecompressionLimit', () => {
  const dive = {
    bottomTime: 300,
    depth: 300
  };
  expect(noDecompressionLimit(dive)).toBe('the no decompression limit for 300 minutes at 300 is ABC minutes');
});

test('groupLetter', () => {
  const dive = {
    bottomTime: 300,
    depth: 300
  };
  expect(groupLetter(dive)).toBe('the group letter for 300 minutes at 300 is X');
});