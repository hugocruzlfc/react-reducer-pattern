import { Action, ActionTypes, State } from "../types";

export function toggleReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.TOGGLE: {
      return { on: !state.on };
    }
    case ActionTypes.ON: {
      return { on: true };
    }
    case ActionTypes.OFF: {
      return { on: false };
    }
    default: {
      return state;
    }
  }
}
