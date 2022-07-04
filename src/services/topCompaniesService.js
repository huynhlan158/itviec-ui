import * as httpRequest from '~/utils/httpRequest';

export const getTopCompanies = async () => {
  try {
    const result = await httpRequest.get('/top-companies');

    return result;
  } catch (err) {
    alert(err);
  }
};
