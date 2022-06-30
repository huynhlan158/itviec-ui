import {
  // job + company list
  SET_JOB_LIST,
  SET_SELECTED_JOB,
  SET_COMPANY_LIST,
  SET_SELECTED_COMPANY,
  SET_RECOMMENDED_JOB_LIST,

  // filter jobs
  ADD_FILTER_LEVEL,
  REMOVE_FILTER_LEVEL,
  ADD_FILTER_SALARY,
  REMOVE_FILTER_SALARY,
  ADD_FILTER_COMPANY_TYPE,
  REMOVE_FILTER_COMPANY_TYPE,
  REMOVE_ALL_FILTERS,
  SET_SEARCH_TEXT,
  SET_SEARCH_LOCATION,
  SET_SEARCH_JOB_LIST,
  SET_FILTERED_JOB_LIST,
} from './constants';

const initState = {
  // job + company list
  selectedJob: {},
  jobList: [],
  recommendedJobList: [],
  selectedCompany: {},
  companyList: [],

  // filter jobs
  filterJobLevel: [],
  filterSalaryRange: [],
  filterCompanyType: [],
  userInputText: '',
  searchLocation: 'All Cities',
  searchJobList: [],
  filteredJobList: [],
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
    case SET_RECOMMENDED_JOB_LIST:
      return {
        ...state,
        recommendedJobList: action.payload,
      };

    // filter jobs
    case ADD_FILTER_LEVEL:
      return {
        ...state,
        filterJobLevel: [...state.filterJobLevel, action.payload],
      };
    case REMOVE_FILTER_LEVEL:
      return {
        ...state,
        filterJobLevel: state.filterJobLevel.filter((item) => item !== action.payload),
      };
    case ADD_FILTER_SALARY:
      return {
        ...state,
        filterSalaryRange: [...state.filterSalaryRange, action.payload],
      };
    case REMOVE_FILTER_SALARY:
      return {
        ...state,
        filterSalaryRange: state.filterSalaryRange.filter((item) => item !== action.payload),
      };
    case ADD_FILTER_COMPANY_TYPE:
      return {
        ...state,
        filterCompanyType: [...state.filterCompanyType, action.payload],
      };
    case REMOVE_FILTER_COMPANY_TYPE:
      return {
        ...state,
        filterCompanyType: state.filterCompanyType.filter((item) => item !== action.payload),
      };
    case REMOVE_ALL_FILTERS:
      return {
        ...state,
        filterJobLevel: [],
        filterSalaryRange: [],
        filterCompanyType: [],
      };
    case SET_SEARCH_TEXT:
      return {
        ...state,
        userInputText: action.payload,
      };
    case SET_SEARCH_LOCATION:
      return {
        ...state,
        searchLocation: action.payload,
      };
    case SET_SEARCH_JOB_LIST:
      return {
        ...state,
        searchJobList: action.payload,
      };
    case SET_FILTERED_JOB_LIST:
      return {
        ...state,
        filteredJobList: action.payload,
      };
    default:
      alert('Invalid action');
  }
}

export { initState };
export default reducer;
