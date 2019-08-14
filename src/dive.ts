import _ from 'lodash';
import usNavyNoDecoRepetGroup from './tables/usnavy-nodeco-rev7';
import usNavyRepetGroupLetter from './tables/usnavy-repetGroupLetter'
import { IDive, IDivePlan, IGroup, IRowNdl, IRowRgl } from './types/interfaces';

export const noDecompressionLimit = ({ depth }: IDive) => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    return row.noStopLimit;
  } else {
    return undefined;
  }
};

export const groupLetter = ({ depth, bottomTime }: IDive) => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
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

export const repetLetter = ({ bottomTime, depth, sit }: IDivePlan) => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    const group: IGroup | undefined = _.find(row.values, (element: IGroup): boolean => {
      return element.minTime <= bottomTime && bottomTime <= element.maxTime;
    });
    if (group) {
      const repet: IRowRgl | undefined = _.find(usNavyRepetGroupLetter.tableData, (element: IRowRgl): boolean => {
        return element.groupLetter === group.groupLetter && element.minTime <= sit && sit <= element.maxTime 
      });
      if (repet) {
        return repet.repetLetter
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
};
