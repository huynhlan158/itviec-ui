import {
  SET_JOB_LIST,
  SET_SELECTED_JOB,
  SET_CURRENT_PAGE,
  SET_COMPANY_LIST,
  SET_SELECTED_COMPANY,
  SET_HEADER_SHRINK,
} from './constants';

export const setJobList = (payload) => ({
  type: SET_JOB_LIST,
  payload,
});

export const setSelectedJob = (payload) => ({
  type: SET_SELECTED_JOB,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
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

export const setHeaderShrink = (payload) => ({
  type: SET_HEADER_SHRINK,
  payload,
});
