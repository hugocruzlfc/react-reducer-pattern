import { useReducer } from "react";
import { toggleReducer } from "../reducer/toggleReducer";
import { ActionTypes, State } from "../types";

export function useToggle({ reducer = toggleReducer } = {}) {
  const initialState: State = { on: false };
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = () => dispatch({ type: ActionTypes.TOGGLE });
  const setOn = () => dispatch({ type: ActionTypes.ON });
  const setOff = () => dispatch({ type: ActionTypes.OFF });

  return { on: state.on, toggle, setOn, setOff };
}
