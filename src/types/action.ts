import { ActionTypes } from "./actionTypes";

export type Action = {
  type: keyof typeof ActionTypes;
};
