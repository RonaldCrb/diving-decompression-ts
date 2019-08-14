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

export interface IGroup {
  groupLetter: string;
  minTime: number;
  maxTime: number;
}

// tables for no decompression limit and group letter
export interface IRowNdl {
  minfsw: number;
  maxfsw: number;
  unlimited: boolean;
  noStopLimit: number | string;
  values: IGroup[];
}

export interface ITableNdl {
  tableCode: string,
  tableName: string;
  tableData: IRowNdl[];
}

// tables for surface interval time and repetitive letter
export interface IRowRgl { 
  groupLetter: string; 
  minTime: number; 
  maxTime: number; 
  repetLetter: string;
}

export interface ITableRgl {
  tableCode: string,
  tableName: string;
  tableData: IRowRgl[];
}
