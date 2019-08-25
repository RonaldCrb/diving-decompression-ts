export interface IDivePlan {
  depth: number;
  bottomTime: number;
  sit: number;
  nextDepth: number;
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

// table for air decompression
export interface IDecoStops {
  depth: number;
  time: number;
}

export interface IRowDeco {
  minTime: number;
  maxTime: number;
  airTAT: string;
  o2TAT: string;
  ttfs: string;
  o2cp: number;
  repetLetter: string;
  surDo2Recom: boolean;
  exceptionalExposure: boolean;
  surDo2Req?: boolean;
  strictlySurDo2?: boolean;
  airDecoStops: IDecoStops[];
  o2decoStops: IDecoStops[];
}

export interface IDecoDepth {
  minfsw: number;
  maxfsw: number;
  rows: IRowDeco[];
}

export interface ITableAirDeco {
  tableCode: string;
  tableName: string;
  tableData: IDecoDepth[];
}
