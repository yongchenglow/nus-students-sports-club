import {
  RESIZE_WINDOW
} from '../actions/types';

const PAGE_DEFAULT_STATE = {
  isLoading: false,
  isModalOpen: false,
  horizontalSize: '',
  verticalSize: '',
  isError: false,
  message: '',
};

export default function(state = PAGE_DEFAULT_STATE, action) {
  switch (action.type) {
    case RESIZE_WINDOW:
      return {
        ...state,
        horizontalSize: action.horizontalSize,
        verticalSize: action.verticalSize
      }

    default:
      return state;
  }
}
