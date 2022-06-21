import { SET_JOB_LIST, SET_SELECTED_JOB, SET_CURRENT_PAGE, SET_COMPANY_LIST, SET_SELECTED_COMPANY } from './constants';

const initState = {
  currentPage: 1,
  selectedJob: {},
  jobList: [],
  selectedCompany: {},
  companyList: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_JOB_LIST:
      return {
        ...state,
        jobList: action.payload,
      };
    case SET_SELECTED_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_COMPANY_LIST:
      return {
        ...state,
        companyList: action.payload,
      };
    case SET_SELECTED_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload,
      };
    default:
      console.error('Invalid');
  }
}

export { initState };
export default reducer;
