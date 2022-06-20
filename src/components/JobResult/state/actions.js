import { SET_JOB_LIST, SET_JOB_SELECTED, SET_CURRENT_PAGE } from './constants';

export const setJobList = (payload) => ({
  type: SET_JOB_LIST,
  payload,
});

export const setJobSelected = (payload) => ({
  type: SET_JOB_SELECTED,
  payload,
});

export const setCurrentPage = (payload) => ({
  type: SET_CURRENT_PAGE,
  payload,
});
