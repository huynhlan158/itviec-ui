import axios from 'axios';
import { setupServer } from '~/utils/fakeApis';

// setupServer();

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, options = {}) => {
  const respond = await httpRequest.get(path, options);
  return respond.data;
};

export default httpRequest;
export { get };
