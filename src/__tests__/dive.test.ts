import { decoDive, groupLetter, noDecompressionLimit, repetLetter, residualNitrogenTime } from '../index';

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
    nextTime: 25,
  };
  expect(repetLetter(dive)).toBe('A');
});

test('repetLetter 198/24 J', () => {
  const dive = {
    bottomTime: 198,
    depth: 24,
    sit: 250,
    nextDepth: 28,
    nextTime: 25,
  };
  expect(repetLetter(dive)).toBe('F');
});

test('repetLetter 44/60 H', () => {
  const dive = {
    bottomTime: 44,
    depth: 60,
    sit: 2500,
    nextDepth: 28,
    nextTime: 25,
  };
  expect(repetLetter(dive)).toBe(undefined);
});

test('repetLetter 200/124 undefined', () => {
  const dive = {
    bottomTime: 200,
    depth: 124,
    sit: 250,
    nextDepth: 28,
    nextTime: 25,
  };
  expect(repetLetter(dive)).toBe(undefined);
});

test('repetLetter 1500/25 undefined', () => {
  const dive = {
    bottomTime: 1500,
    depth: 25,
    sit: 250,
    nextDepth: 28,
    nextTime: 25,
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
    nextTime: 25,
  };
  expect(residualNitrogenTime(dive)).toBe(18);
});

test('residual nitrogen time 198/24 J', () => {
  const dive = {
    bottomTime: 198,
    depth: 24,
    sit: 250,
    nextDepth: 28,
    nextTime: 25,
  };
  expect(residualNitrogenTime(dive)).toBe(77);
});

test('residual nitrogen time 44/60 H', () => {
  const dive = {
    bottomTime: 44,
    depth: 60,
    sit: 22,
    nextDepth: 190,
    nextTime: 25,
  };
  expect(residualNitrogenTime(dive)).toBe(14);
});

test('residual nitrogen time 200/124 undefined', () => {
  const dive = {
    bottomTime: 200,
    depth: 124,
    sit: 350,
    nextDepth: 128,
    nextTime: 25,
  };
  expect(residualNitrogenTime(dive)).toBe(undefined);
});

test('residual nitrogen time 1500/25 undefined', () => {
  const dive = {
    bottomTime: 150,
    depth: 25,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(residualNitrogenTime(dive)).toBe(25);
});

// ****************************************************************************
// decoDive 5 tests

test('decoDive 99/135 decoObject', () => {
  const dive = {
    bottomTime: 135,
    depth: 99,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(decoDive(dive)).toMatchObject({
    minTime: 121,
    maxTime: 150,
    ttfs: '1:40',
    airTAT: '538:20',
    o2TAT: '183:40',
    o2cp: 5,
    repetLetter: 'N/A',
    surDo2Recom: true,
    surDo2Req: true,
    strictlySurDo2: true,
    exceptionalExposure: true,
    airDecoStops: [{ depth: 20, time: 461 }, { depth: 30, time: 46 }, { depth: 40, time: 26 }, { depth: 50, time: 3 }],
    o2decoStops: [{ depth: 20, time: 109 }, { depth: 30, time: 23 }, { depth: 40, time: 26 }, { depth: 50, time: 3 }],
  });
});

test('decoDive 1000/135 => No Table Matched', () => {
  const dive = {
    bottomTime: 135,
    depth: 1000,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(decoDive(dive)).toBe('No Table Matched');
});

test('decoDive 100/1305 => no decoObject Matched', () => {
  const dive = {
    bottomTime: 1305,
    depth: 100,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(decoDive(dive)).toBe('no decoObject Matched');
});

test('decoDive 69/130 => decoObject', () => {
  const dive = {
    bottomTime: 130,
    depth: 69,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(decoDive(dive)).toMatchObject({
    minTime: 121,
    maxTime: 130,
    ttfs: '1:20',
    airTAT: '169:20',
    o2TAT: '58:20',
    o2cp: 2,
    repetLetter: 'Z',
    surDo2Recom: true,
    exceptionalExposure: true,
    airDecoStops: [{ depth: 20, time: 167 }],
    o2decoStops: [{ depth: 20, time: 51 }],
  });
});

test('decoDive 61/125 => decoObject', () => {
  const dive = {
    bottomTime: 125,
    depth: 61,
    sit: 250,
    nextDepth: 69,
    nextTime: 25,
  };
  expect(decoDive(dive)).toMatchObject({
    minTime: 121,
    maxTime: 130,
    ttfs: '1:20',
    airTAT: '169:20',
    o2TAT: '58:20',
    o2cp: 2,
    repetLetter: 'Z',
    surDo2Recom: true,
    exceptionalExposure: true,
    airDecoStops: [{ depth: 20, time: 167 }],
    o2decoStops: [{ depth: 20, time: 51 }],
  });
});
