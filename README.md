# UNDER CONSTRUCTION

## DO NOT USE THIS PACKAGE UNTIL STABLE VERSION HAS BEEN RELEASED!!!!!

## IMPORTANT NOTE FROM THE AUTHOR
this module is under construction, it is **__NOT__** suitable for usage in real dive operations neither commercial nor recreational, as i need to make extensive test and audit the package reliability. it is not only a matter of applying unit testing as this calculations are crucial for divers safety; also regardless of the extensive tests and trials in humans performed by the US Navy along the years with regards of decompression sickness, it has been stated many times by relevant stakeholders that these trials do not necessarily entail 100% accuracy on the results of undertaking a dive operations within the constraints of these dive tables. there is many factors that are not taken into consideration (e.g: water temperature, diver physiological fitness, unaverted PFOs... to name a few). 

## Sources
the main source for this module is the [US Navy Diving Manual](https://en.wikipedia.org/wiki/U.S._Navy_Diving_Manual "US Navy Diving Manual"), which is __the most comprehensive resource__ for educational and operational reference in the diving industry.


## Installation

```
npm i diving-decompression
```

## Usage

first you need your dive data to be in a configuration object; if you are diving a single dive, you must specify these parameters in the configuration object:

1. _depth_ : number (depth of the dive expressed in feet of sea water) 
2. _bottomTime_ : number (the time from leaving surface to leaving bottom expressed in minutes)

_diving-decompression_ exposes 2 methods compatible with this configuration object

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

the other possible configuration object; if you are diving a repetitive dive, you must specify these parameters in the configuration object:

1. _depth_ : number (depth of the dive expressed in feet of sea water) 
2. _bottomTime_ : number (the time from leaving surface to leaving bottom expressed in minutes)
3. _sit_ : number (surface interval time expressed in minutes)
4. _nextTime_ : number (next planned bottom time expressed in minutes)
5. _nextDepth_ : number (next planned depth expressed in feet of sea water)

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
  nextTime: 123
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
  nextTime: 123
};
const rnt = residualNitrogenTime(divePlan);
console.log(rnt)
```

## License
[MPL-2.0](https://choosealicense.com/licenses/mpl-2.0/)
