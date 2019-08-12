import { IDive } from './types/interfaces';

export const noDecompressionLimit = ({ depth, bottomTime }: IDive) => {
  return `the no decompression limit for ${bottomTime} minutes at ${depth} is ABC minutes`;
};

export const groupLetter = ({ depth, bottomTime }: IDive) => {
  return `the group letter for ${bottomTime} minutes at ${depth} is X`;
};
