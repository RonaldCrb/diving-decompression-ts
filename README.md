# UNDER CONSTRUCTION

## DO NOT USE THIS PACKAGE UNTIL STABLE VERSION HAS BEEN RELEASED!!!!!

## IMPORTANT NOTE FROM THE AUTHOR
this module is under construction, it is **__NOT__** suitable for usage in real dive operations neither commercial nor recreational, as i need to make extensive test and audit the package reliability. it is not only a matter of applying unit testing as this calculations are crucial for divers safety; also regardless of the extensive tests and trials in humans performed by the US Navy along the years with regards of decompression sickness, it has been stated many times by relevant stakeholders that these trials do not necessarily entail 100% accuracy on the results of undertaking a dive operations within the constraints of these dive tables. there is many factors that are not taken into consideration (e.g: water temperature, diver physiological fitness, unaverted PFOs... to name a few). 

## Sources
the main source for this module is the [US Navy Diving Manual](https://en.wikipedia.org/wiki/U.S._Navy_Diving_Manual "US Navy Diving Manual Rev7"), which is __the most comprehensive resource__ for educational and operational reference in the diving industry. you can find a copy of the 7th revision of this manual in this repository

## Compatibility

You can install this module in __ANY__ Javascript or Typescript project. it is written in Typescript, targeting ES6 and it was initially designed to be used along Javascript Frontend Frameworks or libraries (eg. React, Angular or Vue), but it can also be used perfectly with Nodejs programs on the server side... 

## Installation

This module includes its typings inside index.d.ts file, so you dont need to download any other types. this is crucial because the dive tables associated with this module are type checked with the very same interfaces that are being used currently to type check the functions and methods. this becomes very important when calculating dives because it adds an extra layer of security on top of the test cases so we are 100% positive that youre reading the correct table and that it has the appropriate structure, no data extra or missing data ensures youre reading what youre suppose to read in the results.

```
npm i diving-decompression
```

## Usage

first you need your dive data to be in a configuration object; if you are diving a single dive, you must specify these parameters in the configuration object:

1. _depth_ : number (depth of the dive expressed in feet of sea water) 
2. _bottomTime_ : number (the time from leaving surface to leaving bottom expressed in minutes)

_diving-decompression_ exposes 3 methods compatible with this configuration object

To find the no-decompression-limit for air dives use:

```javascript
import { noDecompressionLimit } from 'diving-decompression'
...
const dive = { depth: 123, bottomTime: 15 };
const ndl = noDecompressionLimit(dive);
console.log(ndl)
```

To find the group letter use:

```javascript
import { groupLetter } from 'diving-decompression'
...
const dive = { depth: 123, bottomTime: 15 };
const gl = groupLetter(dive);
console.log(gl)
```

To find the decoObject use:

```javascript
import { diveDeco } from 'diving-decompression'
...
const dive = { depth: 100, bottomTime: 135 };
const decoObject = diveDeco(dive);
console.log(decoObject)
```
this  method returns an object with the following structure.

```javascript
{
  minTime: 101, 
  maxTime: 110,
  ttfs: '2:20', // Total time first stop (string)
  airTAT: '520:00', // in water decompression with Air Total Ascent time (string)
  o2TAT: '188:20', // in water decompression with Air/O2 Total Ascent time (string)
  o2cp: 5, // SurDO2 chamber periods required (number)
  repetLetter: 'N/A', // Repetitive Letter (string)
  surDo2Recom: true, // inWater Decompression or SurDO2 recommended (boolean)
  surDo2Req: true, // Exceptional Exposure, SurDO2 Required (boolean)
  strictlySurDo2: true, // Exceptional Exposure, Strictly SurDO2 (boolean)
  exceptionalExposure: true, // Exceptional Exposure, inWater Deco or SurDO2 Required (boolean)
  airDecoStops: [ // in Water decompression with Air Schedule
    { depth: 20, time: 433 }, // all air stops depth and time
    { depth: 30, time: 38 },
    { depth: 40, time: 25 },
    { depth: 50, time: 21 },
  ],
  o2decoStops: [ // in water decompression with Air/O2 Schedule (O2 for the 30' and 20')
    { depth: 20, time: 105 }, // O2 stop
    { depth: 30, time: 19 }, // O2 stop
    { depth: 40, time: 25 }, // air stop
    { depth: 50, time: 21 }, // air stop
  ],
},
```


the other possible configuration object; if you are diving a repetitive dive, you must specify these parameters in the configuration object:

1. _depth_ : number (depth of the dive expressed in feet of sea water) 
2. _bottomTime_ : number (the time from leaving surface to leaving bottom expressed in minutes)
3. _sit_ : number (surface interval time expressed in minutes)
4. _nextDepth_ : number (next planned depth expressed in feet of sea water)

_diving-decompression_ exposes 2 methods compatible with this configuration object

To find the repetitive dive letter use:

```javascript
import { repetLetter } from 'diving-decompression'
...
const divePlan = { 
  depth: 123, 
  bottomTime: 15, 
  sit: 123,
  nextDepth: 321,
};
const rl = repetLetter(divePlan);
console.log(rl)
```

To find the residual nitrogen time use:

```javascript
import { residualNitrogenTime } from 'diving-decompression'
...
const divePlan = { 
  depth: 123, 
  bottomTime: 123, 
  sit: 123,
  nextDepth: 123,
};
const rnt = residualNitrogenTime(divePlan);
console.log(rnt)
```

## Road Map Specific Objectives

1. to develop a series of return objects with the specific guidelines that are relevant to the specific dive profile introduced.

2. to develop a series of graphical charts to represent the decompression profiles.

3. to develop a series of specific errors and warning objects relevant to the profile introduced.

## License
[MPL-2.0](https://choosealicense.com/licenses/mpl-2.0/)
