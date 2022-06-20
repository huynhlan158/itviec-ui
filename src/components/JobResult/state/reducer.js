import { SET_JOB_LIST, SET_JOB_SELECTED, SET_CURRENT_PAGE } from './constants';

const initState = {
  selectedJob: {},
  currentPage: 1,
  jobList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_JOB_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case SET_JOB_SELECTED:
      return {
        ...state,
        selectedJob: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      console.error('Invalid');
  }
}

export { initState };
export default reducer;
