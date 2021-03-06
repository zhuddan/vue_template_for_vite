export type DictTypes = 'sys_job_group' | 'sys_job_status';

export interface OriginDictData {
  id: string;
  dictValue: string;
  value: string;
  // other value
  code: string;
  key: string;

  dictLabel: string;
  label: string;
  // other label
  name: string;
  title: string;
}

export type DictDataKey = Array<keyof OriginDictData>;

export interface DictData {
  value: string;
  label: string;
  raw: Partial<OriginDictData>;
}

export type DictMap<T extends string, P> = {
  [key in T]: P;
};

export type DictValues<T extends DictTypes> = DictMap<T, DictData[]>;

export type DictState = 'pending' | 'fulfilled' | 'rejected';

export interface FormatDictOptions {
  separator: string;
  labelField: keyof OriginDictData;
  valueField: keyof OriginDictData;
  primitive: boolean;
}

export interface DictOptions {
  isLazy: boolean;
  labelFields: DictDataKey;
  valueFields: DictDataKey;
  retryTime: number;
  retryTimeout: number;
}
