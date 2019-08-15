export interface IDivePlan {
  depth: number;
  bottomTime: number;
  sit: number;
  nextDepth: number;
  nextTime: number;
}

export interface IDive {
  depth: number;
  bottomTime: number;
}

// table for no decompression limit and group letter
export interface IGroup {
  groupLetter: string;
  minTime: number;
  maxTime: number;
}

export interface IRowNdl {
  minfsw: number;
  maxfsw: number;
  unlimited: boolean;
  noStopLimit: number | string;
  values: IGroup[];
}

export interface ITableNdl {
  tableCode: string;
  tableName: string;
  tableData: IRowNdl[];
}

// table for surface interval time and repetitive letter
export interface IRowRgl {
  groupLetter: string;
  minTime: number;
  maxTime: number;
  repetLetter: string;
}

export interface ITableRgl {
  tableCode: string;
  tableName: string;
  tableData: IRowRgl[];
}

// table for residual nitrogen time

export interface IRnt {
  minDepth: number;
  maxDepth: number;
  rnt: number;
}

export interface IRowRnt {
  repetLetter: string;
  rnt: IRnt[];
}

export interface ITableRnt {
  tableCode: string;
  tableName: string;
  tableNote9981: string;
  tableData: IRowRnt[];
}
