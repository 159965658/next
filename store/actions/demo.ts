import { DEMOADD_TYPE, DECREMENT } from "../const"; 

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IDEMOADD_TYPE {
  type: DEMOADD_TYPE;
}

// 定义 modifyAction 类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type IDemoAction = IDEMOADD_TYPE;

// 减少 state 次数的方法
export const demoAdd = (): IDEMOADD_TYPE => ({
  type: DECREMENT,
});
