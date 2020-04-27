import { IDemo } from "@/interfaces/store/demo";
import { IDemoAction } from "../actions/demo";
import { DEMOADD } from "../const";

export const demoReducers = (state: IDemo, action: IDemoAction): any => {
  let demo: IDemo = Object.assign({}, state);
  switch (action.type) {
    case DEMOADD:
      demo.value = demo.value + 1;
      break;
  }
  return demo;
};
