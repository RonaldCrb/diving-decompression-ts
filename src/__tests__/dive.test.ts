import { groupLetter, noDecompressionLimit } from '../dive';

// **************************************************************************************************
// noDecompressionLimit 5 Tests
test('noDecompressionLimit 147', () => {
  const dive = {
    bottomTime: 300,
    depth: 147,
  };
  expect(noDecompressionLimit(dive)).toBe(5);
});

test('noDecompressionLimit 20', () => {
  const dive = {
    bottomTime: 300,
    depth: 20,
  };
  expect(noDecompressionLimit(dive)).toBe('unlimited');
});

test('noDecompressionLimit 33', () => {
  const dive = {
    bottomTime: 300,
    depth: 33,
  };
  expect(noDecompressionLimit(dive)).toBe(232);
});

test('noDecompressionLimit 98 undefined', () => {
  const dive = {
    bottomTime: 300,
    depth: -1,
  };
  expect(noDecompressionLimit(dive)).toBe(undefined);
});

test('noDecompressionLimit 200 undefined', () => {
  const dive = {
    bottomTime: 300,
    depth: 200,
  };
  expect(noDecompressionLimit(dive)).toBe(undefined);
});

// **********************************************************************************************
// groupLetter 5 Tests

test('groupLetter 5/147 C', () => {
  const dive = {
    bottomTime: 5,
    depth: 147,
  };
  expect(groupLetter(dive)).toBe('C');
});

test('groupLetter 198/24 J', () => {
  const dive = {
    bottomTime: 198,
    depth: 24,
  };
  expect(groupLetter(dive)).toBe('J');
});

test('groupLetter 44/60 H', () => {
  const dive = {
    bottomTime: 44,
    depth: 60,
  };
  expect(groupLetter(dive)).toBe('H');
});

test('groupLetter 200/124 undefined', () => {
  const dive = {
    bottomTime: 200,
    depth: 124,
  };
  expect(groupLetter(dive)).toBe(undefined);
});

test('groupLetter 1500/25 undefined', () => {
  const dive = {
    bottomTime: 1500,
    depth: 25,
  };
  expect(groupLetter(dive)).toBe(undefined);
});
