import { usNavyNoDecoRepetGroup } from './tables/usnavy-rev7'
import { IDive } from './types/interfaces';

export const noDecompressionLimit = ({ depth, bottomTime }: IDive) => {
  usNavyNoDecoRepetGroup.data.forEach((element: any) => {
    const result = element.values.find((schedule: any) => {
      return schedule.minfsw <= depth && depth <= schedule.maxfsw 
    })
    console.log(result)
  });
  return { noDecompressionLimit: '' }
};

export const groupLetter = ({ depth, bottomTime }: IDive) => {
  return `the group letter for ${bottomTime} minutes at ${depth} is X`;
};
