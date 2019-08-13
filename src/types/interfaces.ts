export interface IDive {
  depth: number;
  bottomTime: number;
}

export interface IGroup {
  groupLetter: string;
  minTime: number;
  maxTime: number;
}

export interface IRow {
  minfsw: number;
  maxfsw: number;
  unlimited: boolean;
  noStopLimit: number | string;
  values: IGroup[];
}

export interface ITable {
  tableCode: string,
  tableName: string;
  tableData: IRow[];
}
