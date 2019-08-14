# UNDER CONSTRUCTION

## DO NOT USE THIS PACKAGE UNTIL STABLE VERSION HAS BEEN RELEASED!!!!!

## IMPORTANT NOTE FROM THE AUTHOR
this module is under construction, it is **__NOT__** suitable for usage in real dive operations neither commercial nor recreational, as i need to make extensive test and audit the package reliability. it is not only a matter of applying unit testing as this calculations are crucial for divers safety; also regardless of the extensive tests and trials in humans performed by the US Navy along the years with regards of decompression sickness, it has been stated many times by relevant stakeholders that these trials do not necessarily entail 100% accuracy on the results of undertaking a dive operations within the constraints of these dive tables. there is many factors that are not taken into consideration (e.g: water temperature, diver physiological fitness, unaverted PFOs... to name a few). 

## Sources
the main source for this module is the [US Navy Diving Manual](https://en.wikipedia.org/wiki/U.S._Navy_Diving_Manual "US Navy Diving Manual"), which is __the most comprehensive resource__ for educational and operational reference in the diving industry.


## Installation

```
npm i dive-decompression
```

## Usage

_diving-decompression_ exposes 2 methods

To find the no-decompression-limit for air dives use:

```
import { noDecompressionLimit } from 'diving-decompression'
...
const dive = { depth: 123, bottomTime: 15 };
const ndl = noDecompressionLimit(dive);
console.log(ndl)
```

To find the group letter use:

```
import { groupLetter } from 'diving-decompression'
...
const dive = { depth: 123, bottomTime: 15 };
const gl = groupLetter(dive);
console.log(gl)
```