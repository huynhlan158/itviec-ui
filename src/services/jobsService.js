import * as httpRequest from '~/utils/httpRequest';

export const getJobs = async () => {
  try {
    const res = await httpRequest.get('/it-jobs');
    return res;
  } catch (err) {
    alert(err);
  }
};
