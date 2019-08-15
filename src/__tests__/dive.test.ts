import { groupLetter, noDecompressionLimit, repetLetter, residualNitrogenTime } from '../index';

// **************************************************************************************************
// noDecompressionLimit 5 Tests
test('noDecompressionLimit 147', () => {
  const dive = {
    bottomTime: 300,
    depth: 147,
  };
  expect(noDecompressionLimit(dive)).toBe(8);
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


// **********************************************************************************************
// repetLetter 5 Tests

test('repetLetter 5/147 C', () => {
  const dive = {
    bottomTime: 5,
    depth: 147,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(repetLetter(dive)).toBe('A');
});

test('repetLetter 198/24 J', () => {
  const dive = {
    bottomTime: 198,
    depth: 24,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(repetLetter(dive)).toBe('F');
});

test('repetLetter 44/60 H', () => {
  const dive = {
    bottomTime: 44,
    depth: 60,
    sit: 2500,
    nextDepth: 28,
    nextTime: 25
  };
  expect(repetLetter(dive)).toBe(undefined);
});

test('repetLetter 200/124 undefined', () => {
  const dive = {
    bottomTime: 200,
    depth: 124,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(repetLetter(dive)).toBe(undefined);
});

test('repetLetter 1500/25 undefined', () => {
  const dive = {
    bottomTime: 1500,
    depth: 25,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(repetLetter(dive)).toBe(undefined);
});

// **********************************************************************************************
// residual nitrogen time 5 Tests

test('residual nitrogen time 5/147 C', () => {
  const dive = {
    bottomTime: 5,
    depth: 147,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(residualNitrogenTime(dive)).toBe(18);
});

test('residual nitrogen time 198/24 J', () => {
  const dive = {
    bottomTime: 198,
    depth: 24,
    sit: 250,
    nextDepth: 28,
    nextTime: 25
  };
  expect(residualNitrogenTime(dive)).toBe(77);
});

test('residual nitrogen time 44/60 H', () => {
  const dive = {
    bottomTime: 44,
    depth: 60,
    sit: 22,
    nextDepth: 190,
    nextTime: 25
  };
  expect(residualNitrogenTime(dive)).toBe(14);
});

test('residual nitrogen time 200/124 undefined', () => {
  const dive = {
    bottomTime: 200,
    depth: 124,
    sit: 350,
    nextDepth: 128,
    nextTime: 25
  };
  expect(residualNitrogenTime(dive)).toBe(undefined);
});

test('residual nitrogen time 1500/25 undefined', () => {
  const dive = {
    bottomTime: 150,
    depth: 25,
    sit: 250,
    nextDepth: 69,
    nextTime: 25
  };
  expect(residualNitrogenTime(dive)).toBe(25);
});
