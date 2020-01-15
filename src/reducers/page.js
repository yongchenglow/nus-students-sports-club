import {

} from '../actions/types';

const PAGE_DEFAULT_STATE = {
  isLoading: false,
  isModalOpen: false,
  isError: false,
  message: '',
};

export default function(state = PAGE_DEFAULT_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
