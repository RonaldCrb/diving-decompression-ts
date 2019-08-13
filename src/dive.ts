import _ from 'lodash';
import { usNavyNoDecoRepetGroup } from './tables/usnavy-nodeco-rev7';
import { IDive, IGroup, IRow } from './types/interfaces';

export const noDecompressionLimit = ({ depth, bottomTime }: IDive) => {
  const row: IRow | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRow): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    return row.noStopLimit;
  } else {
    return undefined;
  }
};

export const groupLetter = ({ depth, bottomTime }: IDive) => {
  const row: IRow | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRow): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    const group: IGroup | undefined = _.find(row.values, (element: IGroup): boolean => {
      return element.minTime <= bottomTime && bottomTime <= element.maxTime;
    });
    if (group) {
      return group.groupLetter;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};
