import { PAGE_INCREMENT, PAGE_RESTART } from './types';

const initialState = {
  page: 0,
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_INCREMENT:
      return {
        page: state.page + 1,
      };
    case PAGE_RESTART:
      return {
        page: 0,
      };
    default:
      return state;
  }
};