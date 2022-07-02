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

  // user
  ADD_USER,
  SET_CURRENT_USER,
  SET_LOGIN_STATUS,
} from './constants';

// job + company list
export const setJobList = (payload) => ({
  type: SET_JOB_LIST,
  payload,
});

export const setSelectedJob = (payload) => ({
  type: SET_SELECTED_JOB,
  payload,
});

export const setCompanyList = (payload) => ({
  type: SET_COMPANY_LIST,
  payload,
});

export const setSelectedCompany = (payload) => ({
  type: SET_SELECTED_COMPANY,
  payload,
});

export const setRecommendedJobList = (payload) => ({
  type: SET_RECOMMENDED_JOB_LIST,
  payload,
});

// filter jobs
export const addFilterLevel = (payload) => ({
  type: ADD_FILTER_LEVEL,
  payload,
});

export const removeFilterLevel = (payload) => ({
  type: REMOVE_FILTER_LEVEL,
  payload,
});

export const addFilterSalary = (payload) => ({
  type: ADD_FILTER_SALARY,
  payload,
});

export const removeFilterSalary = (payload) => ({
  type: REMOVE_FILTER_SALARY,
  payload,
});

export const addFilterCompanyType = (payload) => ({
  type: ADD_FILTER_COMPANY_TYPE,
  payload,
});

export const removeFilterCompanyType = (payload) => ({
  type: REMOVE_FILTER_COMPANY_TYPE,
  payload,
});

export const removeAllFilters = () => ({
  type: REMOVE_ALL_FILTERS,
});

export const setUserInputText = (payload) => ({
  type: SET_SEARCH_TEXT,
  payload,
});

export const setSearchLocation = (payload) => ({
  type: SET_SEARCH_LOCATION,
  payload,
});

export const setSearchJobList = (payload) => ({
  type: SET_SEARCH_JOB_LIST,
  payload,
});

export const setFilteredJobList = (payload) => ({
  type: SET_FILTERED_JOB_LIST,
  payload,
});

// user
export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const setCurrentUser = (payload) => ({
  type: SET_CURRENT_USER,
  payload,
});

export const setLoginStatus = (payload) => ({
  type: SET_LOGIN_STATUS,
  payload,
});
