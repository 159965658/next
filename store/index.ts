import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { IDemo } from "@/interfaces/store/demo";
import { demoState } from "./state/demo";
import { demoReducers } from "./reducers/demo";

export const initializeStore = (preloadedState: IDemo = demoState) => {
  console.log(demoState);
  return createStore<any, any, any, any>(
    demoReducers,
    preloadedState,
    composeWithDevTools(applyMiddleware()),
  );
};
