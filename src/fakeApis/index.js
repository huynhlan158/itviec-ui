import { createServer, Model } from 'miragejs';
import { companyList, topCompanyList } from './companyList';
import { jobList } from './jobList';

export const setupServer = () => {
  let server = createServer({
    models: {
      jobs: Model,
    },
    routes() {
      this.get('/api/it-jobs', (schema) => {
        return schema.jobs.all();
      });
    },
  });

  server.get('/api/it-jobs', { jobs: jobList, companies: companyList });
  server.get('/api/top-companies', { topCompanies: topCompanyList });
};
