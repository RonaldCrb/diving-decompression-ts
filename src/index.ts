import _ from 'lodash';
import usNavyAirDecompressionTable from './tables/usnavy-deco-rev7';
import usNavyNoDecoRepetGroup from './tables/usnavy-nodeco-rev7';
import usNavyRepetGroupLetter from './tables/usnavy-repetGroupLetter';
import usNavyResidualNitrogenTime from './tables/usnavy-rnt';
import { IDecoDepth, IDive, IDivePlan, IGroup, IRnt, IRowDeco, IRowNdl, IRowRgl, IRowRnt } from './types/interfaces';

export const noDecompressionLimit = ({ depth }: IDive): number | string | Error => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    return row.noStopLimit;
  } else {
    return new Error('Cannot find correct profile for the given parameters');
  }
};

export const groupLetter = ({ depth, bottomTime }: IDive): string | Error => {
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
      return new Error('Cannot find correct profile for the given parameters');
    }
  } else {
    return new Error('Cannot find correct profile for the given parameters');
  }
};

export const repetLetter = ({ bottomTime, depth, sit }: IDivePlan): string | Error => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    const group: IGroup | undefined = _.find(row.values, (element: IGroup): boolean => {
      return element.minTime <= bottomTime && bottomTime <= element.maxTime;
    });
    if (group) {
      const repet: IRowRgl | undefined = _.find(usNavyRepetGroupLetter.tableData, (element: IRowRgl): boolean => {
        return element.groupLetter === group.groupLetter && element.minTime <= sit && sit <= element.maxTime;
      });
      if (repet) {
        return repet.repetLetter;
      } else {
        return new Error('Cannot find correct profile for the given parameters');
      }
    } else {
      return new Error('Cannot find correct profile for the given parameters');
    }
  } else {
    return new Error('Cannot find correct profile for the given parameters');
  }
};

export const residualNitrogenTime = ({ bottomTime, depth, sit, nextDepth }: IDivePlan): string | Error => {
  const row: IRowNdl | undefined = _.find(usNavyNoDecoRepetGroup.tableData, (element: IRowNdl): boolean => {
    return element.minfsw <= depth && depth <= element.maxfsw;
  });
  if (row) {
    const group: IGroup | undefined = _.find(row.values, (element: IGroup): boolean => {
      return element.minTime <= bottomTime && bottomTime <= element.maxTime;
    });
    if (group) {
      const repet: IRowRgl | undefined = _.find(usNavyRepetGroupLetter.tableData, (element: IRowRgl): boolean => {
        return element.groupLetter === group.groupLetter && element.minTime <= sit && sit <= element.maxTime;
      });
      if (repet) {
        const column: IRowRnt | undefined = _.find(
          usNavyResidualNitrogenTime.tableData,
          (element: IRowRnt): boolean => {
            return element.repetLetter === repet.repetLetter;
          },
        );
        if (column) {
          const rnt: IRnt | undefined = _.find(column.rnt, (element: IRnt): boolean => {
            return element.minDepth <= nextDepth && nextDepth <= element.maxDepth;
          });
          if (rnt && rnt.rnt === 0) {
            return usNavyResidualNitrogenTime.tableNote9981;
          } else if (rnt && rnt.rnt > 0) {
            return `${rnt.rnt}`;
          } else {
            return new Error('Cannot find correct profile for the given parameters');
          }
        } else {
          return new Error('Cannot find correct profile for the given parameters');
        }
      } else {
        return new Error('Cannot find correct profile for the given parameters');
      }
    } else {
      return new Error('Cannot find correct profile for the given parameters');
    }
  } else {
    return new Error('Cannot find correct profile for the given parameters');
  }
};

export const decoDive = ({ bottomTime, depth }: IDive): IRowDeco | string => {
  const table: IDecoDepth | undefined = _.find(
    usNavyAirDecompressionTable.tableData,
    (element: IDecoDepth): boolean => {
      return element.minfsw <= depth && depth <= element.maxfsw;
    },
  );
  if (table) {
    const decoProfile: IRowDeco | undefined = _.find(table.rows, (element: IRowDeco): boolean => {
      return element.minTime <= bottomTime && bottomTime <= element.maxTime;
    });
    if (decoProfile) {
      return decoProfile;
    } else {
      return 'no deco profile Found';
    }
  } else {
    return 'No Table Found';
  }
};
