import { createServer } from 'miragejs';
import { companyList, topCompanyList } from './companyList';
import { jobList } from './jobList';

export const setupServer = () => {
  let server = createServer();
  server.get('/api/it-jobs', { jobs: jobList, companies: companyList });
  server.get('/api/top-companies', { topCompanies: topCompanyList });
};
