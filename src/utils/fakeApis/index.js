import { createServer, Model } from 'miragejs';
import { companyList, topCompanyList } from './companyList';
import { jobList } from './jobList';

export let server = createServer({
  models: {
    users: Model,
  },
  routes() {
    this.namespace = 'api';

    this.get('/users', (schema) => {
      return schema.db.users;
    });

    this.post('/users', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.db.users.insert(attrs);
    });
  },

  seeds(server) {
    server.db.loadData({
      users: [
        {
          fullname: 'Nguyễn Văn B',
          email: 'nguyenvanb@email.com',
          password: '123456b@B',
        },
      ],
    });
  },
});

export const setupServer = () => {
  server.get('/it-jobs', { jobs: jobList, companies: companyList });
  server.get('/top-companies', { topCompanies: topCompanyList });
};
