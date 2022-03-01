// Action
import { RESIZE_WINDOW } from "../types";

export const doResizeWindow = (horizontalSize, verticalSize) => (dispatch) => {
  dispatch({
    type: RESIZE_WINDOW,
    horizontalSize: horizontalSize,
    verticalSize: verticalSize,
  });
};
